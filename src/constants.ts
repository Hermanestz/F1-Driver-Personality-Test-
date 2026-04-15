import img0 from './images/cars/logos/2026redbullracinglogowhite.webp';
import img1 from './images/cars/2026redbullracingcarright.webp';
import img2 from './images/cars/logos/2026ferrarilogowhite.webp';
import img3 from './images/cars/2026ferraricarright.webp';
import img4 from './images/cars/logos/2026mclarenlogowhite.webp';
import img5 from './images/cars/2026mclarencarright.webp';
import img6 from './images/cars/logos/2026mercedeslogowhite.webp';
import img7 from './images/cars/2026mercedescarright.webp';
import img8 from './images/cars/logos/2026astonmartinlogowhite.webp';
import img9 from './images/cars/2026astonmartincarright.webp';
import img10 from './images/cars/logos/2026alpinelogowhite.webp';
import img11 from './images/cars/2026alpinecarright.webp';
import img12 from './images/cars/logos/2026williamslogowhite.webp';
import img13 from './images/cars/2026williamscarright.webp';
import img14 from './images/cars/logos/2026racingbullslogowhite.webp';
import img15 from './images/cars/2026racingbullscarright.webp';
import img16 from './images/cars/logos/2026audilogowhite.webp';
import img17 from './images/cars/2026audicarright.webp';
import img18 from './images/cars/logos/2026haasf1teamlogowhite.webp';
import img19 from './images/cars/2026haasf1teamcarright.webp';
import img20 from './images/cars/logos/2026cadillaclogowhite.webp';
import img21 from './images/cars/2026cadillaccarright.webp';

import { Driver, Question } from './types';

