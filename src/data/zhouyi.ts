export interface Hexagram {
  id: number;
  name: string;
  pinyin: string;
  binary: string; // 六位二进制表示，1代表阳爻，0代表阴爻
  nature: string; // 自然象征
  description: string; // 基本描述
  scenario: string; // 代表情景
  advice: string; // 建议
  modernScenario: string; // 现代情景应用
  imageUrl: string; // 图片URL
}

// 周易64卦数据
export const hexagrams: Hexagram[] = [
  {
    id: 1,
    name: "乾",
    pinyin: "Qián",
    binary: "111111",
    nature: "天、刚健",
    description: "刚健中正，纯粹精也。大哉乾元，万物资始，乃统天。",
    scenario: "代表创始、领导、刚健、进取的情景。此卦象征万物创始的伟大根源，具有生生不息的创造力。",
    advice: "保持刚健中正的品格，发挥领导才能，但也要注意谦逊和团队合作。",
    modernScenario: "在现代职场中，此卦象征着创业者、领导者或团队负责人。适合用于企业初创、项目启动、团队建设等场景，提醒领导者要保持远见卓识、坚韧不拔的精神，同时注重团队协作，发挥每个人的优势。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20sky%20heaven%20symbol%20clouds%20sun&sign=b92eecad4277aa16b30b384dcb32aa32"
  },
  {
    id: 2,
    name: "坤",
    pinyin: "Kūn",
    binary: "000000",
    nature: "地、柔顺",
    description: "至哉坤元，万物资生，乃顺承天。坤厚载物，德合无疆。",
    scenario: "代表包容、柔顺、承载、厚德的情景。此卦象征大地般宽广包容的胸怀与默默承载的精神。",
    advice: "保持柔顺谦逊的态度，学会包容和承载，但也要坚守原则，不可过度柔顺而失去自我。",
    modernScenario: "在现代生活中，此卦象征着团队中的支持者、协调者或家庭中的照顾者。适合用于团队协作、家庭关系维护、社会公益活动等场景，提醒人们要学会包容理解、默默奉献，同时保持内在的坚韧和原则。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20earth%20symbol%20mountains%20fields&sign=b57b845656c820e7d05c1daddfaf6a66"
  },
  {
    id: 3,
    name: "屯",
    pinyin: "Zhūn",
    binary: "000111",
    nature: "云雷、始生",
    description: "屯，刚柔始交而难生，动乎险中，大亨贞。雷雨之动满盈，天造草昧，宜建侯而不宁。",
    scenario: "代表初始创业、困难重重但充满希望的情景。如同春天萌芽，虽有阻力但生命力顽强。",
    advice: "面对初创阶段的困难，要坚定信念，耐心等待时机，同时积极行动，切勿急躁。",
    modernScenario: "在现代创业环境中，此卦特别适合刚起步的创业者、新项目的启动阶段或学习新技能的初始阶段。提醒人们在面对困难和挑战时，要保持耐心和韧性，脚踏实地，逐步积累经验，为未来的发展奠定基础。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20thunder%20clouds%20storm%20spring%20growth&sign=c2efc12ba6a56aebc0c8fd0265a0bacc"
  },
  {
    id: 4,
    name: "蒙",
    pinyin: "Méng",
    binary: "111000",
    nature: "山下出泉、启蒙",
    description: "蒙，山下有险，险而止，蒙。蒙亨，以亨行时中也。匪我求童蒙，童蒙求我。",
    scenario: "代表启蒙教育、学习成长的情景。如同泉水从山下流出，象征知识的源泉不断涌现。",
    advice: "在学习过程中要保持谦逊态度，主动寻求知识，同时也要善于教导他人，传承智慧。",
    modernScenario: "在现代教育体系中，此卦适用于学生学习新知识、职场新人适应新环境、企业培训新员工等场景。提醒学习者要保持谦逊和好奇心，主动求知；教育者则应根据学习者的需求和时机进行教导，做到因材施教。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20mountain%20spring%20water%20enlightenment&sign=7264bb2488d990523a34be6df43525b7"
  },
  {
    id: 5,
    name: "需",
    pinyin: "Xū",
    binary: "011111",
    nature: "云上于天、等待",
    description: "需，须也，险在前也。刚健而不陷，其义不困穷矣。需有孚，光亨贞吉。位乎天位，以正中也。",
    scenario: "代表等待时机、蓄势待发的情景。如同云层聚集在天空，等待合适的时机降雨。",
    advice: "在时机不成熟时要耐心等待，充实自己，做好准备，一旦时机来临就要果断行动。",
    modernScenario: "在现代职场和生活中，此卦适用于职业转型期、项目筹备阶段或等待机会的时期。提醒人们在等待的过程中不要消极无为，而是要积极学习、积累资源、提升能力，为即将到来的机会做好充分准备。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20clouds%20waiting%20rain%20sky&sign=0e37e205b734d671a444b97daee0e65f"
  },
  {
    id: 6,
    name: "讼",
    pinyin: "Sòng",
    binary: "111101",
    nature: "天与水违行、争讼",
    description: "讼，上刚下险，险而健讼。讼有孚窒，惕中吉，终凶。",
    scenario: "代表争执、诉讼、意见分歧的情景。天与水背道而驰，象征人与人之间的冲突和矛盾。",
    advice: "尽量避免争执和诉讼，保持沟通和理解，如果无法避免，也要保持警惕和中正的态度。",
    modernScenario: "在现代社会中，此卦适用于商业纠纷、职场冲突、家庭矛盾等各种意见分歧的场景。提醒人们在面对冲突时，应优先考虑和解与协商，通过有效沟通解决问题，避免激化矛盾。如必须通过法律途径解决，也要保持理性和克制。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20dispute%20conflict%20water%20sky%20opposite&sign=cd325c0616570bd98ac737481881a7d9"
  },
  {
    id: 7,
    name: "师",
    pinyin: "Shī",
    binary: "000101",
    nature: "地中有水、兵众",
    description: "师，众也，贞，正也。能以众正，可以王矣。师出以律，否臧凶。",
    scenario: "代表军队、团队、领导和管理的情景。地中藏水，象征民众的力量需要正确引导和管理。",
    advice: "作为领导者要以身作则，制定明确的纪律和规则，善于团结和管理团队，才能取得成功。",
    modernScenario: "在现代组织管理中，此卦适用于团队管理、项目领导、企业管理等场景。提醒领导者要建立明确的规章制度，以身作则，善于凝聚团队力量，合理分配资源，带领团队成员朝着共同目标前进。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20army%20soldiers%20leadership%20ground%20water&sign=c488a93c2ec65b3fc9b138f3e410dd27"
  },
  {
    id: 8,
    name: "比",
    pinyin: "Bǐ",
    binary: "101000",
    nature: "地上有水、亲近",
    description: "比，吉也，辅也，下顺从也。原筮元永贞，无咎。不宁方来，后夫凶。",
    scenario: "代表亲密、团结、合作的情景。地上有水，象征人与人之间的亲近和融洽关系。",
    advice: "要善于与人合作，建立良好的人际关系，但也要保持自己的独立性和原则，不可盲目随从。",
    modernScenario: "在现代社交和商业环境中，此卦适用于建立合作伙伴关系、团队建设、社交网络拓展等场景。提醒人们要主动建立良好的人际关系，寻找志同道合的伙伴，但在合作过程中也要保持独立思考和原则，避免陷入盲目随从的困境。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20friendship%20unity%20water%20ground%20harmony&sign=80a7325b7a6a1a84f0ad1f431bcec9ee"
  },
  {
    id: 9,
    name: "小畜",
    pinyin: "Xiǎo Chù",
    binary: "011101",
    nature: "风行天上、蓄养",
    description: "小畜，柔得位而上下应之，曰小畜。健而巽，刚中而志行，乃亨。密云不雨，自我西郊。",
    scenario: "代表积蓄力量、养精蓄锐的情景。如同云层聚集但尚未降雨，象征力量正在积累但尚未完全爆发。",
    advice: "在力量不足时要注重积累，不可急于求成，同时保持谦逊态度，等待合适的时机展现自己的能力。",
    modernScenario: "在现代职场发展中，此卦适用于职业发展的积累期、个人能力的提升阶段或项目的准备阶段。提醒人们在尚未获得足够资源和能力时，要注重学习和积累，厚积薄发，不要急于求成或过度展示自己。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20wind%20sky%20clouds%20accumulation%20preparation&sign=902246d1e25ecc37b22b6d8397622fd5"
  },
  {
    id: 10,
    name: "履",
    pinyin: "Lǚ",
    binary: "101111",
    nature: "上天下泽、履行",
    description: "履，柔履刚也，说而应乎乾，是以履虎尾，不咥人，亨。刚中正，履帝位而不疚，光明也。",
    scenario: "代表小心谨慎、履行职责的情景。如同走在老虎尾巴后面，必须小心谨慎才能避免危险。",
    advice: "在行动时要小心谨慎，遵守规则和礼仪，尊重他人，同时保持内心的光明正大，才能避免祸患。",
    modernScenario: "在现代工作环境中，此卦适用于处理高风险任务、与权威人士打交道、遵守重要规则等场景。提醒人们在面对风险和挑战时，要保持谨慎和警觉，遵守必要的规范和礼仪，同时保持正直和坦荡的心态。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20walking%20tiger%20tail%20caution%20path&sign=4a226d44583827a307839041ab992f9d"
  },
  {
    id: 11,
    name: "泰",
    pinyin: "Tài",
    binary: "000111",
    nature: "天地交、通泰",
    description: "泰，小往大来，吉亨。则是天地交而万物通也，上下交而其志同也。内阳而外阴，内健而外顺，内君子而外小人，君子道长，小人道消也。",
    scenario: "代表和谐、通顺、成功的情景。天地之气相交，万物生长繁荣，象征事物处于顺利发展的阶段。",
    advice: "在顺利的环境中要保持谦逊和谨慎，善于把握机会，同时也要关注可能出现的问题，防患于未然。",
    modernScenario: "在现代商业环境中，此卦适用于企业发展的上升期、团队合作的融洽阶段、市场环境有利的时期。提醒人们在顺境中要保持清醒头脑，珍惜机会，同时也要居安思危，为可能出现的变化做好准备。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20harmony%20heaven%20earth%20prosperity%20growth&sign=dfaf571a62a1c2d73802db81db5d2809"
  },
  {
    id: 12,
    name: "否",
    pinyin: "Pǐ",
    binary: "111000",
    nature: "天地不交、闭塞",
    description: "否之匪人，不利君子贞，大往小来。则是天地不交而万物不通也，上下不交而天下无邦也。内阴而外阳，内柔而外刚，内小人而外君子，小人道长，君子道消也。",
    scenario: "代表阻塞、不通、困境的情景。天地之气不相交，万物生长受阻，象征事物处于困难和阻碍的阶段。",
    advice: "在困境中要保持坚定的信念和耐心，不可轻易放弃，同时也要寻找突破困境的方法，等待转机的到来。",
    modernScenario: "在现代职场和生活中，此卦适用于事业瓶颈期、人际关系紧张、项目受阻等困难局面。提醒人们在逆境中要保持坚韧和耐心，积极寻找解决问题的方法，同时也要善于等待时机，相信困境终将过去。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20blockage%20difficulty%20separation%20heaven%20earth&sign=669609ee26a1954201efadec433b5d98"
  },
  {
    id: 13,
    name: "同人",
    pinyin: "Tóng Rén",
    binary: "111011",
    nature: "天火、同人",
    description: "同人，柔得位得中而应乎乾，曰同人。同人曰，同人于野，亨。利涉大川，利君子贞。文明以健，中正而应，君子正也。唯君子为能通天下之志。",
    scenario: "代表团结、合作、志同道合的情景。天与火相互呼应，象征人与人之间的心灵相通和紧密合作。",
    advice: "要善于与人沟通和合作，寻找志同道合的伙伴，共同追求目标，同时也要保持自己的独立性和原则。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20unity%20friendship%20heaven%20fire%20togetherness&sign=bf8e4af26a1d28291ed7ea38f655fbd7"
  },
  {
    id: 14,
    name: "大有",
    pinyin: "Dà Yǒu",
    binary: "101111",
    nature: "火天、大有",
    description: "大有，柔得尊位大中而上下应之，曰大有。其德刚健而文明，应乎天而时行，是以元亨。",
    scenario: "代表富有、丰收、成功的情景。火在天上普照万物，象征事业有成、财富丰厚的状态。",
    advice: "在成功和富有的时候要保持谦逊和慷慨，懂得分享和回馈社会，同时也要注意保持内心的平和和清醒。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20abundance%20success%20fire%20heaven%20prosperity&sign=e27a2e203e1fe3a140e1d2be911372dd"
  },
  {
    id: 15,
    name: "谦",
    pinyin: "Qiān",
    binary: "000100",
    nature: "地中有山、谦逊",
    description: "谦，亨，君子有终。谦，尊而光，卑而不可逾，君子之终也。天道下济而光明，地道卑而上行。天道亏盈而益谦，地道变盈而流谦，鬼神害盈而福谦，人道恶盈而好谦。谦尊而光，卑而不可逾，君子之终也。",
    scenario: "代表谦逊、低调、不自满的情景。山在地中隐藏其高，象征谦逊的品德和不张扬的态度。",
    advice: "要保持谦逊的态度，尊重他人，不断学习和进步，不可因为取得一点成绩就骄傲自满。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20humility%20mountain%20earth%20modesty%20hidden&sign=2d41637ef0c46031617cee665b144092"
  },
  {
    id: 16,
    name: "豫",
    pinyin: "Yù",
    binary: "011000",
    nature: "雷地、愉悦",
    description: "豫，刚应而志行，顺以动，豫。豫，顺以动，故天地如之，而况建侯行师乎？天地以顺动，故日月不过，而四时不忒；圣人以顺动，则刑罚清而民服。豫之时义大矣哉！",
    scenario: "代表愉悦、快乐、舒适的情景。雷在地上震动，万物随之生长，象征内心的愉悦和满足。",
    advice: "在快乐的时候要懂得珍惜和感恩，同时也要注意不可过度放纵和沉迷，保持适度的节制和平衡。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20joy%20thunder%20earth%20happiness%20celebration&sign=97225c6831e5f6e0670fd054d717500b"
  },
  {
    id: 17,
    name: "随",
    pinyin: "Suí",
    binary: "000110",
    nature: "泽雷、随从",
    description: "随，刚来而下柔，动而说，随。大亨贞，无咎，而天下随时，随之时义大矣哉！",
    scenario: "代表跟随、顺应、适应的情景。泽在雷上，象征水随雷动，灵活适应变化的态度。",
    advice: "要学会顺应时势，灵活应变，善于跟随正确的引导和潮流，但也要保持自己的判断和原则，不可盲目随从。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20following%20adaptation%20water%20thunder%20flow&sign=c70568a6b10cfa87aeca4623f7f9314e"
  },
  {
    id: 18,
    name: "蛊",
    pinyin: "Gǔ",
    binary: "110000",
    nature: "山风、整治",
    description: "蛊，刚上而柔下，巽而止，蛊。蛊，元亨，而天下治也。利涉大川，往有事也。先甲三日，后甲三日，终则有始，天行也。",
    scenario: "代表整顿、治理、改革的情景。山在风上，象征必须采取行动来整治混乱的局面。",
    advice: "面对混乱和问题时，要勇于承担责任，采取果断的行动进行整顿和改革，同时也要有长远的眼光和计划。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20reform%20mountain%20wind%20order%20restoration&sign=65c714bca1c66abd215bca68334aa41c"
  },
  {
    id: 19,
    name: "临",
    pinyin: "Lín",
    binary: "000011",
    nature: "地泽、亲临",
    description: "临，刚浸而长，说而顺，刚中而应，大亨以正，天之道也。至于八月有凶，消不久也。",
    scenario: "代表亲临指导、管理、监督的情景。地在泽上，象征领导者亲自到基层了解情况，指导工作。",
    advice: "作为领导者要深入基层，了解实际情况，关心下属，同时也要保持原则和公正，不可偏听偏信。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20leadership%20earth%20water%20guidance%20presence&sign=8b4cdc050a48fddd540b2e13bd755405"
  },
  {
    id: 20,
    name: "观",
    pinyin: "Guān",
    binary: "110000",
    nature: "风行地上、观察",
    description: "观，盥而不荐，有孚颙若，下观而化也。观天之神道，而四时不忒，圣人以神道设教，而天下服矣。",
    scenario: "代表观察、审视、学习的情景。风在地上吹拂，观察万物的生长变化，象征通过观察来认识世界。",
    advice: "要善于观察周围的环境和事物，从中学习和汲取经验，同时也要保持客观和理性的态度，不可主观臆断。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20observation%20wind%20earth%20contemplation%20wisdom&sign=439b6363bd5203d0a05ab6517b349e38"
  },
  {
    id: 21,
    name: "噬嗑",
    pinyin: "Shì Kè",
    binary: "111010",
    nature: "雷电、咬合",
    description: "噬嗑，亨，利用狱。雷电噬嗑，先王以明罚敕法。",
    scenario: "代表咬合、裁决、惩治的情景。雷电交加，象征严明的法律和公正的裁决。",
    advice: "在面对问题和冲突时，要采取公正、严明的态度进行处理，不可徇私舞弊，同时也要有慈悲之心，不可过于严苛。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20judgment%20thunder%20lightning%20justice%20resolution&sign=08ae330a5c13c998e72bdc3897146508"
  },
  {
    id: 22,
    name: "贲",
    pinyin: "Bì",
    binary: "010111",
    nature: "山下有火、文饰",
    description: "贲，亨。小利有攸往。山下有火，贲。君子以明庶政，无敢折狱。",
    scenario: "代表文饰、美化、礼仪的情景。山下有火，火光映照山色，象征外在的修饰和美化。",
    advice: "要注重外在的形象和礼仪，但不可过于浮华和虚荣，更要注重内在的品质和修养，做到内外兼修。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20ornamentation%20mountain%20fire%20beauty%20culture&sign=20100d27c66e1a9f06e43e82cde71d81"
  },
  {
    id: 23,
    name: "剥",
    pinyin: "Bō",
    binary: "000111",
    nature: "山附于地、剥落",
    description: "剥，不利有攸往。山附于地，剥。上以厚下安宅。",
    scenario: "代表剥落、衰退、削弱的情景。山附着于地，象征事物逐渐剥落和衰退的过程。",
    advice: "在面临衰退和困难时，要保持冷静和坚韧，寻找问题的根源，采取积极的措施进行修复和重建，不可轻易放弃。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20decline%20mountain%20earth%20erosion%20loss&sign=9c21bc0c5e6f9af7b5f23053ac050a40"
  },
  {
    id: 24,
    name: "复",
    pinyin: "Fù",
    binary: "111000",
    nature: "雷在地中、回复",
    description: "复，亨。出入无疾，朋来无咎。反复其道，七日来复，利有攸往。雷在地中，复。先王以至日闭关，商旅不行，后不省方。",
    scenario: "代表回复、复苏、重生的情景。雷在地下震动，象征阳气开始复苏，万物即将重新生长。",
    advice: "在经历困难和挫折后，要善于总结经验教训，重新振作精神，寻找新的机会和希望，相信事物会向好的方向发展。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20renewal%20thunder%20earth%20rebirth%20recovery&sign=755cdeaf785749d4c24c69a9347f3d30"
  },
  {
    id: 25,
    name: "无妄",
    pinyin: "Wú Wàng",
    binary: "111011",
    nature: "天下雷行、无妄",
    description: "无妄，元亨，利贞。其匪正有眚，不利有攸往。天下雷行，物与无妄。先王以茂对时育万物。",
    scenario: "代表真实、自然、不虚伪的情景。雷在天上运行，象征事物按照自然规律发展，没有虚妄和偏差。",
    advice: "要保持真诚和正直的品格，按照事物的本来面目去认识和处理问题，不可有非分之想和虚妄之念。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20truth%20heaven%20thunder%20honesty%20natural&sign=f7df98f5be3bf92b00fe8e6365d1448d"
  },
  {
    id: 26,
    name: "大畜",
    pinyin: "Dà Chù",
    binary: "111101",
    nature: "天在山中、大畜",
    description: "大畜，利贞。不家食，吉。利涉大川。天在山中，大畜。君子以多识前言往行，以畜其德。",
    scenario: "代表大积蓄、大准备、大涵养的情景。天在山中，象征包容和积蓄的力量，为未来的发展做准备。",
    advice: "要注重知识和经验的积累，不断提高自己的品德和能力，为未来的发展打下坚实的基础，同时也要有广阔的胸怀和包容的态度。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20great%20accumulation%20heaven%20mountain%20preparation%20wisdom&sign=2ec3f6eb86258dd823d43120bf7afd80"
  },
  {
    id: 27,
    name: "颐",
    pinyin: "Yí",
    binary: "110001",
    nature: "山下有雷、颐养",
    description: "颐，贞吉。观颐，自求口实。山下有雷，颐。君子以慎言语，节饮食。",
    scenario: "代表颐养、保养、自我修养的情景。山下有雷，象征通过适当的调养来保持身心健康和活力。",
    advice: "要注重身心的调养和保健，保持良好的生活习惯和饮食习惯，同时也要注意言行举止的修养，做到内外兼修。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20nourishment%20mountain%20thunder%20health%20wellness&sign=eeab094abba1b63e012cc8d176631d1f"
  },
  {
    id: 28,
    name: "大过",
    pinyin: "Dà Guò",
    binary: "011110",
    nature: "泽灭木、大过",
    description: "大过，栋桡，利有攸往，亨。泽灭木，大过。君子以独立不惧，遯世无闷。",
    scenario: "代表过度、过失、非常时期的情景。泽水淹没树木，象征事物发展超过了正常的限度，需要采取特别的措施。",
    advice: "在面对非常情况和危机时，要保持冷静和勇气，采取果断的行动进行处理，同时也要注意不可过度行动，避免造成更大的损失。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20crisis%20water%20tree%20excess%20challenge&sign=da3943bc1196f42717ec69ae7a192f63"
  },
  {
    id: 29,
    name: "坎",
    pinyin: "Kǎn",
    binary: "010010",
    nature: "水洊至、险陷",
    description: "习坎，有孚维心，亨，行有尚。水洊至，习坎。君子以常德行，习教事。",
    scenario: "代表危险、困难、挑战的情景。水流连续不断，象征重重困难和危险，需要有坚定的信心和勇气去克服。",
    advice: "面对困难和危险时，要保持坚定的信念和勇气，不断学习和积累经验，寻找解决问题的方法和途径，相信自己能够克服困难。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20danger%20water%20challenge%20obstacle%20flow&sign=51c694de99a66d04c3ccf627238cb137"
  },
  {
    id: 30,
    name: "离",
    pinyin: "Lí",
    binary: "101101",
    nature: "明两作、附着",
    description: "离，利贞，亨。畜牝牛，吉。明两作，离。大人以继明照于四方。",
    scenario: "代表光明、附着、依附的情景。光明连续不断，象征事物需要依附于某种基础才能存在和发展。",
    advice: "要善于借助他人的力量和资源来实现自己的目标，同时也要保持自己的独立性和自主性，不可过度依赖他人。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20light%20fire%20brightness%20attachment%20clarity&sign=bd4719dc1312cf50cc780752cc2fcba5"
  },
  {
    id: 31,
    name: "咸",
    pinyin: "Xián",
    binary: "001110",
    nature: "山上有泽、感应",
    description: "咸，亨，利贞，取女吉。山上有泽，咸。君子以虚受人。",
    scenario: "代表感应、交流、互动的情景。山上有泽，象征人与人之间的心灵感应和情感交流。",
    advice: "要善于与他人沟通和交流，建立良好的人际关系，同时也要保持开放和包容的心态，善于倾听和理解他人。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20connection%20mountain%20water%20communication%20sensitivity&sign=3be7c197ca4d35f3f03905224f5265dd"
  },
  {
    id: 32,
    name: "恒",
    pinyin: "Héng",
    binary: "110001",
    nature: "雷风、恒常",
    description: "恒，亨，无咎，利贞，利有攸往。雷风，恒。君子以立不易方。",
    scenario: "代表恒常、持久、稳定的情景。雷和风相互配合，象征事物的发展需要保持稳定和持久的努力。",
    advice: "要保持恒常的心态和行动，坚持自己的信念和目标，不可轻易改变和放弃，同时也要注意适应变化，做到灵活变通。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20perseverance%20thunder%20wind%20constancy%20stability&sign=e6593e5c45f1ee7c15cbb4ceb32caa47"
  },
  {
    id: 33,
    name: "遯",
    pinyin: "Dùn",
    binary: "111100",
    nature: "天下有山、退避",
    description: "遯，亨，小利贞。天下有山，遯。君子以远小人，不恶而严。",
    scenario: "代表退避、隐遁、远离是非的情景。天下有山，象征在适当的时候选择退避和隐遁，保持内心的宁静。",
    advice: "在面对不利的环境和小人时，要学会退避和远离，保持自己的高洁和尊严，不可与之纠缠。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20retreat%20mountain%20heaven%20seclusion%20wisdom&sign=c01169ef8d465d30560980c49310fa0c"
  },
  {
    id: 34,
    name: "大壮",
    pinyin: "Dà Zhuàng",
    binary: "001111",
    nature: "雷在天上、强盛",
    description: "大壮，利贞。雷在天上，大壮。君子以非礼弗履。",
    scenario: "代表强盛、壮大、力量充沛的情景。雷在天上轰鸣，象征力量的强大和气势的旺盛。",
    advice: "在强大的时候要保持谦逊和谨慎，不可滥用力量，遵守礼仪和道德规范，做到有理有节。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20strength%20thunder%20heaven%20power%20vitality&sign=5c173e917a46cfc4c71228ac1503c301"
  },
  {
    id: 35,
    name: "晋",
    pinyin: "Jìn",
    binary: "000101",
    nature: "明出地上、晋升",
    description: "晋，康侯用锡马蕃庶，昼日三接。明出地上，晋。君子以自昭明德。",
    scenario: "代表晋升、发展、前途光明的情景。光明从地上升起，象征事业的发展和地位的提升。",
    advice: "在晋升和发展的时候要保持谦虚和谨慎，不断提高自己的品德和能力，用自己的才华和努力赢得认可。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20progress%20sunrise%20earth%20advancement%20growth&sign=6c58048fdfa7a4c340a1e675fa99df2b"
  },
  {
    id: 36,
    name: "明夷",
    pinyin: "Míng Yí",
    binary: "101000",
    nature: "明入地中、光明受损",
    description: "明夷，利艰贞。明入地中，明夷。君子以莅众，用晦而明。",
    scenario: "代表光明受损、艰难困苦的情景。光明进入地中，象征暂时的困难和挫折，需要韬光养晦。",
    advice: "在困难和挫折面前要保持坚韧和耐心，善于隐藏自己的光芒，等待时机的到来，不可轻易暴露自己的实力。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20obscurity%20darkness%20earth%20challenge%20patience&sign=4818b441aa838f25c206c6fe9900f4a8"
  },
  {
    id: 37,
    name: "家人",
    pinyin: "Jiā Rén",
    binary: "111001",
    nature: "风火、家庭",
    description: "家人，利女贞。风自火出，家人。君子以言有物而行有恒。",
    scenario: "代表家庭、亲情、和谐的情景。风从火中吹出，象征家庭的温暖和亲情的传递。",
    advice: "要重视家庭关系，注重家庭成员之间的沟通和理解，保持言行一致和持之以恒的态度，营造和谐的家庭氛围。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20family%20home%20fire%20wind%20harmony&sign=c1e734eae33a20523053eecda1ca160b"
  },
  {
    id: 38,
    name: "睽",
    pinyin: "Kuí",
    binary: "100111",
    nature: "上火下泽、乖离",
    description: "睽，小事吉。上火下泽，睽。君子以同而异。",
    scenario: "代表乖离、分歧、矛盾的情景。火在上而泽在下，象征事物之间的差异和矛盾。",
    advice: "在面对分歧和矛盾时，要保持理解和包容的态度，认识到差异的存在是正常的，善于求同存异，化解矛盾。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20difference%20fire%20water%20conflict%20reconciliation&sign=31a4ba4521e0bb9957d99372852c348f"
  },
  {
    id: 39,
    name: "蹇",
    pinyin: "Jiǎn",
    binary: "111010",
    nature: "山上有水、艰难",
    description: "蹇，利西南，不利东北。利见大人，贞吉。山上有水，蹇。君子以反身修德。",
    scenario: "代表艰难、险阻、困境的情景。山上有水，象征前进道路上的困难和阻碍。",
    advice: "在面对困难和险阻时，要反躬自省，提高自己的品德和能力，寻找解决问题的方法，同时也要善于寻求他人的帮助。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20difficulty%20mountain%20water%20obstacle%20perseverance&sign=bc741fc7e74716327e89cebb1c508d9b"
  },
  {
    id: 40,
    name: "解",
    pinyin: "Jiě",
    binary: "010111",
    nature: "雷雨作、舒解",
    description: "解，利西南。无所往，其来复吉。有攸往，夙吉。雷雨作，解。君子以赦过宥罪。",
    scenario: "代表舒解、释放、解决的情景。雷雨交加，象征困难和问题得到解决，压力得到释放。",
    advice: "在问题得到解决时，要学会宽恕和包容，给他人改过自新的机会，同时也要总结经验教训，避免类似问题再次发生。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20resolution%20thunder%20rain%20liberation%20relief&sign=26a79881311c1803120aa9c02a9e73a2"
  },
  {
    id: 41,
    name: "损",
    pinyin: "Sǔn",
    binary: "110100",
    nature: "山下有泽、减损",
    description: "损，有孚，元吉，无咎，可贞，利有攸往。曷之用？二簋可用享。山下有泽，损。君子以惩忿窒欲。",
    scenario: "代表减损、克制、舍弃的情景。山下有泽，象征适当的减损和舍弃，才能保持平衡和和谐。",
    advice: "要学会克制自己的情绪和欲望，适当舍弃一些不必要的东西，保持内心的平静和平衡，不可贪心和放纵。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20reduction%20mountain%20water%20sacrifice%20balance&sign=dbea198b7b079f3e05c95e568c2efb63"
  },
  {
    id: 42,
    name: "益",
    pinyin: "Yì",
    binary: "001011",
    nature: "风雷、增益",
    description: "益，利有攸往，利涉大川。风雷，益。君子以见善则迁，有过则改。",
    scenario: "代表增益、进步、成长的情景。风雷交加，象征力量的增长和事物的进步。",
    advice: "要善于学习他人的优点，不断完善自己，发现错误及时改正，保持积极向上的态度，促进自己的成长和进步。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20growth%20thunder%20wind%20progress%20improvement&sign=07ebdf8f3158db8580b054226b812628"
  },
  {
    id: 43,
    name: "夬",
    pinyin: "Guài",
    binary: "000111",
    nature: "泽上于天、决断",
    description: "夬，扬于王庭，孚号，有厉，告自邑，不利即戎，利有攸往。泽上于天，夬。君子以施禄及下，居德则忌。",
    scenario: "代表决断、决策、行动的情景。泽水在天上，象征果断的决策和迅速的行动。",
    advice: "在需要做出决策时，要果断而坚定，但也要考虑周全，善于听取他人的意见，不可独断专行，同时也要注意时机的选择。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20decision%20water%20heaven%20resolution%20action&sign=be4a675ca15e986a33a45709bfda43d6"
  },
  {
    id: 44,
    name: "姤",
    pinyin: "Gòu",
    binary: "111000",
    nature: "天下有风、相遇",
    description: "姤，女壮，勿用取女。天下有风，姤。后以施命诰四方。",
    scenario: "代表相遇、邂逅、机遇的情景。天下有风，象征缘分和机遇的到来。",
    advice: "在遇到新的机遇和人际关系时，要保持警惕和理性，不可盲目冲动，要认真评估和把握机会，同时也要注意自己的行为举止。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20encounter%20heaven%20wind%20chance%20meeting&sign=db1b1d688b56bb88b18f64c4ca7c8837"
  },
  {
    id: 45,
    name: "萃",
    pinyin: "Cuì",
    binary: "000110",
    nature: "泽上于地、聚集",
    description: "萃，亨，王假有庙，利见大人，亨，利贞。用大牲吉，利有攸往。泽上于地，萃。君子以除戎器，戒不虞。",
    scenario: "代表聚集、集合、团结的情景。泽水在地上，象征人们的聚集和团结。",
    advice: "在团队合作和集体活动中，要善于团结他人，发挥集体的力量，但也要保持警惕，做好防范措施，避免意外事件的发生。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20gathering%20water%20earth%20unity%20community&sign=b926a96601238f2d7c758952794e8fd5"
  },
  {
    id: 46,
    name: "升",
    pinyin: "Shēng",
    binary: "110000",
    nature: "地中生木、上升",
    description: "升，元亨，用见大人，勿恤，南征吉。地中生木，升。君子以顺德，积小以高大。",
    scenario: "代表上升、发展、进步的情景。树木从地中生长，象征事业的发展和地位的提升。",
    advice: "要顺应自然规律和社会发展趋势，注重积累和坚持，从小事做起，不断努力，逐步实现自己的目标和理想。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20ascension%20tree%20earth%20growth%20progress&sign=a6feff06cc4099b9af66c95bb881bc5a"
  },
  {
    id: 47,
    name: "困",
    pinyin: "Kùn",
    binary: "111011",
    nature: "泽无水、困境",
    description: "困，亨，贞，大人吉，无咎。有言不信。泽无水，困。君子以致命遂志。",
    scenario: "代表困境、困难、挑战的情景。泽中无水，象征陷入困境和艰难的境地。",
    advice: "在面对困境时，要保持坚定的信念和高尚的品德，宁愿牺牲生命也要坚持自己的理想和信念，不可轻易妥协和放弃。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20difficulty%20dry%20water%20challenge%20endurance&sign=24e581656215e343257a0e1212c0a718"
  },
  {
    id: 48,
    name: "井",
    pinyin: "Jǐng",
    binary: "110011",
    nature: "木上有水、井养",
    description: "井，改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶。木上有水，井。君子以劳民劝相。",
    scenario: "代表井养、滋养、奉献的情景。树木上有水，象征像井一样滋养和奉献他人。",
    advice: "要像井一样无私地奉献和滋养他人，关心和帮助民众，鼓励人们相互帮助和支持，共同创造美好的生活。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20well%20water%20tree%20nourishment%20service&sign=36456833be2e870b46ba3f0c09544a12"
  },
  {
    id: 49,
    name: "革",
    pinyin: "Gé",
    binary: "111101",
    nature: "泽中有火、变革",
    description: "革，己日乃孚，元亨，利贞，悔亡。泽中有火，革。君子以治历明时。",
    scenario: "代表变革、改革、创新的情景。泽中有火，象征变革的力量和创新的精神。",
    advice: "在需要变革的时候，要果断而坚定，善于把握时机，制定明确的计划和目标，同时也要与他人沟通和协调，获得广泛的支持。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20change%20water%20fire%20transformation%20innovation&sign=e9e440ba6ae1154c45be8007b57c4568"
  },
  {
    id: 50,
    name: "鼎",
    pinyin: "Dǐng",
    binary: "010111",
    nature: "木上有火、鼎新",
    description: "鼎，元吉，亨。木上有火，鼎。君子以正位凝命。",
    scenario: "代表鼎新、建立、稳定的情景。木上有火，象征建立新的秩序和稳定的局面。",
    advice: "要像鼎一样稳定和坚定，确立正确的位置和目标，凝聚力量，完成使命，不可动摇和懈怠。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20establishment%20fire%20wood%20stability%20authority&sign=9cf1b7a8886d120b3458e05218cb9f07"
  },
  {
    id: 51,
    name: "震",
    pinyin: "Zhèn",
    binary: "110110",
    nature: "雷、震动",
    description: "震，亨。震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。洊雷，震。君子以恐惧修省。",
    scenario: "代表震动、警示、觉醒的情景。雷声轰鸣，象征突如其来的变化和警示。",
    advice: "在面对突发事件和变化时，要保持警惕和冷静，及时反思自己的行为和思想，修正错误，提高自己，不可惊慌失措。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20thunder%20vibration%20warning%20awakening%20power&sign=6d73127fed6c681aa13ef113efc5d374"
  },
  {
    id: 52,
    name: "艮",
    pinyin: "Gèn",
    binary: "001001",
    nature: "山、止息",
    description: "艮，艮其背，不获其身，行其庭，不见其人，无咎。兼山，艮。君子以思不出其位。",
    scenario: "代表止息、静止、克制的情景。山的形象，象征停止和克制自己的行为和思想。",
    advice: "要学会适可而止，克制自己的欲望和行为，思考问题不要超出自己的职责范围，保持内心的平静和安宁。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20mountain%20stillness%20restraint%20calm%20balance&sign=530e64fa1035fe18aef0166efb6e147f"
  },
  {
    id: 53,
    name: "渐",
    pinyin: "Jiàn",
    binary: "110101",
    nature: "山上有木、渐进",
    description: "渐，女归吉，利贞。山上有木，渐。君子以居贤德善俗。",
    scenario: "代表渐进、逐步、缓慢发展的情景。山上有木，象征事物的发展需要循序渐进，不可急于求成。",
    advice: "在做任何事情时，都要遵循渐进的原则，一步一个脚印，扎实前进，不可急躁和冒进，同时也要注重品德的修养和良好风气的培养。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20gradual%20mountain%20tree%20progress%20patience&sign=418598b202ae91d699a14c850b269291"
  },
  {
    id: 54,
    name: "归妹",
    pinyin: "Guī Mèi",
    binary: "010110",
    nature: "雷泽、婚姻",
    description: "归妹，征凶，无攸利。雷泽，归妹。君子以永终知敝。",
    scenario: "代表婚姻、结合、归属的情景。雷和泽的结合，象征男女的婚姻和结合。",
    advice: "在婚姻和合作关系中，要保持长久的承诺和责任，预见到可能出现的问题和弊端，及时采取措施，维护关系的和谐和稳定。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20marriage%20union%20thunder%20water%20relationship&sign=ee1153f2db5fae022b22323b91abd539"
  },
  {
    id: 55,
    name: "丰",
    pinyin: "Fēng",
    binary: "110111",
    nature: "雷电皆至、丰盛",
    description: "丰，亨，王假之，勿忧，宜日中。雷电皆至，丰。君子以折狱致刑。",
    scenario: "代表丰盛、丰富、成功的情景。雷电交加，象征力量的强大和事业的成功。",
    advice: "在事业成功和物质丰富的时候，要保持谦逊和警惕，不可骄傲自满，同时也要公正地处理事务，不可滥用权力。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20abundance%20thunder%20lightning%20prosperity%20success&sign=d689a940c51ea01d7016616dd530d9bb"
  },
  {
    id: 56,
    name: "旅",
    pinyin: "Lǚ",
    binary: "111010",
    nature: "山上有火、行旅",
    description: "旅，小亨，旅贞吉。山上有火，旅。君子以明慎用刑而不留狱。",
    scenario: "代表行旅、旅行、漂泊的情景。山上有火，象征在外旅行和漂泊的状态。",
    advice: "在旅行和漂泊的时候，要保持警惕和谨慎，遵守当地的法律和习俗，与人友好相处，不可久留和固执己见。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20journey%20travel%20mountain%20fire%20wandering&sign=08e2c4a1b4a58446c2f1376f81790786"
  },
  {
    id: 57,
    name: "巽",
    pinyin: "Xùn",
    binary: "110110",
    nature: "风、顺从",
    description: "巽，小亨，利有攸往，利见大人。随风，巽。君子以申命行事。",
    scenario: "代表顺从、谦逊、灵活的情景。风的形象，象征柔顺和灵活的态度。",
    advice: "要保持谦逊和柔顺的态度，善于适应环境和变化，灵活地处理问题，同时也要明确自己的使命和责任，积极行动。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20wind%20flexibility%20adaptation%20humility%20movement&sign=bec43ab41a6dedb49230acb4adb36f25"
  },
  {
    id: 58,
    name: "兑",
    pinyin: "Duì",
    binary: "011011",
    nature: "泽、喜悦",
    description: "兑，亨，利贞。丽泽，兑。君子以朋友讲习。",
    scenario: "代表喜悦、欢乐、和谐的情景。泽的形象，象征喜悦和和谐的氛围。",
    advice: "要保持愉悦和积极的心态，善于与人交往和沟通，与朋友一起学习和进步，共同创造和谐的人际关系。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20water%20joy%20happiness%20harmony%20friendship&sign=a5e2a82defa37eadb01cd712eafd1fbc"
  },
  {
    id: 59,
    name: "涣",
    pinyin: "Huàn",
    binary: "111011",
    nature: "风行水上、涣散",
    description: "涣，亨。王假有庙，利涉大川，利贞。风行水上，涣。先王以享于帝立庙。",
    scenario: "代表涣散、离散、化解的情景。风吹水面，象征涣散和化解的过程。",
    advice: "在面对涣散和离散的局面时，要采取适当的措施进行整合和凝聚，重建秩序和信心，同时也要善于化解矛盾和问题，不可强行压制。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20dispersion%20wind%20water%20resolution%20unity&sign=d2a9e1ea8ac3cc17203451c9d6520d25"
  },
  {
    id: 60,
    name: "节",
    pinyin: "Jié",
    binary: "011101",
    nature: "泽上有水、节制",
    description: "节，亨。苦节不可贞。泽上有水，节。君子以制数度，议德行。",
    scenario: "代表节制、节约、克制的情景。泽上有水，象征适当的节制和约束。",
    advice: "要学会节制和约束自己的行为和欲望，制定合理的规则和制度，注重品德的修养，不可过度放纵和浪费。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20moderation%20water%20restraint%20discipline%20balance&sign=f193a5c05bc40ad1709197b89456ed15"
  },
  {
    id: 61,
    name: "中孚",
    pinyin: "Zhōng Fú",
    binary: "110011",
    nature: "泽上有风、诚信",
    description: "中孚，豚鱼吉，利涉大川，利贞。泽上有风，中孚。君子以议狱缓死。",
    scenario: "代表诚信、忠信、真诚的情景。泽上有风，象征诚信和真诚的品质。",
    advice: "要保持诚信和忠信的品质，真诚地对待他人和事物，言出必行，行必有果，同时也要有慈悲之心，不可过于严苛和急躁。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20sincerity%20water%20wind%20trust%20honesty&sign=e0ff59cd73640f1e4f9f396ae3e7778d"
  },
  {
    id: 62,
    name: "小过",
    pinyin: "Xiǎo Guò",
    binary: "001100",
    nature: "山上有雷、小过",
    description: "小过，亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上宜下，大吉。山上有雷，小过。君子以行过乎恭，丧过乎哀，用过乎俭。",
    scenario: "代表小过、小错、适度的情景。山上有雷，象征小的过失和适度的行为。",
    advice: "在日常生活中，要允许自己和他人有小的过失和错误，保持适度的态度，不可过分追求完美，同时也要注意细节，不可忽视小的问题。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20minor%20mountain%20thunder%20mistake%20moderation&sign=4da054138ded75aa393d5d5b2e14eda2"
  },
  {
    id: 63,
    name: "既济",
    pinyin: "Jì Jì",
    binary: "111010",
    nature: "水在火上、成功",
    description: "既济，亨，小利贞，初吉终乱。水在火上，既济。君子以思患而豫防之。",
    scenario: "代表成功、完成、圆满的情景。水在火上，象征事情已经成功和完成。",
    advice: "在成功和完成的时候，要保持警惕和谨慎，思考可能出现的问题和隐患，提前做好防范措施，不可麻痹大意，否则可能导致最终的混乱。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20success%20water%20fire%20completion%20vigilance&sign=1f85161c62cee155638cfb0c2c6b413b"
  },
  {
    id: 64,
    name: "未济",
    pinyin: "Wèi Jì",
    binary: "010111",
    nature: "火在水上、未完成",
    description: "未济，亨，小狐汔济，濡其尾，无攸利。火在水上，未济。君子以慎辨物居方。",
    scenario: "代表未完成、未成功、继续努力的情景。火在水上，象征事情尚未完成，需要继续努力。",advice: "在面对未完成的事情时，要保持耐心和毅力，继续努力，不可半途而废，同时也要谨慎地辨别事物的本质和规律，选择正确的方法和路径。",
    imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_4_3&prompt=ancient%20chinese%20unfinished%20fire%20water%20potential%20perseverance&sign=74b4dfc83bfe35a969faced72e587f81"
  }
];

// 根据ID获取卦象
export const getHexagramById = (id: number): Hexagram | undefined => {
  return hexagrams.find(h => h.id === id);
};

// 搜索卦象
export const searchHexagrams = (query: string): Hexagram[] => {
  if (!query) return hexagrams;
  
  const lowercaseQuery = query.toLowerCase();
  return hexagrams.filter(h => 
    h.name.toLowerCase().includes(lowercaseQuery) ||
    h.pinyin.toLowerCase().includes(lowercaseQuery) ||
    h.description.toLowerCase().includes(lowercaseQuery) ||
    h.scenario.toLowerCase().includes(lowercaseQuery)
  );
};