const IMAGES = {
  logo0: '/images/logos/2026redbullracinglogowhite.webp',
  img1: '/images/cars/2026redbullracingcarright.webp',
  logo2: '/images/logos/2026ferrarilogowhite.webp',
  img3: '/images/cars/2026ferraricarright.webp',
  logo4: '/images/logos/2026mclarenlogowhite.webp',
  img5: '/images/cars/2026mclarencarright.webp',
  logo6: '/images/logos/2026mercedeslogowhite.webp',
  img7: '/images/cars/2026mercedescarright.webp',
  logo8: '/images/logos/2026astonmartinlogowhite.webp',
  img9: '/images/cars/2026astonmartincarright.webp',
  logo10: '/images/logos/2026alpinelogowhite.webp',
  img11: '/images/cars/2026alpinecarright.webp',
  logo12: '/images/logos/2026williamslogowhite.webp',
  img13: '/images/cars/2026williamscarright.webp',
  logo14: '/images/logos/2026racingbullslogowhite.webp',
  img15: '/images/cars/2026racingbullscarright.webp',
  logo16: '/images/logos/2026audilogowhite.webp',
  img17: '/images/cars/2026audicarright.webp',
  logo18: '/images/logos/2026haasf1teamlogowhite.webp',
  img19: '/images/cars/2026haasf1teamcarright.webp',
  logo20: '/images/logos/2026cadillaclogowhite.webp',
  img21: '/images/cars/2026cadillaccarright.webp',
};