export const DRIVERS: Driver[] = [
  {
    name: 'Max Verstappen',
    chinese: '马克斯·维斯塔潘',
    team: 'Oracle Red Bull Racing',
    abbrev: 'VER',
    number: '1',
    flag: '🇳🇱',
    teamColor: '#3671C6',
    teamLogo: img0,
    photo: '',
    carImage: img1,
    description: '以极致的进攻型驾驶和精准的赛车控制著称。他性格冷静沉默，在赛道上追求完美，具有极度的竞争欲望和永不妥协的求胜心。',
    profile: { aggression: 10, calculation: 8, teamwork: 4, adaptability: 9, charisma: 6 }
  },
  {
    name: 'Liam Lawson',
    chinese: '利亚姆·劳森',
    team: 'Oracle Red Bull Racing',
    abbrev: 'LAW',
    number: '30',
    flag: '🇳🇿',
    teamColor: '#3671C6',
    teamLogo: img0,
    photo: '',
    carImage: img1,
    description: '驾驶风格激进大胆，充满攻击性。作为新西兰的年轻小将，他展现出了硬核暴力的驾驶特点和永不言败的坚韧性格。',
    profile: { aggression: 8, calculation: 6, teamwork: 6, adaptability: 7, charisma: 5 }
  },
  {
    name: 'Lewis Hamilton',
    chinese: '刘易斯·汉密尔顿',
    team: 'Scuderia Ferrari',
    abbrev: 'HAM',
    number: '44',
    flag: '🇬🇧',
    teamColor: '#E80020',
    teamLogo: img2,
    photo: '',
    carImage: img3,
    description: '拥有七届世界冠军的辉煌履历，驾驶风格优雅细腻且极具技术性。赛场外他是时尚先锋与社会活动家，性格优雅大气，充满领袖魅力。',
    profile: { aggression: 8, calculation: 9, teamwork: 8, adaptability: 10, charisma: 10 }
  },
  {
    name: 'Charles Leclerc',
    chinese: '夏尔·勒克莱尔',
    team: 'Scuderia Ferrari',
    abbrev: 'LEC',
    number: '16',
    flag: '🇲🇨',
    teamColor: '#E80020',
    teamLogo: img2,
    photo: '',
    carImage: img3,
    description: '驾驶风格充满激情与血性，单圈速度极快。他性格热情奔放，带有独特的艺术气质，对法拉利车队有着深厚的家乡情怀。',
    profile: { aggression: 9, calculation: 6, teamwork: 7, adaptability: 8, charisma: 8 }
  },
  {
    name: 'Lando Norris',
    chinese: '兰多·诺里斯',
    team: 'McLaren Formula 1 Team',
    abbrev: 'NOR',
    number: '4',
    flag: '🇬🇧',
    teamColor: '#FF8000',
    teamLogo: img4,
    photo: '',
    carImage: img5,
    description: '驾驶风格灵活多变，极具攻击性。性格幽默坦诚、直率真实，是围场内备受欢迎的社交达人，深受车迷喜爱。',
    profile: { aggression: 7, calculation: 7, teamwork: 8, adaptability: 8, charisma: 9 }
  },
  {
    name: 'Oscar Piastri',
    chinese: '奥斯卡·皮亚斯特里',
    team: 'McLaren Formula 1 Team',
    abbrev: 'PIA',
    number: '81',
    flag: '🇦🇺',
    teamColor: '#FF8000',
    teamLogo: img4,
    photo: '',
    carImage: img5,
    description: '以精确细腻和极其稳定的驾驶风格见长。虽然是年轻车手，但性格内敛低调、专注谦虚，往往能在沉默中爆发惊人实力。',
    profile: { aggression: 6, calculation: 9, teamwork: 9, adaptability: 8, charisma: 4 }
  },
  {
    name: 'George Russell',
    chinese: '乔治·拉塞尔',
    team: 'Mercedes-AMG PETRONAS F1 Team',
    abbrev: 'RUS',
    number: '63',
    flag: '🇬🇧',
    teamColor: '#27F4D2',
    teamLogo: img6,
    photo: '',
    carImage: img7,
    description: '全能型车手，驾驶风格激进且善于进攻。他性格严谨认真，雄心勃勃，对总冠军有着强烈的渴望，展现出卓越的领导力。',
    profile: { aggression: 7, calculation: 9, teamwork: 7, adaptability: 8, charisma: 7 }
  },
  {
    name: 'Kimi Antonelli',
    chinese: '基米·安托内利',
    team: 'Mercedes-AMG PETRONAS F1 Team',
    abbrev: 'ANT',
    number: '12',
    flag: '🇮🇹',
    teamColor: '#27F4D2',
    teamLogo: img6,
    photo: '',
    carImage: img7,
    description: '梅赛德斯青训的超级新星，驾驶风格大胆激进。虽然性格内敛害羞，但一上赛道便展现出年轻人的冲劲与专注认真的态度。',
    profile: { aggression: 8, calculation: 6, teamwork: 7, adaptability: 7, charisma: 5 }
  },
  {
    name: 'Fernando Alonso',
    chinese: '费尔南多·阿隆索',
    team: 'Aston Martin Aramco F1 Team',
    abbrev: 'ALO',
    number: '14',
    flag: '🇪🇸',
    teamColor: '#229971',
    teamLogo: img8,
    photo: '',
    carImage: img9,
    description: '拥有极其丰富的比赛经验，驾驶风格充满智慧与老道策略。他是一位执着坚毅的智者，永不放弃的斗士精神令人敬佩。',
    profile: { aggression: 9, calculation: 10, teamwork: 5, adaptability: 9, charisma: 8 }
  },
  {
    name: 'Lance Stroll',
    chinese: '兰斯·斯托尔',
    team: 'Aston Martin Aramco F1 Team',
    abbrev: 'STR',
    number: '18',
    flag: '🇨🇦',
    teamColor: '#229971',
    teamLogo: img8,
    photo: '',
    carImage: img9,
    description: '驾驶风格稳健，擅长防守反击和雨战。性格低调安静，在家族的支持下依然保持勤奋努力，不断提升自己的比赛节奏。',
    profile: { aggression: 7, calculation: 5, teamwork: 6, adaptability: 5, charisma: 4 }
  },
  {
    name: 'Pierre Gasly',
    chinese: '皮埃尔·加斯利',
    team: 'BWT Alpine F1 Team',
    abbrev: 'GAS',
    number: '10',
    flag: '🇫🇷',
    teamColor: '#00CBFF',
    teamLogo: img10,
    photo: '',
    carImage: img11,
    description: '驾驶风格激进灵活，极具攻击性。性格热情开朗，充满法国人的浪漫气质，在经历了职业生涯的起伏后依然不断追求突破。',
    profile: { aggression: 7, calculation: 7, teamwork: 7, adaptability: 7, charisma: 7 }
  },
  {
    name: 'Jack Doohan',
    chinese: '杰克·杜汉',
    team: 'BWT Alpine F1 Team',
    abbrev: 'DOO',
    number: '7',
    flag: '🇦🇺',
    teamColor: '#00CBFF',
    teamLogo: img10,
    photo: '',
    carImage: img11,
    description: '作为新生代车手，驾驶风格充满年轻冲劲，潜力无限。他性格专注认真，极度渴望在F1赛场上证明自己的实力。',
    profile: { aggression: 6, calculation: 7, teamwork: 8, adaptability: 6, charisma: 5 }
  },
  {
    name: 'Alexander Albon',
    chinese: '亚历克斯·阿尔本',
    team: 'Williams Racing',
    abbrev: 'ALB',
    number: '23',
    flag: '🇹🇭',
    teamColor: '#64CCFE',
    teamLogo: img12,
    photo: '',
    carImage: img13,
    description: '驾驶风格激进灵活，同时具备出色的保胎能力。性格友善健谈、乐观积极，重情重义，是车队中不可或缺的核心力量。',
    profile: { aggression: 6, calculation: 8, teamwork: 9, adaptability: 8, charisma: 8 }
  },
  {
    name: 'Carlos Sainz',
    chinese: '卡洛斯·塞恩斯',
    team: 'Williams Racing',
    abbrev: 'SAI',
    number: '55',
    flag: '🇪🇸',
    teamColor: '#64CCFE',
    teamLogo: img12,
    photo: '',
    carImage: img13,
    description: '被誉为“平顺操作员”，驾驶风格全面均衡且极其稳定。性格务实可靠，适应力极强，具备出色的团队精神和战术头脑。',
    profile: { aggression: 7, calculation: 10, teamwork: 8, adaptability: 8, charisma: 7 }
  },
  {
    name: 'Yuki Tsunoda',
    chinese: '角田裕毅',
    team: 'Visa Cash App RB Formula One Team',
    abbrev: 'TSU',
    number: '22',
    flag: '🇯🇵',
    teamColor: '#6692FF',
    teamLogo: img14,
    photo: '',
    carImage: img15,
    description: '驾驶风格充满激情与血性，以极晚的刹车和攻击性著称。性格直率真实，虽然有时情绪化，但始终在不断进步与成长。',
    profile: { aggression: 9, calculation: 5, teamwork: 6, adaptability: 7, charisma: 8 }
  },
  {
    name: 'Isack Hadjar',
    chinese: '艾萨克·哈贾尔',
    team: 'Visa Cash App RB Formula One Team',
    abbrev: 'HAD',
    number: '25',
    flag: '🇫🇷',
    teamColor: '#6692FF',
    teamLogo: img14,
    photo: '',
    carImage: img15,
    description: '红牛青训的杰出代表，驾驶风格大胆激进，充满年轻冲劲。他性格专注认真，极度渴望在顶级赛事中证明自己的价值。',
    profile: { aggression: 8, calculation: 6, teamwork: 6, adaptability: 6, charisma: 5 }
  },
  {
    name: 'Nico Hulkenberg',
    chinese: '尼科·霍肯伯格',
    team: 'Audi F1 Team',
    abbrev: 'HUL',
    number: '27',
    flag: '🇩🇪',
    teamColor: '#F5002D',
    teamLogo: img16,
    photo: '',
    carImage: img17,
    description: '经验丰富的德国老将，驾驶风格稳定且经验老道。性格展现出德国硬汉的特质，耐力强劲，总能在中游集团中稳定输出。',
    profile: { aggression: 7, calculation: 8, teamwork: 8, adaptability: 8, charisma: 7 }
  },
  {
    name: 'Gabriel Bortoleto',
    chinese: '加布里埃尔·博尔托莱托',
    team: 'Audi F1 Team',
    abbrev: 'BOR',
    number: '11',
    flag: '🇧🇷',
    teamColor: '#F5002D',
    teamLogo: img16,
    photo: '',
    carImage: img17,
    description: '来自巴西的超级新星，驾驶风格极具攻击性。他身上充满巴西人的活力与新秀的冲劲，展现出不可估量的未来潜力。',
    profile: { aggression: 7, calculation: 7, teamwork: 7, adaptability: 7, charisma: 6 }
  },
  {
    name: 'Esteban Ocon',
    chinese: '埃斯特班·奥康',
    team: 'MoneyGram Haas F1 Team',
    abbrev: 'OCO',
    number: '31',
    flag: '🇫🇷',
    teamColor: '#B6BABD',
    teamLogo: img18,
    photo: '',
    carImage: img19,
    description: '驾驶风格稳健，以强悍的防守著称。性格成熟稳重，是一位典型的法国硬汉，在赛道上始终坚持团队优先的原则。',
    profile: { aggression: 9, calculation: 6, teamwork: 3, adaptability: 7, charisma: 6 }
  },
  {
    name: 'Oliver Bearman',
    chinese: '奥利弗·贝尔曼',
    team: 'MoneyGram Haas F1 Team',
    abbrev: 'BEA',
    number: '87',
    flag: '🇬🇧',
    teamColor: '#B6BABD',
    teamLogo: img18,
    photo: '',
    carImage: img19,
    description: '法拉利青训的璀璨新星，驾驶风格极具攻击性且潜力无限。性格年轻自信，充满英国新星的冲劲，敢于在赛场上挑战极限。',
    profile: { aggression: 7, calculation: 7, teamwork: 8, adaptability: 7, charisma: 6 }
  },
  {
    name: 'Valtteri Bottas',
    chinese: '瓦尔特利·博塔斯',
    team: 'Cadillac F1 Team',
    abbrev: 'BOT',
    number: '77',
    flag: '🇫🇮',
    teamColor: '#FFFFFF',
    teamLogo: img20,
    photo: '',
    carImage: img21,
    description: '驾驶风格全面均衡，极其稳定。性格展现出典型的“芬兰冰人”特质，沉默寡言但专业严谨，是车队最可靠的得分机器。',
    profile: { aggression: 5, calculation: 7, teamwork: 10, adaptability: 7, charisma: 8 }
  },
  {
    name: 'Franco Colapinto',
    chinese: '佛朗哥·科拉平托',
    team: 'Cadillac F1 Team',
    abbrev: 'COL',
    number: '43',
    flag: '🇦🇷',
    teamColor: '#FFFFFF',
    teamLogo: img20,
    photo: '',
    carImage: img21,
    description: '驾驶风格大胆进攻，极具攻击性。性格年轻气盛，充满阿根廷人的热血与野性难驯的特质，在赛道上极具观赏性。',
    profile: { aggression: 9, calculation: 5, teamwork: 6, adaptability: 7, charisma: 9 }
  }
];

