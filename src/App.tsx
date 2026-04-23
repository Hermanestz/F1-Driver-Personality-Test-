/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Timer, Flag, Trophy, RotateCcw, ChevronRight } from 'lucide-react';
import { DRIVERS, QUESTIONS } from './constants';
import { Driver, DriverProfile } from './types';

// --- Components ---

const LapTimer = ({ isActive, reset }: { isActive: boolean; reset: boolean }) => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (reset) {
      setTime(0);
    }
  }, [reset]);

  useEffect(() => {
    if (isActive) {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive]);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000));
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  };

  return (
    <div className="flex items-center gap-2 font-mono text-f1-red text-base tracking-wider">
      <Timer size={20} />
      <span>{formatTime(time)}</span>
    </div>
  );
};

const F1ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="relative w-full h-8 flex items-center mb-8">
      {/* Track */}
      <div className="absolute w-full h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-f1-red"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Car Icon */}
      <motion.div 
        className="absolute z-10"
        initial={{ left: 0 }}
        animate={{ left: `${progress}%` }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        style={{ transform: 'translateX(-50%)' }}
      >
        <div className="relative">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 15L2 15L2 12L5 12L5 15Z" fill="#FF1801"/>
            <path d="M35 15L38 15L38 12L35 12L35 15Z" fill="#FF1801"/>
            <path d="M5 10C5 10 10 5 20 5C30 5 35 10 35 10V15H5V10Z" fill="#FF1801"/>
            <rect x="8" y="8" width="10" height="4" fill="white" fillOpacity="0.3"/>
            <circle cx="10" cy="16" r="3" fill="black"/>
            <circle cx="30" cy="16" r="3" fill="black"/>
          </svg>
          {/* Speed lines */}
          <motion.div 
            className="absolute -left-4 top-1/2 -translate-y-1/2 flex gap-1"
            animate={{ opacity: [0, 1, 0], x: [-5, 0] }}
            transition={{ repeat: Infinity, duration: 0.5 }}
          >
            <div className="w-2 h-0.5 bg-white/30" />
            <div className="w-1 h-0.5 bg-white/30" />
          </motion.div>
        </div>
      </motion.div>

      {/* Finish Flag */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
        <Flag size={16} className="text-white/50" />
      </div>
    </div>
  );
};

const initialProfile: DriverProfile = {
  aggression: 0,
  calculation: 0,
  teamwork: 0,
  adaptability: 0,
  charisma: 0,
  humor: 0,
  extraversion: 0,
  intuition: 0,
  focus: 0,
  emotionalStability: 0,
  confidence: 0,
  emotion: 0,
  leadership: 0
};

// --- Main App ---