const DRIVER_PHOTOS: Record<string, string> = {
  'Max Verstappen': '/images/drivers/2026redbullracingmaxver01right.webp',
  'Isack Hadjar': '/images/drivers/2026redbullracingisahad01right.webp',
  'Lewis Hamilton': '/images/drivers/2026ferrarilewham01right.webp',
  'Charles Leclerc': '/images/drivers/2026ferrarichalec01right.webp',
  'Lando Norris': '/images/drivers/2026mclarenlannor01right.webp',
  'Oscar Piastri': '/images/drivers/2026mclarenoscpia01right.webp',
  'George Russell': '/images/drivers/2026mercedesgeorus01right.webp',
  'Kimi Antonelli': '/images/drivers/2026mercedesandant01right.webp',
  'Fernando Alonso': '/images/drivers/2026astonmartinferalo01right.webp',
  'Lance Stroll': '/images/drivers/2026astonmartinlanstr01right.webp',
  'Pierre Gasly': '/images/drivers/2026alpinepiegas01right.webp',
  'Alexander Albon': '/images/drivers/2026williamsalealb01right.webp',
  'Carlos Sainz': '/images/drivers/2026williamscarsai01right.webp',
  'Arvid Lindblad': '/images/drivers/2026racingbullsarvid01right.webp',
  'Liam Lawson': '/images/drivers/2026racingbullslialaw01right.webp',
  'Nico Hulkenberg': '/images/drivers/2026audinichul01right.webp',
  'Gabriel Bortoleto': '/images/drivers/2026audigabbor01right.webp',
  'Esteban Ocon': '/images/drivers/2026haasf1teamestoco01right.webp',
  'Oliver Bearman': '/images/drivers/2026haasf1teamolibea01right.webp',
  'Valtteri Bottas': '/images/drivers/2026cadillacvalbot01right.webp',
  'Franco Colapinto': '/images/drivers/2026alpinefracol01right.webp',
};

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
    teamLogo: IMAGES.logo0,
    photo: DRIVER_PHOTOS['Max Verstappen'],
    carImage: IMAGES.img1,
    description: '多届世界冠军得主，打破了F1多项连胜和积分纪录，是红牛车队毋庸置疑的绝对核心和"围场大魔王"。极其霸道且无懈可击，对赛车失控的救车能力天下第一，极其擅长驾驶尾部极度灵活的赛车。"人狠话不多"，对赛车的机械反馈直接且一针见血，对车队策略有着极高的要求和临场判断力。极度的赛车狂热者，业余时间几乎全部投入模拟器赛车（Sim Racing），性格直率、无所畏惧，从不掩饰真实想法。',
    profile: { aggression: 10, calculation: 10, teamwork: 5, adaptability: 10, charisma: 7, humor: 5, extraversion: 5, intuition: 8, focus: 10, emotionalStability: 9, confidence: 10, emotion: 4, leadership: 6 }
  },
  {
    name: 'Liam Lawson',
    chinese: '利亚姆·劳森',
    team: 'Visa Cash App RB F1 Team',
    abbrev: 'LAW',
    number: '30',
    flag: '🇳🇿',
    teamColor: '#3671C6',
    teamLogo: IMAGES.logo0,
    photo: DRIVER_PHOTOS['Liam Lawson'],
    carImage: IMAGES.img1,
    description: '在经历多次惊艳的代打表现和残酷的席位竞争后，终于在VCARB车队站稳脚跟，2026年迎来自己作为车队领航者的完整赛季。强硬且聪明，起步反应极快，在雨战和湿滑赛道上的表现尤其出色，不惧与世界冠军硬碰硬。执行力强，在数据分析上投入大量精力，对待每一个比赛周末都如同最后一场比赛般全力以赴。坚毅果敢，带有一丝新西兰人特有的坚韧与不羁，拥有强烈的渴望去证明自己配得上更高的位置。',
    profile: { aggression: 8, calculation: 7, teamwork: 7, adaptability: 9, charisma: 6, humor: 5, extraversion: 6, intuition: 7, focus: 9, emotionalStability: 7, confidence: 7, emotion: 5, leadership: 6 }
  },
  {
    name: 'Lewis Hamilton',
    chinese: '刘易斯·汉密尔顿',
    team: 'Scuderia Ferrari',
    abbrev: 'HAM',
    number: '44',
    flag: '🇬🇧',
    teamColor: '#E80020',
    teamLogo: IMAGES.logo2,
    photo: DRIVER_PHOTOS['Lewis Hamilton'],
    carImage: IMAGES.img3,
    description: 'F1历史上最伟大的车手之一，拥有七冠王头衔及百胜纪录。在梅赛德斯创造王朝后，于2025年转投法拉利，2026赛季继续追逐史无前例的第八冠。极致的轮胎管理大师，正赛节奏深不可测，能在不伤胎的情况下连续做出飞驰圈，雨战能力处于历史级别。极度注重细节，善于将车队整体气氛凝聚在自己周围，对赛车调校的微小变化有着极深的把控力。场外兴趣广泛（跨界时尚与音乐），性格外放且热衷于社会公益，拥有极强的自我信仰和心理韧性。',
    profile: { aggression: 8, calculation: 10, teamwork: 9, adaptability: 10, charisma: 10, humor: 8, extraversion: 9, intuition: 8, focus: 10, emotionalStability: 9, confidence: 10, emotion: 7, leadership: 10 }
  },
  {
    name: 'Charles Leclerc',
    chinese: '夏尔·勒克莱尔',
    team: 'Scuderia Ferrari',
    abbrev: 'LEC',
    number: '16',
    flag: '🇲🇨',
    teamColor: '#E80020',
    teamLogo: IMAGES.logo2,
    photo: DRIVER_PHOTOS['Charles Leclerc'],
    carImage: IMAGES.img3,
    description: '法拉利青训出身，进入F1后迅速成为跃马核心，多次夺得分站冠军和杆位，是法拉利复兴的基石车手。极限单圈能力堪称全网顶尖，驾驶风格华丽且敢于突破车辆极限，尤其擅长在街道赛中贴墙飞行。对自己要求极其严苛，经常在失误后通过无线电严厉自我批评；在技术反馈上对赛车前端的指向性要求极高。浪漫、感性、富有悲情英雄色彩，对法拉利有着无可比拟的忠诚与热爱。',
    profile: { aggression: 9, calculation: 9, teamwork: 6, adaptability: 9, charisma: 9, humor: 6, extraversion: 7, intuition: 8, focus: 9, emotionalStability: 6, confidence: 9, emotion: 8, leadership: 6 }
  },
  {
    name: 'Lando Norris',
    chinese: '兰多·诺里斯',
    team: 'McLaren Formula 1 Team',
    abbrev: 'NOR',
    number: '4',
    flag: '🇬🇧',
    teamColor: '#FF8000',
    teamLogo: IMAGES.logo4,
    photo: DRIVER_PHOTOS['Lando Norris'],
    carImage: IMAGES.img5,
    description: '迈凯伦自家培养的中流砥柱，经历多年蛰伏后在2024年突破首胜，并在2025年成功加冕世界冠军，2026年作为卫冕冠军出战。流畅且稳定，极少犯低级错误，在复杂多变的环境中总能保持极高的正赛完赛率和拿分效率。与车队工程师关系极为融洽，善于通过沟通化解压力，但在模拟器训练和数据分析上极其刻苦。幽默、阳光、极具互联网网感，是围场内的"开心果"，对胜利的渴望在夺冠后变得更加纯粹与坚定。',
    profile: { aggression: 7, calculation: 9, teamwork: 9, adaptability: 9, charisma: 10, humor: 10, extraversion: 9, intuition: 7, focus: 8, emotionalStability: 9, confidence: 9, emotion: 7, leadership: 8 }
  },
  {
    name: 'Oscar Piastri',
    chinese: '奥斯卡·皮亚斯特里',
    team: 'McLaren Formula 1 Team',
    abbrev: 'PIA',
    number: '81',
    flag: '🇦🇺',
    teamColor: '#FF8000',
    teamLogo: IMAGES.logo4,
    photo: DRIVER_PHOTOS['Oscar Piastri'],
    carImage: IMAGES.img5,
    description: '连续夺得F3和F2总冠军的超级新星，进入迈凯伦后迅速展现出与诺里斯匹敌的顶级实力，是未来的冠军有力争夺者。冷静至极，驾驶动作干净利落、不拖泥带水，在高速弯的处理和起步发车时极其果断。典型的"工程师型车手"，话语不多但反馈精准，极少受情绪波动影响，执行车队指令极其坚决。泰山崩于前而色不变的"冰山"性格，成熟稳重，带有独特的冷幽默。',
    profile: { aggression: 7, calculation: 10, teamwork: 9, adaptability: 9, charisma: 6, humor: 5, extraversion: 4, intuition: 8, focus: 10, emotionalStability: 9, confidence: 8, emotion: 4, leadership: 6 }
  },
  {
    name: 'George Russell',
    chinese: '乔治·拉塞尔',
    team: 'Mercedes-AMG PETRONAS F1 Team',
    abbrev: 'RUS',
    number: '63',
    flag: '🇬🇧',
    teamColor: '#27F4D2',
    teamLogo: IMAGES.logo6,
    photo: DRIVER_PHOTOS['George Russell'],
    carImage: IMAGES.img7,
    description: '凭借在F2的卓越表现晋升F1，在威廉姆斯车队历练后加入梅赛德斯，逐渐成为车队的核心领军人物并斩获多个分站冠军。排位赛单圈速度极快（享有"Mr. Saturday"的美誉），正赛驾驶极其精准，防守端寸土不让，善于在复杂天气下寻找赛道极限。极具商业头脑和领导力，作为大奖赛车手协会（GPDA）主席，在车队技术反馈和高层会议中表现出高度的条理性和大局观。自信且富有雄心，在公众面前举止得体、充满英式绅士风度，但骨子里有着极强的胜负欲。',
    profile: { aggression: 8, calculation: 9, teamwork: 9, adaptability: 9, charisma: 8, humor: 7, extraversion: 8, intuition: 8, focus: 9, emotionalStability: 9, confidence: 9, emotion: 6, leadership: 9 }
  },
  {
    name: 'Kimi Antonelli',
    chinese: '基米·安托内利',
    team: 'Mercedes-AMG PETRONAS F1 Team',
    abbrev: 'ANT',
    number: '12',
    flag: '🇮🇹',
    teamColor: '#27F4D2',
    teamLogo: IMAGES.logo6,
    photo: DRIVER_PHOTOS['Kimi Antonelli'],
    carImage: IMAGES.img7,
    description: '梅赛德斯青训的"天才少年"，跳过F3直接进入F2并大放异彩，2025赛季正式接替汉密尔顿进入梅赛德斯，2026赛季继续稳固其席位。激进且充满天赋，对赛车极限的感知极其敏锐，在赛道上敢于做出高风险的超车动作。学习曲线极其陡峭，如同海绵般吸收工程师的数据反馈，适应新赛车和新规则的速度远超常人。青春活力，面对外界将他视为"下一个汉密尔顿"的巨大期望，表现出了超越年龄的成熟与抗压能力。',
    profile: { aggression: 9, calculation: 7, teamwork: 6, adaptability: 8, charisma: 6, humor: 6, extraversion: 7, intuition: 7, focus: 8, emotionalStability: 6, confidence: 8, emotion: 7, leadership: 5 }
  },
  {
    name: 'Fernando Alonso',
    chinese: '费尔南多·阿隆索',
    team: 'Aston Martin Aramco F1 Team',
    abbrev: 'ALO',
    number: '14',
    flag: '🇪🇸',
    teamColor: '#229971',
    teamLogo: IMAGES.logo8,
    photo: DRIVER_PHOTOS['Fernando Alonso'],
    carImage: IMAGES.img9,
    description: '两届世界冠军得主，拥有F1历史上最长的职业生涯和最多参赛场次，2026赛季依然以极高的竞技状态活跃在赛场。战术大师，著名的"起步狂魔"，极其擅长在劣势赛车中榨取极限，防守端滴水不漏。"老狐狸"般的工作方式，对赛场上的每一个细节了如指掌，经常在驾驶的同时还能分心关注大屏幕和全场比赛局势。极其好强、永不服输，拥有强烈的个人气场，是车队的精神图腾，也是围场内最具性格和话题性的人物。',
    profile: { aggression: 9, calculation: 10, teamwork: 6, adaptability: 10, charisma: 9, humor: 6, extraversion: 8, intuition: 10, focus: 9, emotionalStability: 9, confidence: 10, emotion: 6, leadership: 10 }
  },
  {
    name: 'Lance Stroll',
    chinese: '兰斯·斯托尔',
    team: 'Aston Martin Aramco F1 Team',
    abbrev: 'STR',
    number: '18',
    flag: '🇨🇦',
    teamColor: '#229971',
    teamLogo: IMAGES.logo8,
    photo: DRIVER_PHOTOS['Lance Stroll'],
    carImage: IMAGES.img9,
    description: '凭借家族支持进入F1，但在雨战和特定赛道（如巴库）多次证明过自己的驾驶天赋和拿分能力，是阿斯顿·马丁的常驻车手。在直觉型驾驶和高速弯中表现出色，起步发车能力不俗，但排位赛单圈表现缺乏足够的稳定性和连贯性。相对低调，极少参与围场的政治斗争，专注于按部就班地完成车队既定的比赛周末计划。佛系且随和，面对外界关于其身份的争议通常保持沉默，拥有自己的节奏并且抗压能力较强。',
    profile: { aggression: 6, calculation: 6, teamwork: 7, adaptability: 7, charisma: 5, humor: 4, extraversion: 4, intuition: 7, focus: 7, emotionalStability: 8, confidence: 6, emotion: 5, leadership: 5 }
  },
  {
    name: 'Pierre Gasly',
    chinese: '皮埃尔·加斯利',
    team: 'BWT Alpine F1 Team',
    abbrev: 'GAS',
    number: '10',
    flag: '🇫🇷',
    teamColor: '#00CBFF',
    teamLogo: IMAGES.logo10,
    photo: DRIVER_PHOTOS['Pierre Gasly'],
    carImage: IMAGES.img11,
    description: '曾经历过红牛的挫折与小红牛的重生（蒙扎夺冠），如今是阿尔派车队的核心，2026年继续扛起车队大旗。单圈爆发力强，在赛车调校符合自己口味时能跑出惊人的排位赛成绩，晚刹车和弯中技术出色。对赛车前端的反馈要求很高，致力于领导车队走出管理层动荡的阴霾，是车队稳定的技术基石。感情丰富、内心坚强，对家乡和车队有着强烈的归属感，是一个能够将逆境转化为动力的车手。',
    profile: { aggression: 8, calculation: 8, teamwork: 8, adaptability: 8, charisma: 8, humor: 8, extraversion: 7, intuition: 7, focus: 8, emotionalStability: 8, confidence: 8, emotion: 8, leadership: 8 }
  },
  {
    name: 'Franco Colapinto',
    chinese: '佛朗哥·科拉平托',
    team: 'BWT Alpine F1 Team',
    abbrev: 'COL',
    number: '43',
    flag: '🇦🇷',
    teamColor: '#00CBFF',
    teamLogo: IMAGES.logo10,
    photo: '/images/drivers/2026alpinefracol01right.webp',
    carImage: IMAGES.img11,
    description: '阿根廷赛车的骄傲，此前在威廉姆斯代打时凭借惊艳表现征服围场，随后成功在阿尔派车队获得正式席位。勇猛无畏，经常上演精彩的极限超车，对赛车抓地力变化的感知极其敏锐，敢于在抓地力边缘游走。训练极其刻苦，毫不畏惧挑战老将，善于利用模拟器数据快速弥补实战经验的不足。充满拉丁风情的狂热与自信，场外活泼开朗且自带幽默属性，深受广大车迷喜爱。',
    profile: { aggression: 9, calculation: 6, teamwork: 6, adaptability: 8, charisma: 9, humor: 9, extraversion: 9, intuition: 7, focus: 7, emotionalStability: 6, confidence: 8, emotion: 9, leadership: 6 }
  },
  {
    name: 'Alexander Albon',
    chinese: '亚历克斯·阿尔本',
    team: 'Williams Racing',
    abbrev: 'ALB',
    number: '23',
    flag: '🇹🇭',
    teamColor: '#64CCFE',
    teamLogo: IMAGES.logo12,
    photo: DRIVER_PHOTOS['Alexander Albon'],
    carImage: IMAGES.img13,
    description: '曾经历在红牛车队的低谷，但在威廉姆斯迎来重生，凭借多次高光表现确立了自己在围场内的极高评价。擅长利用赛车的直线优势，防守端不仅强硬而且极具智慧（被戏称为"移动路障"），保胎长跑能力强。态度积极，极大地鼓舞了威廉姆斯车队的士气，与技师和工程师建立了深厚的战友友谊。温文尔雅、极具亲和力，心态从早年的敏感脆弱蜕变得极其坚强、乐观。',
    profile: { aggression: 7, calculation: 8, teamwork: 10, adaptability: 9, charisma: 9, humor: 8, extraversion: 7, intuition: 7, focus: 8, emotionalStability: 9, confidence: 8, emotion: 6, leadership: 9 }
  },
  {
    name: 'Carlos Sainz',
    chinese: '卡洛斯·塞恩斯',
    team: 'Williams Racing',
    abbrev: 'SAI',
    number: '55',
    flag: '🇪🇸',
    teamColor: '#64CCFE',
teamLogo: IMAGES.logo12,
    photo: DRIVER_PHOTOS['Carlos Sainz'],
    carImage: IMAGES.img13,
    description: '曾在迈凯伦、法拉利等大车队效力并取得多场分站胜利，2025年转投威廉姆斯，带领这支老牌车队走向复兴之路。"平稳的大师"，对赛车极限的掌控如丝般顺滑，失误率极低，极少严重损毁赛车。顶级的大脑和策略分析师，经常在比赛中自己计算策略并与控制台探讨（"Smooth Operator"），工程反馈极其细致。聪明、理性、极具团队精神，是一个能在任何环境下迅速适应并发挥出赛车当前上限的车手。',
    profile: { aggression: 7, calculation: 10, teamwork: 9, adaptability: 9, charisma: 8, humor: 7, extraversion: 7, intuition: 9, focus: 9, emotionalStability: 9, confidence: 8, emotion: 5, leadership: 8 }
  },
  {
    name: 'Arvid Lindblad',
    chinese: '阿尔维德·林德布拉德',
    team: 'Visa Cash App RB Formula One Team',
    abbrev: 'LIN',
    number: '30',
    flag: '🇸🇪',
    teamColor: '#6692FF',
    teamLogo: IMAGES.logo14,
    photo: DRIVER_PHOTOS['Arvid Lindblad'],
    carImage: IMAGES.img15,
    description: '红牛青训的"火箭男孩"，18岁在F2就展现出统治级表现（单赛季双冠双亚），2026年被红牛破格提拔至VCARB正式出道F1。典型的现代初级方程式培养出的极致精准流，对走线的选择如同机器般精确，单圈爆发力惊人。作为新生代车手，极度依赖并善用遥测数据，有着超越年龄的比赛阅读能力，虚心向劳森和团队学习。青春无畏，在聚光灯下显得有些青涩，但在戴上头盔后便会立刻展现出极具侵略性的赛车本能。',
    profile: { aggression: 7, calculation: 9, teamwork: 8, adaptability: 8, charisma: 6, humor: 5, extraversion: 5, intuition: 7, focus: 10, emotionalStability: 6, confidence: 7, emotion: 5, leadership: 6 }
  },
  {
    name: 'Isack Hadjar',
    chinese: '艾萨克·哈贾尔',
    team: 'Visa Cash App RB Formula One Team',
    abbrev: 'HAD',
    number: '22',
    flag: '🇫🇷',
    teamColor: '#6692FF',
    teamLogo: IMAGES.logo14,
    photo: DRIVER_PHOTOS['Isack Hadjar'],
    carImage: IMAGES.img15,
    description: '红牛青训的杰出代表，2025年在VCARB（小红牛）完成出色的处子赛季并登上领奖台后，2026年正式被拔擢至一军，成为维斯塔潘的新队友。速度极快且风格强悍，带有明显的法国车手特有的激情，在近身缠斗中从不退缩。适应力极强，在处子赛季就展现出了远超同龄人的成熟度，专注度高，不惧怕与顶级车手对标数据。充满锐气与自信，偶尔在比赛高压下情绪会有些激动，但下车后能够迅速冷静并进行客观的自我反思。',
    profile: { aggression: 9, calculation: 7, teamwork: 6, adaptability: 8, charisma: 6, humor: 7, extraversion: 8, intuition: 7, focus: 8, emotionalStability: 6, confidence: 8, emotion: 8, leadership: 6 }
  },
  {
    name: 'Nico Hulkenberg',
    chinese: '尼科·霍肯伯格',
    team: 'Audi F1 Team',
    abbrev: 'HUL',
    number: '27',
    flag: '🇩🇪',
    teamColor: '#F5002D',
    teamLogo: IMAGES.logo16,
    photo: DRIVER_PHOTOS['Nico Hulkenberg'],
    carImage: IMAGES.img17,
    description: '围场著名的"排位赛之神"和经验丰富的老将。2025年加盟索伯，并顺利过渡成为2026年奥迪正式接管后的厂队核心。拥有顶级的轮胎升温和压榨单圈极限的能力，防守稳健，在保胎方面近年来也有了长足进步。经验老道，反馈精准，是新车队开发赛车、建立基线数据的完美"标尺"型车手，深受工程师信赖。幽默、豁达，自带一种看透围场沉浮的松弛感，人际关系极佳。',
    profile: { aggression: 7, calculation: 9, teamwork: 9, adaptability: 8, charisma: 8, humor: 9, extraversion: 8, intuition: 7, focus: 9, emotionalStability: 9, confidence: 9, emotion: 5, leadership: 8 }
  },
  {
    name: 'Gabriel Bortoleto',
    chinese: '加布里埃尔·博尔托莱托',
    team: 'Audi F1 Team',
    abbrev: 'BOR',
    number: '11',
    flag: '🇧🇷',
    teamColor: '#F5002D',
    teamLogo: IMAGES.logo16,
    photo: DRIVER_PHOTOS['Gabriel Bortoleto'],
    carImage: IMAGES.img17,
    description: '巴西赛车的新希望，在初级方程式中表现稳健且出色，作为潜力新星被奥迪选中，肩负着复兴巴西车手荣光的重任。风格细腻，不盲目追求极致的晚刹车，而是极其注重弯速的保持和出弯的连贯性。虚心好学，善于向经验丰富的队友霍肯伯格讨教，稳扎稳打积累F1级别的比赛数据。谦逊但坚韧，承载着南美车迷的狂热期待，有着超乎年龄的抗压能力。',
    profile: { aggression: 7, calculation: 8, teamwork: 8, adaptability: 9, charisma: 7, humor: 7, extraversion: 7, intuition: 7, focus: 8, emotionalStability: 7, confidence: 7, emotion: 6, leadership: 6 }
  },
  {
    name: 'Esteban Ocon',
    chinese: '埃斯特班·奥康',
    team: 'MoneyGram Haas F1 Team',
    abbrev: 'OCO',
    number: '31',
    flag: '🇫🇷',
    teamColor: '#B6BABD',
    teamLogo: IMAGES.logo18,
    photo: DRIVER_PHOTOS['Esteban Ocon'],
    carImage: IMAGES.img19,
    description: '拥有丰富的中游车队经验并曾在Alpine取得过分站冠军，2025年加入哈斯，担任车队的经验担当。防守极其坚决甚至有些激进（常被调侃为"法国国防部长"），在缠斗中寸土不让，尤其擅长利用赛道宽度卡位。极其渴望证明自己，在车队内部竞争中总是充满干劲，致力于提升赛车的正赛长距离节奏。性格倔强、充满斗志，出身平民家庭的他极其珍惜F1的席位，偶尔在队内竞争中显得过于紧绷。',
    profile: { aggression: 9, calculation: 7, teamwork: 6, adaptability: 8, charisma: 7, humor: 5, extraversion: 6, intuition: 7, focus: 9, emotionalStability: 6, confidence: 8, emotion: 6, leadership: 6 }
  },
  {
    name: 'Oliver Bearman',
    chinese: '奥利弗·贝尔曼',
    team: 'MoneyGram Haas F1 Team',
    abbrev: 'BEA',
    number: '87',
    flag: '🇬🇧',
    teamColor: '#B6BABD',
    teamLogo: IMAGES.logo18,
    photo: DRIVER_PHOTOS['Oliver Bearman'],
    carImage: IMAGES.img19,
    description: '法拉利青训的冉冉新星，曾在法拉利和哈斯有过惊艳的代打表现，2025年正式代表哈斯首发，2026年继续积累经验。适应力极强，对刹车点的把控十分精准，能够在极短时间内找到陌生赛道的节奏。对待工作充满热情，像海绵一样吸收围场的经验，并与法拉利体系保持着紧密的技术沟通。年轻气盛但懂得分寸，阳光开朗，心理素质极佳，面对突发状况不易慌乱。',
    profile: { aggression: 7, calculation: 8, teamwork: 8, adaptability: 9, charisma: 7, humor: 8, extraversion: 8, intuition: 6, focus: 9, emotionalStability: 9, confidence: 8, emotion: 5, leadership: 6 }
  },
  {
    name: 'Valtteri Bottas',
    chinese: '瓦尔特利·博塔斯',
    team: 'Cadillac F1 Team',
    abbrev: 'BOT',
    number: '77',
    flag: '🇫🇮',
    teamColor: '#FFFFFF',
teamLogo: IMAGES.logo20,
    photo: DRIVER_PHOTOS['Valtteri Bottas'],
    carImage: IMAGES.img21,
    description: '曾在梅赛德斯辅佐汉密尔顿建立王朝，后转战索伯，如今作为极其珍贵的资产加入凯迪拉克，再次在新车队的建设中发挥余热。排位赛单圈速度极快且极具稳定性，驾驶风格干净正统，极少因为自身失误导致退赛。"终极团队型车手"，执行力满分，技术反馈极其精确、客观，从不抱怨赛车，是工程师最喜欢合作的车手类型。典型的芬兰"冰人"性格，但在离开大车队后彻底放飞自我（热爱自行车运动和摄影），变得极其松弛、幽默，充分享受纯粹的赛车乐趣。',
    profile: { aggression: 6, calculation: 9, teamwork: 10, adaptability: 8, charisma: 8, humor: 8, extraversion: 5, intuition: 7, focus: 10, emotionalStability: 10, confidence: 8, emotion: 4, leadership: 7 }
  },
  {
    name: 'Sergio Perez',
    chinese: '塞尔吉奥·佩雷兹',
    team: 'Cadillac F1 Team',
    abbrev: 'PER',
    number: '11',
    flag: '🇲🇽',
    teamColor: '#FFFFFF',
    teamLogo: IMAGES.logo20,
    photo: '/images/drivers/2026cadillacserper01right.webp',
    carImage: IMAGES.img21,
    description: '曾在红牛车队效力多年，是围场内经验最丰富的车手之一。离开红牛后，他凭借丰富的经验和美洲市场的巨大影响力，成为了新军凯迪拉克车队的领军人物。围场公认的"保胎大师"，极其擅长在正赛中通过差异化的轮胎策略实现逆转，在街道赛的表现通常优于传统赛道。经验丰富，能够为全新车队提供极其宝贵的基线设置方向和研发建议，是稳定军心的关键人物。稳重、极具家庭观念，在墨西哥拥有国民英雄般的地位，性格中带着极强的韧性和坚忍。',
    profile: { aggression: 7, calculation: 8, teamwork: 9, adaptability: 9, charisma: 8, humor: 7, extraversion: 7, intuition: 9, focus: 8, emotionalStability: 8, confidence: 8, emotion: 5, leadership: 9 }
  },
  ];