export const QUESTIONS: Question[] = [
  {
    text: '面对一个极具挑战性但风险很高的新项目，你的第一反应是：',
    options: [
      { text: '毫不犹豫地接下，高风险意味着高回报', scores: { aggression: 3, calculation: -1 } },
      { text: '仔细评估所有可能的风险，制定详细的备用计划', scores: { calculation: 3, aggression: -1 } },
      { text: '召集团队，听听大家的意见再做决定', scores: { teamwork: 3, charisma: 1 } },
      { text: '先尝试一小部分，根据情况随时调整方向', scores: { adaptability: 3 } }
    ]
  },
  {
    text: '在团队合作中，如果有人提出了和你完全相反的意见，你会：',
    options: [
      { text: '坚持自己的观点，用强硬的态度说服对方', scores: { aggression: 2, teamwork: -2, charisma: 1 } },
      { text: '用数据和逻辑逐一反驳对方的漏洞', scores: { calculation: 3, charisma: -1 } },
      { text: '寻找双方观点的共同点，试图达成妥协', scores: { teamwork: 3, adaptability: 1 } },
      { text: '觉得对方说的也有道理，随时准备改变自己的立场', scores: { adaptability: 3, aggression: -1 } }
    ]
  },
  {
    text: '你的周末通常会怎么安排？',
    options: [
      { text: '参加竞技体育、赛车或高强度的户外运动', scores: { aggression: 3, charisma: 1 } },
      { text: '宅在家里看书、研究感兴趣的硬核知识', scores: { calculation: 3, charisma: -2 } },
      { text: '和朋友们聚餐、开派对，享受社交时光', scores: { charisma: 3, teamwork: 2 } },
      { text: '没有固定计划，走到哪算哪，看心情决定', scores: { adaptability: 3, calculation: -1 } }
    ]
  },
  {
    text: '当你犯了一个明显的错误时，你会如何应对？',
    options: [
      { text: '感到非常沮丧甚至愤怒，发誓下次一定要赢回来', scores: { aggression: 2, calculation: -1 } },
      { text: '冷静分析错误的原因，确保下次不再犯同样的错', scores: { calculation: 3, adaptability: 1 } },
      { text: '主动向团队承认错误，并承担起自己的责任', scores: { teamwork: 3, charisma: 1 } },
      { text: '用幽默化解尴尬，迅速翻篇，不让负面情绪影响自己', scores: { charisma: 3, adaptability: 2 } }
    ]
  },
  {
    text: '在一个陌生的社交场合，你通常是：',
    options: [
      { text: '迅速成为全场焦点，主动和所有人搭话', scores: { charisma: 3, aggression: 1 } },
      { text: '坐在角落里观察大家，只和主动来找你的人交流', scores: { calculation: 2, charisma: -3 } },
      { text: '找到几个聊得来的人，建立深度的连接', scores: { teamwork: 2, charisma: 1 } },
      { text: '能够根据不同人的性格，随时切换自己的聊天风格', scores: { adaptability: 3, charisma: 2 } }
    ]
  },
  {
    text: '如果你的计划突然被打乱，你会：',
    options: [
      { text: '感到烦躁，试图强行把事情拉回正轨', scores: { aggression: 2, adaptability: -2 } },
      { text: '迅速计算出新的最优解，制定新的计划', scores: { calculation: 3, adaptability: 1 } },
      { text: '寻求他人的帮助，大家一起想办法解决', scores: { teamwork: 3 } },
      { text: '觉得无所谓，顺其自然，也许会有意外的惊喜', scores: { adaptability: 3, calculation: -1 } }
    ]
  },
  {
    text: '你认为自己最大的优点是：',
    options: [
      { text: '极强的胜负欲和执行力，永远渴望胜利', scores: { aggression: 3 } },
      { text: '缜密的逻辑思维和冷静的头脑', scores: { calculation: 3 } },
      { text: '能够把大家团结在一起，是个很好的倾听者', scores: { teamwork: 3 } },
      { text: '无论在什么环境下都能迅速适应并生存下来', scores: { adaptability: 3 } }
    ]
  },
  {
    text: '在玩竞技类游戏时，你的风格是：',
    options: [
      { text: '冲锋陷阵，喜欢正面硬刚，追求击杀快感', scores: { aggression: 3, calculation: -1 } },
      { text: '喜欢玩策略、运营，靠脑子战胜对手', scores: { calculation: 3, aggression: -1 } },
      { text: '喜欢玩辅助或控场角色，保护队友，配合团队', scores: { teamwork: 3, aggression: -1 } },
      { text: '什么位置都能打，根据队伍需要随时补位', scores: { adaptability: 3, teamwork: 1 } }
    ]
  },
  {
    text: '面对别人的批评，你的内心真实想法是：',
    options: [
      { text: '不服气，想用实际行动狠狠打他们的脸', scores: { aggression: 3, teamwork: -1 } },
      { text: '理性分析批评是否合理，有则改之无则加勉', scores: { calculation: 3 } },
      { text: '感到有些受伤，但会为了团队和谐选择接受', scores: { teamwork: 2, aggression: -1 } },
      { text: '表面接受，但内心其实并不在意，依然我行我素', scores: { adaptability: 2, calculation: -1 } }
    ]
  },
  {
    text: '你理想中的工作环境是：',
    options: [
      { text: '充满竞争，优胜劣汰，能激发我最大的潜能', scores: { aggression: 3, teamwork: -1 } },
      { text: '规则清晰，数据说话，一切都有条不紊', scores: { calculation: 3, adaptability: -1 } },
      { text: '氛围融洽，大家像家人一样互相支持', scores: { teamwork: 3, aggression: -1 } },
      { text: '充满变化和新鲜感，每天都有不同的挑战', scores: { adaptability: 3, calculation: -1 } }
    ]
  }
];