export default function App() {
  const [gameState, setGameState] = useState<'welcome' | 'test' | 'result'>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userProfile, setUserProfile] = useState<DriverProfile>(initialProfile);
  const [resultDriver, setResultDriver] = useState<Driver | null>(null);
  const [matchPercent, setMatchPercent] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [soundBars] = useState(() => Array.from({ length: 16 }, () => 20 + Math.random() * 80));
  const startTimeRef = useRef<number>(0);

  const startTest = () => {
    setUserProfile(initialProfile);
    setCurrentQuestion(0);
    startTimeRef.current = Date.now();
    setGameState('test');
  };

  const selectOption = (optionIndex: number) => {
    const q = QUESTIONS[currentQuestion];
    const optionScores = q.options[optionIndex].scores;
    
    const newProfile = { ...userProfile };
    (Object.keys(optionScores) as (keyof DriverProfile)[]).forEach(key => {
      newProfile[key] += optionScores[key] || 0;
    });

    setUserProfile(newProfile);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult(newProfile);
    }
  };

  const calculateResult = (finalProfile: DriverProfile) => {
    // Normalize scores to a 1-10 scale (assuming base 5, each point moves it by 0.5)
    const normalizedProfile: DriverProfile = {
      aggression: Math.max(1, Math.min(10, Math.round(finalProfile.aggression * 0.5) + 5)),
      calculation: Math.max(1, Math.min(10, Math.round(finalProfile.calculation * 0.5) + 5)),
      teamwork: Math.max(1, Math.min(10, Math.round(finalProfile.teamwork * 0.5) + 5)),
      adaptability: Math.max(1, Math.min(10, Math.round(finalProfile.adaptability * 0.5) + 5)),
      charisma: Math.max(1, Math.min(10, Math.round(finalProfile.charisma * 0.5) + 5)),
      humor: Math.max(1, Math.min(10, Math.round(finalProfile.humor * 0.5) + 5)),
      extraversion: Math.max(1, Math.min(10, Math.round(finalProfile.extraversion * 0.5) + 5)),
      intuition: Math.max(1, Math.min(10, Math.round(finalProfile.intuition * 0.5) + 5)),
      focus: Math.max(1, Math.min(10, Math.round(finalProfile.focus * 0.5) + 5)),
      emotionalStability: Math.max(1, Math.min(10, Math.round(finalProfile.emotionalStability * 0.5) + 5)),
      confidence: Math.max(1, Math.min(10, Math.round(finalProfile.confidence * 0.5) + 5)),
      emotion: Math.max(1, Math.min(10, Math.round(finalProfile.emotion * 0.5) + 5)),
      leadership: Math.max(1, Math.min(10, Math.round(finalProfile.leadership * 0.5) + 5)),
    };

    const calculateDistance = (p1: DriverProfile, p2: DriverProfile) => {
      return Math.sqrt(
        Math.pow(p1.aggression - p2.aggression, 2) +
        Math.pow(p1.calculation - p2.calculation, 2) +
        Math.pow(p1.teamwork - p2.teamwork, 2) +
        Math.pow(p1.adaptability - p2.adaptability, 2) +
        Math.pow(p1.charisma - p2.charisma, 2) +
        Math.pow(p1.humor - p2.humor, 2) +
        Math.pow(p1.extraversion - p2.extraversion, 2) +
        Math.pow(p1.intuition - p2.intuition, 2) +
        Math.pow(p1.focus - p2.focus, 2) +
        Math.pow(p1.emotionalStability - p2.emotionalStability, 2) +
        Math.pow(p1.confidence - p2.confidence, 2) +
        Math.pow(p1.emotion - p2.emotion, 2) +
        Math.pow(p1.leadership - p2.leadership, 2)
      );
    };

    let bestMatch: Driver | null = null;
    let minDistance = Infinity;

    DRIVERS.forEach(driver => {
      const distance = calculateDistance(normalizedProfile, driver.profile);
      if (distance < minDistance) {
        minDistance = distance;
        bestMatch = driver;
      }
    });

    // Calculate match percentage (max possible distance is roughly sqrt(5 * 9^2) ≈ 20)
    // We map distance 0 to 99%, distance 10 to 70%
    const match = Math.max(50, Math.min(99, Math.round(99 - (minDistance * 2.5))));

    const elapsed = Date.now() - startTimeRef.current;
    setTotalTime(elapsed);
    setResultDriver(bestMatch);
    setMatchPercent(match);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setGameState('result');
    }, 2500);
  };

  const formatLapTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000));
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  };

  return (
    <div className="min-h-screen bg-f1-black text-white selection:bg-f1-red/30">
      <div className="mx-auto px-4 py-8 min-h-screen flex flex-col justify-center transition-all duration-500 w-full">
        
        <AnimatePresence mode="wait">
          {gameState === 'welcome' && (
            <motion.div 
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center space-y-8"
            >
              <div className="flex justify-center">
                <motion.div 
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <Trophy size={64} className="text-f1-red" />
                </motion.div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-2xl md:text-3xl font-black italic tracking-tighter leading-tight text-center">
                  F1 Driver <br />
                  <span className="text-f1-red">Personality</span> Test
                </h1>
                <p className="text-f1-gray text-xl max-w-md mx-auto">
                  找出与你最匹配的2026赛季F1车手
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startTest}
                className="group relative inline-flex items-center gap-3 bg-f1-red hover:bg-f1-red/90 px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                <span className="f1-font">Start Session</span>
                <ChevronRight size={20} />
              </motion.button>
            </motion.div>
          )}

          {gameState === 'test' && (
            <motion.div 
              key="test"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-f1-border pb-6">
                <div className="space-y-1">
                  <div className="text-f1-red font-bold uppercase tracking-tighter text-sm f1-font">Session Progress</div>
                  <div className="text-base font-black italic uppercase f1-font">
                    LAP {String(currentQuestion + 1).padStart(2, '0')} <span className="text-white/20">/ {QUESTIONS.length}</span>
                  </div>
                </div>
                <LapTimer isActive={gameState === 'test'} reset={currentQuestion === 0} />
              </div>

              <div className="space-y-1">
                <div className="text-right">
                  <div className="text-2xl font-black f1-font text-f1-red">TEAM</div>
                  <div className="text-2xl font-black f1-font">RADIO</div>
                </div>
              </div>
              <div className="flex items-end justify-center gap-1 h-16">
                {soundBars.map((height, i) => {
                  const totalBars = soundBars.length;
                  const centerIndex = totalBars / 2;
                  const distanceFromCenter = Math.abs(i - centerIndex);
                  const opacity = 1 - (distanceFromCenter / centerIndex) * 0.75;
                  
                  return (
                    <motion.div
                      key={i}
                      className="w-8 rounded-none"
                      style={{ backgroundColor: `rgba(255, 24, 1, ${opacity})` }}
                      animate={{
                        height: [`${height}%`, `${height * 0.5}%`, `${height * 0.8}%`, `${height * 0.3}%`, `${height}%`]
                      }}
                      transition={{
                        duration: 0.5 + i * 0.05,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  );
                })}
              </div>

              <div className="space-y-8">
                <AnimatePresence mode="wait">
                  {QUESTIONS[currentQuestion] ? (
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <motion.h2 
                        className="text-xs leading-tight chinese-text"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0 }}
                      >
                        {QUESTIONS[currentQuestion].text}
                      </motion.h2>

                      <div className="grid gap-3">
                        {QUESTIONS[currentQuestion].options.map((option, idx) => (
                          <motion.button
                            key={idx}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => selectOption(idx)}
                            transition={{ delay: 0.1 + idx * 0.1 }}
                            className="w-full text-left p-5 rounded-none bg-f1-card border border-f1-border hover:border-f1-red transition-colors flex items-center justify-between group flex-row-reverse"
                          >
                            <span className="text-xs text-white/80 group-hover:text-white transition-colors chinese-text text-right">
                              {option.text}
                            </span>
                            <ChevronRight size={18} className="text-f1-gray group-hover:text-f1-red transition-colors" />
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="h-40 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-f1-red"></div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {isLoading && resultDriver && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-f1-black flex items-center justify-center overflow-hidden"
            >
              <div className="relative w-full h-48 flex items-center">
                <motion.div
                  initial={{ x: '-120%' }}
                  animate={{ x: '120%' }}
                  transition={{ duration: 2.5, ease: 'linear' }}
                  className="relative"
                >
                  <img 
                    src={resultDriver.carImage} 
                    alt="F1 Car"
                    className="h-16 md:h-24 object-contain"
                    style={{ 
                      filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))'
                    }}
                  />
                  
                  {[...Array(6)].map((_, i) => (
                    <motion.div 
                      key={i}
                      className="absolute top-1/2 rounded-full"
                      style={{
                        right: '-20px',
                        width: `${8 + i * 6}px`,
                        height: `${2 + i * 1.5}px`,
                        y: '-50%',
                        background: `linear-gradient(to right, rgba(255,255,255,${0.6 - i * 0.08}), transparent)`
                      }}
                      animate={{ 
                        x: [0, -(80 + i * 30)],
                        opacity: [0.8, 0],
                        y: ['-50%', `${-30 + i * 12}%`]
                      }}
                      transition={{ 
                        duration: 0.4 + i * 0.1, 
                        repeat: Infinity, 
                        repeatDelay: 0.15 - i * 0.02,
                        ease: 'easeOut'
                      }}
                    />
                  ))}
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-32 text-center"
              >
                <div className="text-2xl md:text-3xl font-black italic f1-font text-white">
                  CALCULATING RESULT
                </div>
              </motion.div>
            </motion.div>
          )}

          {gameState === 'result' && resultDriver && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full mx-auto space-y-6"
            >
              {/* Lap Time Display */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="flex items-center justify-center gap-2"
              >
                <img 
                  src="/images/fastest_lap.jpg" 
                  alt="Fastest Lap" 
                  className="h-full object-contain"
                  style={{ height: '1.67rem' }}
                />
                <div className="text-xl md:text-2xl font-bold f1-font font-mono text-purple-500">
                  {formatLapTime(totalTime)}
                </div>
              </motion.div>

              {/* Official F1 Driver Card Layout - 2026 Edition */}
              <div 
                className="relative overflow-hidden shadow-2xl bg-f1-card border-l-[12px]"
                style={{ 
                  borderLeftColor: resultDriver.teamColor,
                  aspectRatio: '16/9',
                  maxHeight: '60vh'
                }}
              >
                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                {/* Left Content: Info - 50% width */}
                <div className="absolute left-0 top-0 bottom-0 w-[50%] z-10 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-1 sm:space-y-2">
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="space-y-0.5"
                    >
                      <div className="text-sm sm:text-lg md:text-xl font-medium text-white/80 f1-font leading-tight">
                        {resultDriver.name.split(' ')[0]}
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl font-black text-white f1-font leading-none">
                        {resultDriver.name.split(' ').slice(1).join(' ')}
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                    >
                      <div className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] font-black text-white/10 f1-font select-none leading-none">
                        {resultDriver.number}
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                      className="text-xs sm:text-sm md:text-base font-bold text-white/80 f1-font uppercase tracking-wider"
                    >
                      {resultDriver.team}
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="w-12 h-12 sm:w-16 sm:w-20 flex items-center justify-center"
                  >
                    <img 
                      src={resultDriver.teamLogo} 
                      alt={resultDriver.team}
                      className="h-full object-contain drop-shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>

                {/* Right Content: Driver Photo - 50% width */}
                <div className="absolute right-0 top-0 bottom-0 w-[50%] overflow-hidden">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ 
                      background: `linear-gradient(to right, transparent 20%, rgba(21,21,30,0.7) 60%, ${resultDriver.teamColor}30 100%)`
                    }}
                  />
                  {resultDriver.photo && (
                    <motion.img 
                      initial={{ x: '10%', opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      src={resultDriver.photo} 
                      alt={resultDriver.name}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
              </div>

              {/* Traits & Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="mt-12 space-y-8"
              >
                <div className="text-left">
                  <div className="bg-f1-card border border-f1-border p-6 md:p-8 space-y-4">
                    <div className="text-base uppercase font-bold tracking-widest f1-font" style={{ color: resultDriver.teamColor }}>Driver Profile</div>
                    <div className="text-xl md:text-2xl text-white/90 leading-relaxed">{resultDriver.description}</div>
                  </div>
                </div>

                <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setGameState('welcome')}
                  className="inline-flex items-center gap-3 bg-white text-f1-black px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm f1-font hover:bg-f1-red hover:text-white transition-all shadow-xl"
                >
                  <RotateCcw size={20} />
                  <span>Restart Session</span>
                </motion.button>
              </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
      
      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(225,6,0,0.03),transparent_70%)]" />
      </div>
    </div>
  );
}
