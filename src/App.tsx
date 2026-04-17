/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Timer, Flag, Trophy, RotateCcw, ChevronRight, Gauge } from 'lucide-react';
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
    <div className="flex items-center gap-2 font-mono text-f1-red text-lg tracking-wider">
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
  charisma: 0
};

// --- Main App ---

export default function App() {
  const [gameState, setGameState] = useState<'welcome' | 'test' | 'result'>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userProfile, setUserProfile] = useState<DriverProfile>(initialProfile);
  const [resultDriver, setResultDriver] = useState<Driver | null>(null);
  const [matchPercent, setMatchPercent] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
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
    };

    const calculateDistance = (p1: DriverProfile, p2: DriverProfile) => {
      return Math.sqrt(
        Math.pow(p1.aggression - p2.aggression, 2) +
        Math.pow(p1.calculation - p2.calculation, 2) +
        Math.pow(p1.teamwork - p2.teamwork, 2) +
        Math.pow(p1.adaptability - p2.adaptability, 2) +
        Math.pow(p1.charisma - p2.charisma, 2)
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
    setGameState('result');
  };

  const formatLapTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000));
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  };

  return (
    <div className="min-h-screen bg-f1-black text-white selection:bg-f1-red/30">
      <div className={`mx-auto px-6 py-12 min-h-screen flex flex-col justify-center transition-all duration-500 ${gameState === 'result' ? 'max-w-5xl' : 'max-w-2xl'}`}>
        
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
                <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none">
                  F1 Driver <br />
                  <span className="text-f1-red">Personality</span> Test
                </h1>
                <p className="text-f1-gray text-lg max-w-md mx-auto font-medium">
                  Find your match for the 2026 Formula 1 season.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startTest}
                className="group relative inline-flex items-center gap-3 bg-f1-red hover:bg-f1-red/90 px-10 py-5 rounded-tr-xl rounded-bl-xl font-bold uppercase tracking-widest transition-colors overflow-hidden"
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
                  <div className="text-4xl font-black italic uppercase f1-font">
                    LAP {String(currentQuestion + 1).padStart(2, '0')} <span className="text-white/20">/ {QUESTIONS.length}</span>
                  </div>
                </div>
                <LapTimer isActive={gameState === 'test'} reset={currentQuestion === 0} />
              </div>

              <F1ProgressBar progress={((currentQuestion) / QUESTIONS.length) * 100} />

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
                      <h2 className="text-2xl font-bold leading-tight f1-font">
                        {QUESTIONS[currentQuestion].text}
                      </h2>

                      <div className="grid gap-3">
                        {QUESTIONS[currentQuestion].options.map((option, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => selectOption(idx)}
                            className="w-full text-left p-5 rounded-lg bg-f1-card border border-f1-border hover:border-f1-red transition-colors flex items-center justify-between group"
                          >
                            <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">
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

          {gameState === 'result' && resultDriver && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              {/* Official F1 Driver Card Layout - 2026 Edition */}
              <div 
                className="relative overflow-hidden rounded-tr-[40px] rounded-bl-[40px] shadow-2xl flex flex-col lg:flex-row bg-f1-card border-l-[12px]"
                style={{ borderLeftColor: resultDriver.teamColor }}
              >
                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                
                {/* Left Content: Info */}
                <div className="relative z-10 p-8 md:p-12 flex flex-col justify-between flex-1 text-left order-2 lg:order-1">
                  <div className="space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <motion.div 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="text-2xl font-medium text-white/80 f1-font leading-tight"
                        >
                          {resultDriver.name.split(' ')[0]}
                        </motion.div>
                        <motion.div 
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.9 }}
                          className="text-4xl sm:text-5xl md:text-6xl font-black italic text-white f1-font leading-none"
                        >
                          {resultDriver.name.split(' ').slice(1).join(' ')}
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="text-6xl sm:text-7xl md:text-8xl font-black italic f1-font select-none leading-none ml-4"
                        style={{ WebkitTextStroke: `2px ${resultDriver.teamColor}`, color: 'transparent' }}
                      >
                        {resultDriver.number}
                      </motion.div>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1 h-8 shrink-0" style={{ backgroundColor: resultDriver.teamColor }} />
                      <div className="text-base sm:text-lg font-bold text-white/80 f1-font uppercase tracking-wider">
                        {resultDriver.team}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8"
                  >
                    <div className="w-24 h-16 flex items-center justify-center p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                      <img 
                        src={resultDriver.teamLogo} 
                        alt={resultDriver.team}
                        className="h-full object-contain drop-shadow-md"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="bg-white/10 text-white px-6 py-3 rounded-full shadow-lg border border-white/20 backdrop-blur-sm">
                      <span className="text-sm font-bold uppercase tracking-widest f1-font">{matchPercent}% Match</span>
                    </div>
                  </motion.div>
                </div>

                {/* Right Content: Car Image */}
                <div className="relative flex-1 flex items-center justify-center lg:justify-end overflow-hidden p-8 lg:p-4 bg-gradient-to-br from-transparent to-black/40 min-h-[250px] sm:min-h-[350px] lg:min-h-[500px] order-1 lg:order-2">
                  {/* Team Color Glow Behind Car */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.2, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[60px] md:blur-[80px] rounded-full pointer-events-none"
                    style={{ backgroundColor: resultDriver.teamColor }}
                  />

                  <motion.img 
                    initial={{ x: '150%', skewX: -15 }}
                    animate={{ x: 0, skewX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.2, 0.8, 0.2, 1],
                      delay: 0.2 
                    }}
                    src={resultDriver.carImage} 
                    alt={`${resultDriver.team} Car`}
                    className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[650px] object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] scale-110 lg:scale-125 lg:translate-x-12 origin-bottom"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Large Abbrev in BG */}
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute top-1/2 right-0 -translate-y-1/2 text-[100px] sm:text-[150px] lg:text-[250px] font-black italic text-white/[0.03] pointer-events-none f1-font select-none leading-none overflow-hidden"
                  >
                    {resultDriver.abbrev}
                  </motion.div>
                </div>
              </div>

              {/* Traits & Actions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="mt-12 space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="bg-f1-card border border-f1-border p-6 md:p-8 rounded-2xl space-y-4">
                    <div className="text-xs uppercase font-bold text-f1-red tracking-widest f1-font">Driver Profile</div>
                    <div className="text-lg md:text-xl font-medium text-white/90 leading-relaxed">{resultDriver.description}</div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 }}
                    className="bg-f1-card border border-f1-border p-6 md:p-8 rounded-2xl space-y-4"
                  >
                    <div className="text-xs uppercase font-bold text-f1-red tracking-widest f1-font">Lap Time</div>
                    <div className="flex items-center gap-3">
                      <Gauge size={32} className="text-f1-red" />
                      <div className="text-3xl md:text-4xl font-black italic f1-font font-mono">
                        {formatLapTime(totalTime)}
                      </div>
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setGameState('welcome')}
                  className="inline-flex items-center gap-3 bg-white text-f1-black px-8 py-4 rounded-sm font-black uppercase tracking-widest text-sm f1-font hover:bg-f1-red hover:text-white transition-all shadow-xl"
                >
                  <RotateCcw size={20} />
                  <span>Restart Session</span>
                </motion.button>
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