export const QUESTIONS: Question[] = [
  {
    text: '你的朋友临时放你鸽子，约定好的聚会只剩你一个人，你会：',
    options: [
      { text: '非常生气，觉得被背叛了', scores: { aggression: 3, emotion: 2, emotionalStability: -1 } },
      { text: '没关系，自己找点事做也很开心', scores: { adaptability: 2, emotionalStability: 2, humor: 1, confidence: 1 } },
      { text: '马上找其他朋友出来玩', scores: { extraversion: 3, charisma: 2, teamwork: 1 } },
      { text: '反思是不是自己做错了什么', scores: { emotion: 2, intuition: 1, confidence: -1, focus: 1 } }
    ]
  },
  {
    text: '工作中你有一个绝佳的创意，但同事觉得不可行，你会：',
    options: [
      { text: '坚持自己的想法，用行动证明他们错了', scores: { confidence: 3, aggression: 2, intuition: 1, leadership: 1 } },
      { text: '收集数据和分析，准备充分的说服材料', scores: { calculation: 3, focus: 3, teamwork: 1, emotionalStability: 1 } },
      { text: '组织团队讨论，倾听各方意见', scores: { teamwork: 3, leadership: 2, extraversion: 1, charisma: 1 } },
      { text: '先小规模尝试，用结果说话', scores: { adaptability: 3, intuition: 2, focus: 1, confidence: 1 } }
    ]
  },
  {
    text: '你网购的东西寄错了，商家态度还很敷衍，你会：',
    options: [
      { text: '非常不爽，必须给差评', scores: { aggression: 3, emotion: 2, extraversion: 1, confidence: 1 } },
      { text: '冷静沟通，要求合理赔偿', scores: { calculation: 2, emotionalStability: 2, focus: 2, charisma: 1 } },
      { text: '算了，不想计较那么多', scores: { emotionalStability: 3, adaptability: 2, confidence: -1, humor: 1 } },
      { text: '据理力争，但保持礼貌', scores: { confidence: 2, teamwork: 1, emotionalStability: 1, focus: 1 } }
    ]
  },
  {
    text: '你被公司裁员了，面对这个打击你会：',
    options: [
      { text: '愤怒、不甘，立刻开始找工作', scores: { aggression: 3, confidence: 2, focus: 2, emotion: 1 } },
      { text: '冷静分析，趁机思考人生方向', scores: { calculation: 2, intuition: 2, emotionalStability: 2, adaptability: 1 } },
      { text: '找朋友倾诉，寻求支持', scores: { extraversion: 2, teamwork: 2, emotion: 2, charisma: 1 } },
      { text: '当作休息，调整心态再出发', scores: { emotionalStability: 3, humor: 1, adaptability: 2, confidence: 1 } }
    ]
  },
  {
    text: '你在公司会议上提出了一个方案，大部分人都不支持，你会：',
    options: [
      { text: '坚持自己的观点，和他们争论', scores: { aggression: 3, confidence: 2, emotion: 1, extraversion: 1 } },
      { text: '理性分析大家的顾虑，修改方案', scores: { calculation: 3, focus: 2, teamwork: 2, adaptability: 1 } },
      { text: '放弃这个想法，听从大家意见', scores: { adaptability: 2, teamwork: 2, confidence: -1, emotionalStability: 1 } },
      { text: '先保留意见，日后用成果证明', scores: { intuition: 2, confidence: 2, emotionalStability: 2, focus: 1 } }
    ]
  },
  {
    text: '你暗恋的人突然主动约你，你会：',
    options: [
      { text: '欣喜若狂，立刻答应', scores: { emotion: 3, extraversion: 1, confidence: 1, charisma: 1 } },
      { text: '冷静分析 TA 的目的', scores: { calculation: 3, intuition: 2, emotionalStability: 1, focus: 1 } },
      { text: '表面答应，内心纠结', scores: { emotion: 2, adaptability: 1, confidence: -1, extraversion: -1 } },
      { text: '欣然接受，享受当下', scores: { humor: 1, confidence: 2, extraversion: 1, emotionalStability: 1 } }
    ]
  },
  {
    text: '你的好朋友的恋爱对象是个"渣"人，你会：',
    options: [
      { text: '直接告诉朋友，TA 被骗了', scores: { aggression: 2, confidence: 2, teamwork: 1, emotion: 1 } },
      { text: '侧面提醒，让朋友自己发现', scores: { intuition: 2, emotionalStability: 1, adaptability: 1, charisma: 1 } },
      { text: '无条件支持朋友的选择', scores: { teamwork: 3, emotionalStability: 1, confidence: -1, extraversion: 1 } },
      { text: '等朋友倾诉时再给建议', scores: { empathy: 2, extraversion: 1, emotionalStability: 1, focus: 1 } }
    ]
  },
  {
    text: '你在朋友圈看到有人炫富，你会：',
    options: [
      { text: '内心不爽，觉得对方很肤浅', scores: { aggression: 2, emotion: 1, confidence: -1 } },
      { text: '没什么感觉，关我什么事', scores: { emotionalStability: 3, adaptability: 1, focus: 1, intuition: 1 } },
      { text: '默默点赞，内心有点羡慕', scores: { emotion: 2, confidence: -1, extraversion: 1, humor: -1 } },
      { text: '当没看见，专注于自己的生活', scores: { confidence: 2, focus: 2, emotionalStability: 1, adaptability: 1 } }
    ]
  },
  {
    text: '你定好了周末旅行计划，但突然朋友也叫你去玩，你会：',
    options: [
      { text: '取消旅行计划，去和朋友玩', scores: { extraversion: 3, adaptability: 2, confidence: 1, teamwork: 1 } },
      { text: '坚持按原计划旅行，朋友可以去一起去', scores: { confidence: 2, focus: 2, leadership: 1, adaptability: 1 } },
      { text: '很纠结，两个都放不下', scores: { emotion: 2, adaptability: 1, intuition: 1, emotionalStability: -1 } },
      { text: '看哪个更重要，再做决定', scores: { calculation: 2, intuition: 1, focus: 1, emotionalStability: 1 } }
    ]
  },
  {
    text: '你在一个陌生城市迷路了，你会：',
    options: [
      { text: '自己 Google 导航一定能找到', scores: { confidence: 2, intuition: 1, focus: 2, adaptability: 1 } },
      { text: '问路人或者当地人', scores: { extraversion: 3, teamwork: 1, charisma: 1, confidence: 1 } },
      { text: '打个车直接去目的地', scores: { calculation: 1, confidence: 2, focus: 1, adaptability: 2, humor: 1 } },
      { text: '没关系，就当顺便逛逛', scores: { adaptability: 3, emotionalStability: 2, humor: 1, confidence: -1 } }
    ]
  },
  {
    text: '你的老板给你安排了超额的工作量，你会：',
    options: [
      { text: '直接拒绝或者抱怨', scores: { aggression: 3, confidence: 2, extraversion: 1, emotion: 1 } },
      { text: '接受但会跟老板沟通困难', scores: { teamwork: 2, charisma: 1, focus: 1, emotionalStability: 1 } },
      { text: '默默加班完成，熬过去', scores: { focus: 3, emotionalStability: 2, confidence: 1, adaptability: 1 } },
      { text: '合理安排，分清轻重缓急', scores: { calculation: 3, adaptability: 2, intuition: 1, focus: 2 } }
    ]
  },
  {
    text: '你和伴侣吵架了冷战了，你会怎么打破僵局：',
    options: [
      { text: '等对方先道歉', scores: { aggression: 1, emotionalStability: 1, confidence: 1, adaptability: -1 } },
      { text: '主动示好沟通', scores: { teamwork: 2, emotion: 2, charisma: 1, extraversion: 1, emotionalStability: 2 } },
      { text: '用幽默化解尴尬', scores: { humor: 3, confidence: 2, charisma: 2, emotionalStability: 1 } },
      { text: '冷静分析谁对谁错', scores: { calculation: 3, focus: 2, intuition: 1, emotion: -1 } }
    ]
  },
  {
    text: '你在公司年会上被安排表演节目，你会：',
    options: [
      { text: '非常乐意，展示自己', scores: { extraversion: 3, confidence: 3, charisma: 2, humor: 1 } },
      { text: '非常紧张，想推掉', scores: { emotion: 2, emotionalStability: -1, confidence: -2, extraversion: -2 } },
      { text: '勉强接受，认真准备', scores: { focus: 2, adaptability: 1, confidence: 1, teamwork: 1 } },
      { text: '拉上同事一起表演', scores: { teamwork: 3, extraversion: 2, charisma: 1, leadership: 1 } }
    ]
  },
  {
    text: '你的好朋友向你借了一笔钱迟迟不还，你会：',
    options: [
      { text: '直接开口要', scores: { aggression: 2, confidence: 2, extraversion: 1, emotion: 1 } },
      { text: '委婉地暗示TA', scores: { charisma: 2, intuition: 1, emotionalStability: 1, teamwork: 1 } },
      { text: '算了，就当认清一个人', scores: { emotionalStability: 3, adaptability: 2, confidence: -1, humor: -1 } },
      { text: '下次再也不借了，这次算了', scores: { calculation: 1, focus: 1, intuition: 1, confidence: 1 } }
    ]
  },
  {
    text: '你在群里发消息没人回，你会：',
    options: [
      { text: '很尴尬，觉得被孤立了', scores: { emotion: 2, confidence: -1, emotionalStability: -1 } },
      { text: '再发一条或者私聊', scores: { extraversion: 2, confidence: 1, charisma: 1, teamwork: 1 } },
      { text: '无所谓，爱回不回', scores: { emotionalStability: 3, confidence: 2, adaptability: 1, focus: 1 } },
      { text: '反思是不是自己说错话了', scores: { intuition: 2, calculation: 1, emotion: 1, confidence: -1 } }
    ]
  }
];
