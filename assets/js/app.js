const styleDefinitions = {
  golden: {
    label: "金色成长",
    albums: "Debut / Fearless / Speak Now",
    fill: "linear-gradient(90deg, var(--golden-soft), var(--golden))",
  },
  scarlet: {
    label: "赤红剖白",
    albums: "Red / TTPD",
    fill: "linear-gradient(90deg, var(--scarlet-soft), var(--scarlet))",
  },
  neon: {
    label: "霓虹主角",
    albums: "1989 / Lover",
    fill: "linear-gradient(90deg, var(--neon-soft), var(--neon))",
  },
  midnight: {
    label: "午夜锋芒",
    albums: "reputation / Midnights",
    fill: "linear-gradient(90deg, #a9b8cf, var(--midnight))",
  },
  willow: {
    label: "木屋诗意",
    albums: "folklore / evermore",
    fill: "linear-gradient(90deg, var(--willow-soft), var(--willow))",
  },
};

const traitDefinitions = {
  openness: {
    label: "开放感",
    description: "对新鲜视角、意象和声音层次的好奇度",
    fill: "linear-gradient(90deg, #f8d3e2, #d87a9d)",
    narrative: "你愿意让音乐带你进入新的角度和情境，常会被复杂叙事或风格变化吸引。",
  },
  warmth: {
    label: "关系温度",
    description: "在人际里重视回应、真诚和情感连接",
    fill: "linear-gradient(90deg, #f3dfb8, #d4a85d)",
    narrative: "你把真诚、陪伴和双向回应看得很重，音乐也常是你表达在乎的方式。",
  },
  energy: {
    label: "舞台能量",
    description: "把情绪转成行动、表达和现场参与感的倾向",
    fill: "linear-gradient(90deg, #d7def0, #51698a)",
    narrative: "你偏爱能推动情绪往前走的作品，也更容易在现场氛围里被点燃。",
  },
  autonomy: {
    label: "自主表达",
    description: "边界感、主导权和自我立场的清晰程度",
    fill: "linear-gradient(90deg, #c5d1e2, #24334e)",
    narrative: "你很在意真实立场和边界感，不太愿意为了迎合而牺牲自己的节奏。",
  },
  sensitivity: {
    label: "情绪敏锐度",
    description: "捕捉细节、潜台词与情感纹理的能力",
    fill: "linear-gradient(90deg, #f4dfd9, #af5b61)",
    narrative: "你能听见关系里的细节和暗流，也更容易被一首歌里的故事感真正打动。",
  },
};

const profileDefinitions = {
  golden: {
    title: "金色心动派",
    subtitle: "你的底色更接近早期乡村与成长叙事的明亮真诚。",
    summaryLead: "你更容易被直接、温暖、带一点纪念感的旋律和故事打动。",
    recommendations: [
      { song: "Love Story", note: "适合你对明确心动和仪式感的偏爱。" },
      { song: "Fearless", note: "能把你的勇敢和爽朗情绪提起来。" },
      { song: "Our Song", note: "轻快、日常、很有你喜欢的亲近感。" },
      { song: "Enchanted", note: "保留浪漫幻想，也带着成长视角。" },
      { song: "Long Live", note: "适合你重视共同记忆和陪伴感的部分。" },
    ],
    concertTitle: "看台前区的大合唱收藏家",
    concertBase: "最适合和熟悉的人一起早点进场，把交换手链、经典大合唱和每一次副歌来临都当作今晚的高光时刻。",
    concertTags: ["适合朋友同行", "大合唱幸福感高", "经典曲目命中率高"],
  },
  scarlet: {
    title: "赤红叙事派",
    subtitle: "你偏爱 diary-pop 式的细节剖白，也敢直视复杂情绪。",
    summaryLead: "你会认真对待关系中的细枝末节，也很擅长在音乐里整理自我感受。",
    recommendations: [
      { song: "All Too Well", note: "细节感、记忆力和情绪推进都很符合你的偏好。" },
      { song: "Maroon", note: "适合你喜欢复杂、晕染式情绪的部分。" },
      { song: "The Prophecy", note: "如果你会认真追问命运与关系，这首很适合你。" },
      { song: "loml", note: "你对情感浓度和表达诚实度的要求会喜欢它。" },
      { song: "You're On Your Own, Kid", note: "帮你把脆弱感和成长感重新拼在一起。" },
    ],
    concertTitle: "情绪桥段的第一排见证者",
    concertBase: "你会特别珍惜桥段、惊喜曲和那些能把全场情绪慢慢拉高的片刻，适合留出一点自己的沉浸时间。",
    concertTags: ["桥段党", "适合惊喜曲时刻", "情绪共鸣强"],
  },
  neon: {
    title: "霓虹主角派",
    subtitle: "你的偏好更像城市流行时期，轻盈、机敏、带镜头感。",
    summaryLead: "你擅长把情绪转成行动和亮度，喜欢既上口又自带画面的音乐表达。",
    recommendations: [
      { song: "Style", note: "你的主角感和节奏感会跟这首很合拍。" },
      { song: "Cruel Summer", note: "高能、失控感和爽快度都很对味。" },
      { song: "Blank Space", note: "你对戏剧性和聪明表达的接受度很高。" },
      { song: "New Romantics", note: "很适合你把经历活成高光片段的倾向。" },
      { song: "Bejeweled", note: "当你需要找回自我亮度时，它会很有效。" },
    ],
    concertTitle: "高能主角位的氛围制造机",
    concertBase: "你很适合穿得有一点仪式感，再把自己放进热闹和灯光里。前区、下层看台和朋友局都会让你更有参与感。",
    concertTags: ["适合前区氛围", "出片率高", "适合和朋友一起尖叫"],
  },
  midnight: {
    title: "午夜掌控派",
    subtitle: "你对边界、气场和夜色独白尤其敏锐，偏爱锋利又克制的作品。",
    summaryLead: "你不是单纯追求热闹，而是更看重控制感、层次和那种越听越上头的深夜余味。",
    recommendations: [
      { song: "...Ready For It?", note: "如果你喜欢先让气场到场，这首会很对。" },
      { song: "Delicate", note: "既有防备也有柔软，和你的边界感很贴近。" },
      { song: "Lavender Haze", note: "很适合你对氛围和掌控节奏的偏好。" },
      { song: "Anti-Hero", note: "你能接住它的自嘲和深夜诚实感。" },
      { song: "Vigilante Shit", note: "当你需要找回锋利边界时尤其有效。" },
    ],
    concertTitle: "夜场气压的节奏策士",
    concertBase: "你适合提前规划路线、服装和视角，选一个既能看清舞美又保留自己节奏的位置，沉浸度会非常高。",
    concertTags: ["灯光舞美党", "节奏控", "边界感强也能玩得很投入"],
  },
  willow: {
    title: "木屋诗意派",
    subtitle: "你更偏爱独立民谣时期的留白、故事层次和慢热情绪。",
    summaryLead: "你会被氛围、词意、叙事视角和关系中的细小纹理深深吸引。",
    recommendations: [
      { song: "cardigan", note: "它的回忆感和留白感会很适合你。" },
      { song: "august", note: "你能接住它那种带风的、转瞬即逝的情绪。" },
      { song: "champagne problems", note: "叙事层次和情绪克制都很符合你的口味。" },
      { song: "ivy", note: "复杂、诗性、又有一点危险的情绪张力很适合你。" },
      { song: "cowboy like me", note: "你会欣赏它那种若即若离的成熟感。" },
    ],
    concertTitle: "惊喜曲时段的沉浸观察者",
    concertBase: "你会更享受能看清整体舞台、又保留安静感的位置。比起一直输出，你更适合在惊喜曲和叙事型表演里慢慢被击中。",
    concertTags: ["适合下层看台", "惊喜曲幸福感高", "沉浸式体验更强"],
  },
};

const questions = [
  {
    theme: "通勤 BGM",
    focusTitle: "你的第一反应风格",
    focusCopy: "这题更看你会被哪一种开场情绪先吸住。",
    title: "如果今天通勤只能循环一首，你最想要哪种开场？",
    hint: "别按“应该喜欢什么”来答，选你现在最想点开的那首。",
    options: [
      {
        song: "Love Story",
        caption: "金色心动，一秒进入浪漫电影。",
        style: { golden: 3, neon: 1 },
        trait: { warmth: 2, energy: 1, sensitivity: 1 },
      },
      {
        song: "Style",
        caption: "霓虹夜风，自带镜头推近感。",
        style: { neon: 3, midnight: 1 },
        trait: { energy: 2, autonomy: 1, openness: 1 },
      },
      {
        song: "cardigan",
        caption: "安静入戏，情绪像胶片慢慢展开。",
        style: { willow: 3, scarlet: 1 },
        trait: { openness: 2, sensitivity: 2 },
      },
      {
        song: "Anti-Hero",
        caption: "半夜诚实局，越听越想剖析自己。",
        style: { midnight: 2, scarlet: 1 },
        trait: { sensitivity: 2, openness: 1, autonomy: 1 },
      },
    ],
  },
  {
    theme: "日记视角",
    focusTitle: "你喜欢怎样讲自己的故事",
    focusCopy: "同样是自我表达，有人偏成长小说，有人偏情绪剖面。",
    title: "写日记时，你更像哪一种叙事者？",
    hint: "选最符合你表达方式的一种，不一定是你最常听的歌。",
    options: [
      {
        song: "Mine",
        caption: "把成长写成有转折的青春故事。",
        style: { golden: 2, scarlet: 1 },
        trait: { warmth: 1, openness: 1, autonomy: 1, sensitivity: 1 },
      },
      {
        song: "All Too Well",
        caption: "细节记忆型选手，连空气都能写下来。",
        style: { scarlet: 3, willow: 1 },
        trait: { sensitivity: 2, openness: 1, warmth: 1 },
      },
      {
        song: "the last great american dynasty",
        caption: "会从旁观视角里写出传奇感。",
        style: { willow: 2, neon: 1 },
        trait: { openness: 2, autonomy: 1, sensitivity: 1 },
      },
      {
        song: "Mastermind",
        caption: "先想清楚情节，再决定怎么落笔。",
        style: { midnight: 3, neon: 1 },
        trait: { autonomy: 2, openness: 1, sensitivity: 1 },
      },
    ],
  },
  {
    theme: "感情拉扯",
    focusTitle: "你如何靠近重要关系",
    focusCopy: "这题会更明显地反映你的安全感和表达节奏。",
    title: "遇到感情拉扯时，你的 BGM 更接近哪一首？",
    hint: "选你最容易在现实里代入的一种状态。",
    options: [
      {
        song: "You Belong With Me",
        caption: "直接又真诚，先把话说出来再说。",
        style: { golden: 3 },
        trait: { warmth: 2, energy: 1, autonomy: 1 },
      },
      {
        song: "Cruel Summer",
        caption: "明知道会失控，也还是想先冲一把。",
        style: { neon: 2, scarlet: 1 },
        trait: { energy: 2, sensitivity: 1, autonomy: 1 },
      },
      {
        song: "Delicate",
        caption: "会靠近，但也会先确认安全感。",
        style: { midnight: 2, willow: 1 },
        trait: { sensitivity: 2, warmth: 1, autonomy: 1 },
      },
      {
        song: "The Archer",
        caption: "一边勇敢，一边会不停自我审视。",
        style: { scarlet: 2, midnight: 1 },
        trait: { sensitivity: 2, openness: 1, autonomy: 1 },
      },
    ],
  },
  {
    theme: "周末画面",
    focusTitle: "你的恢复能量方式",
    focusCopy: "你如何休息，往往和你喜欢怎样听歌很像。",
    title: "你最理想的周末场景是什么样？",
    hint: "不用选看起来“最有意义”的，选最能恢复电量的。",
    options: [
      {
        song: "Our Song",
        caption: "开车兜风、朋友大笑、空气很轻。",
        style: { golden: 2, neon: 1 },
        trait: { energy: 2, warmth: 1, openness: 1 },
      },
      {
        song: "Blank Space",
        caption: "打扮出门，去城市里找新故事。",
        style: { neon: 3, midnight: 1 },
        trait: { energy: 1, autonomy: 2, openness: 1 },
      },
      {
        song: "august",
        caption: "傍晚散步，把风和回忆都收进脑海。",
        style: { willow: 3, scarlet: 1 },
        trait: { sensitivity: 2, openness: 1, warmth: 1 },
      },
      {
        song: "Maroon",
        caption: "给自己一整段深夜，慢慢整理情绪。",
        style: { scarlet: 2, midnight: 1 },
        trait: { sensitivity: 2, autonomy: 1, openness: 1 },
      },
    ],
  },
  {
    theme: "边界模式",
    focusTitle: "你怎样保护自己",
    focusCopy: "Taylor 的不同作品里，藏着很不一样的自我保护逻辑。",
    title: "如果要选一种 Taylor 式“自我保护”方式，你更像哪一类？",
    hint: "选你最常出现的应对方式，而不是理想状态。",
    options: [
      {
        song: "Mean",
        caption: "用幽默和成长把刺慢慢化掉。",
        style: { golden: 2, neon: 1 },
        trait: { autonomy: 1, warmth: 1, energy: 1, openness: 1 },
      },
      {
        song: "Look What You Made Me Do",
        caption: "重写叙事权，先把主导感拿回来。",
        style: { midnight: 3 },
        trait: { autonomy: 2, energy: 1, openness: 1 },
      },
      {
        song: "tolerate it",
        caption: "先安静观察，再决定要不要离开。",
        style: { willow: 2, scarlet: 1 },
        trait: { sensitivity: 2, autonomy: 1, warmth: 1 },
      },
      {
        song: "You're Losing Me",
        caption: "真诚说出耗竭感，不再硬撑。",
        style: { scarlet: 3 },
        trait: { sensitivity: 2, autonomy: 1, openness: 1 },
      },
    ],
  },
  {
    theme: "舞台高潮",
    focusTitle: "什么最能让你起鸡皮疙瘩",
    focusCopy: "你对现场的偏好，和你的外向驱动力、情绪节奏高度相关。",
    title: "哪一种舞台时刻最容易让你起鸡皮疙瘩？",
    hint: "选你最想立刻站起来尖叫或沉默的那个瞬间。",
    options: [
      {
        song: "Fearless",
        caption: "全场一起挥手大合唱，光一下就热起来。",
        style: { golden: 3, neon: 1 },
        trait: { energy: 2, warmth: 1, openness: 1 },
      },
      {
        song: "Bejeweled",
        caption: "闪到发光，漂亮出场，镜头感满格。",
        style: { neon: 2, midnight: 1 },
        trait: { energy: 1, autonomy: 2, openness: 1 },
      },
      {
        song: "champagne problems",
        caption: "安静听完一个完整故事，心一点点塌下去。",
        style: { willow: 2, scarlet: 1 },
        trait: { sensitivity: 2, openness: 1, warmth: 1 },
      },
      {
        song: "Midnight Rain",
        caption: "灯光一暗，情绪瞬间切换成深夜模式。",
        style: { midnight: 3 },
        trait: { openness: 1, sensitivity: 1, autonomy: 1, energy: 1 },
      },
    ],
  },
  {
    theme: "安慰方式",
    focusTitle: "你如何接住别人的情绪",
    focusCopy: "你安慰朋友的方式，常常就是你最习惯的情感表达方式。",
    title: "朋友来找你求安慰时，你更像哪一首？",
    hint: "选你最自然会给出的反应，不一定是最会说的话。",
    options: [
      {
        song: "Long Live",
        caption: "先提醒对方：你们一起赢过很多次。",
        style: { golden: 2, neon: 1 },
        trait: { warmth: 2, openness: 1, energy: 1 },
      },
      {
        song: "Daylight",
        caption: "帮对方把注意力慢慢拉回希望和柔软。",
        style: { neon: 2, golden: 1 },
        trait: { warmth: 2, openness: 1, sensitivity: 1 },
      },
      {
        song: "evermore",
        caption: "陪对方把低潮坐完，不急着打断。",
        style: { willow: 3 },
        trait: { sensitivity: 2, warmth: 1, openness: 1 },
      },
      {
        song: "You're On Your Own, Kid",
        caption: "温柔提醒：你其实有自己的力量。",
        style: { scarlet: 2, midnight: 1 },
        trait: { autonomy: 2, sensitivity: 1, warmth: 1 },
      },
    ],
  },
  {
    theme: "人生片尾曲",
    focusTitle: "你如何看待成长的后劲",
    focusCopy: "这一题会看你偏爱庆祝、反思，还是保留一点暧昧余韵。",
    title: "如果要给自己做一张“人生片尾曲歌单”，第一首你会放什么？",
    hint: "选最像你最近几年心境总结的一首。",
    options: [
      {
        song: "Enchanted",
        caption: "把重要时刻珍藏成星光一样的回忆。",
        style: { golden: 2, scarlet: 1 },
        trait: { sensitivity: 1, warmth: 1, openness: 1, energy: 1 },
      },
      {
        song: "New Romantics",
        caption: "把跌跌撞撞也活成高光片段。",
        style: { neon: 3 },
        trait: { energy: 2, autonomy: 1, openness: 1 },
      },
      {
        song: "cowboy like me",
        caption: "欣赏复杂和暧昧里的微妙张力。",
        style: { willow: 2, midnight: 1 },
        trait: { openness: 2, sensitivity: 1, autonomy: 1 },
      },
      {
        song: "The Prophecy",
        caption: "会认真追问命运、关系与自我。",
        style: { scarlet: 3, willow: 1 },
        trait: { sensitivity: 2, openness: 1, autonomy: 1 },
      },
    ],
  },
  {
    theme: "新鲜感",
    focusTitle: "你如何进入新的环境",
    focusCopy: "面对新城市或新关系时，你的第一步其实很有风格。",
    title: "面对全新的城市或关系，你的反应更接近哪一首？",
    hint: "选你的第一反应，不是你想成为的样子。",
    options: [
      {
        song: "Welcome To New York",
        caption: "先冲进去感受空气，新鲜感会推着我走。",
        style: { neon: 3 },
        trait: { energy: 2, openness: 1, autonomy: 1 },
      },
      {
        song: "Tim McGraw",
        caption: "先抓住一个熟悉线索，让自己慢慢安心。",
        style: { golden: 3 },
        trait: { warmth: 1, sensitivity: 1, openness: 1, autonomy: 1 },
      },
      {
        song: "mirrorball",
        caption: "会先观察气氛，再调整自己的节奏。",
        style: { willow: 2, scarlet: 1 },
        trait: { sensitivity: 2, openness: 1, warmth: 1 },
      },
      {
        song: "Vigilante Shit",
        caption: "边界先立好，安全感比速度重要。",
        style: { midnight: 3 },
        trait: { autonomy: 2, sensitivity: 1, energy: 1 },
      },
    ],
  },
  {
    theme: "写作镜头",
    focusTitle: "你最偏爱的歌词视角",
    focusCopy: "Taylor 的强项之一就是视角切换，这题会看你更爱哪一种镜头语言。",
    title: "你最喜欢 Taylor 哪种写作视角？",
    hint: "想想什么样的视角最容易让你“啊，这就是我”。",
    options: [
      {
        song: "Speak Now",
        caption: "当下就行动的第一人称，先做再解释。",
        style: { golden: 2, neon: 1 },
        trait: { autonomy: 1, energy: 1, openness: 1, warmth: 1 },
      },
      {
        song: "Blank Space",
        caption: "带一点反讽和戏剧感的角色扮演。",
        style: { neon: 2, midnight: 1 },
        trait: { openness: 1, autonomy: 1, energy: 1, sensitivity: 1 },
      },
      {
        song: "betty",
        caption: "愿意回到关系现场，认真理解每个人。",
        style: { willow: 3 },
        trait: { warmth: 1, sensitivity: 2, openness: 1 },
      },
      {
        song: "loml",
        caption: "不逃避复杂情绪，写得诚实又赤裸。",
        style: { scarlet: 3 },
        trait: { sensitivity: 2, openness: 1, autonomy: 1 },
      },
    ],
  },
  {
    theme: "主角感",
    focusTitle: "你如何让自己亮起来",
    focusCopy: "你最舒服的“主角感”，可能是热烈，也可能是安静但强烈。",
    title: "如果今天需要一点“主角感”，你会按下哪一首？",
    hint: "选最能让你立刻切换状态的一首。",
    options: [
      {
        song: "Sparks Fly",
        caption: "让我迅速亮起来，心跳直接拉满。",
        style: { golden: 2, neon: 1 },
        trait: { energy: 2, warmth: 1, openness: 1 },
      },
      {
        song: "Style",
        caption: "冷静、漂亮、知道镜头会落在哪里。",
        style: { neon: 3 },
        trait: { autonomy: 1, energy: 1, openness: 1, sensitivity: 1 },
      },
      {
        song: "...Ready For It?",
        caption: "气场先到，人随后到场。",
        style: { midnight: 3, neon: 1 },
        trait: { autonomy: 2, energy: 1, openness: 1 },
      },
      {
        song: "willow",
        caption: "看起来轻柔，其实一直有自己的引力。",
        style: { willow: 3 },
        trait: { autonomy: 1, sensitivity: 1, openness: 1, warmth: 1 },
      },
    ],
  },
  {
    theme: "回看成长",
    focusTitle: "你如何理解过去几年",
    focusCopy: "这题会帮助结果页判断你更偏成长、疗愈还是边界感叙事。",
    title: "当你回看自己过去几年时，最像哪一种 Taylor 氛围？",
    hint: "选最像“现在的你回头看自己”那种心情。",
    options: [
      {
        song: "Fifteen",
        caption: "我在成长，也越来越知道自己在乎什么。",
        style: { golden: 3 },
        trait: { openness: 1, warmth: 1, sensitivity: 1, autonomy: 1 },
      },
      {
        song: "Lover",
        caption: "我想活得更柔软，也更坦荡一点。",
        style: { neon: 2, golden: 1 },
        trait: { warmth: 2, openness: 1, sensitivity: 1 },
      },
      {
        song: "My Tears Ricochet",
        caption: "我会从失去里学会边界和尊严。",
        style: { scarlet: 2, midnight: 1 },
        trait: { sensitivity: 2, autonomy: 1, openness: 1 },
      },
      {
        song: "Sweet Nothing",
        caption: "我开始珍惜安静、真实、不费力的连接。",
        style: { willow: 2, scarlet: 1 },
        trait: { warmth: 2, sensitivity: 1, openness: 1 },
      },
    ],
  },
];

const STORAGE_KEY = "era-echo-last-result";
const QUESTION_COUNT = questions.length;

const state = {
  currentIndex: 0,
  answers: Array(QUESTION_COUNT).fill(null),
  currentResult: null,
  toastTimer: null,
  autoAdvanceTimer: null,
};

const elements = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheElements();
  bindEvents();
  renderSavedPreview(getSavedResult());
}

function cacheElements() {
  const ids = [
    "headerSavedBtn",
    "startQuizBtn",
    "loadSavedBtn",
    "savedPanelBtn",
    "introScreen",
    "quizScreen",
    "resultScreen",
    "progressLabel",
    "progressFill",
    "questionCard",
    "questionNumber",
    "questionTheme",
    "questionTitle",
    "questionHint",
    "optionsContainer",
    "prevQuestionBtn",
    "nextQuestionBtn",
    "liveEraTitle",
    "liveEraCopy",
    "progressDots",
    "resultBadge",
    "resultTitle",
    "resultSubtitle",
    "matchScore",
    "resultSummary",
    "styleSpectrum",
    "traitBars",
    "traitHighlights",
    "songRecommendations",
    "concertTitle",
    "concertSuggestion",
    "concertTags",
    "psychologyNote",
    "savedTimestamp",
    "savedResultPanel",
    "savedResultTitle",
    "savedResultCopy",
    "shareBtn",
    "copyBtn",
    "restartBtn",
    "statusToast",
  ];

  ids.forEach((id) => {
    elements[id] = document.getElementById(id);
  });
}

function bindEvents() {
  elements.startQuizBtn.addEventListener("click", startQuiz);
  elements.prevQuestionBtn.addEventListener("click", handlePrevQuestion);
  elements.nextQuestionBtn.addEventListener("click", handleNextQuestion);
  elements.loadSavedBtn.addEventListener("click", loadSavedResultIntoView);
  elements.headerSavedBtn.addEventListener("click", loadSavedResultIntoView);
  elements.savedPanelBtn.addEventListener("click", loadSavedResultIntoView);
  elements.shareBtn.addEventListener("click", handleShare);
  elements.copyBtn.addEventListener("click", handleCopy);
  elements.restartBtn.addEventListener("click", startQuiz);
}

function startQuiz() {
  clearTimeout(state.autoAdvanceTimer);
  state.answers = Array(QUESTION_COUNT).fill(null);
  state.currentIndex = 0;
  state.currentResult = null;
  switchScreen("quiz");
  renderQuestion(0, "next");
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

function switchScreen(target) {
  const screenMap = {
    intro: elements.introScreen,
    quiz: elements.quizScreen,
    result: elements.resultScreen,
  };

  Object.entries(screenMap).forEach(([key, screen]) => {
    screen.classList.toggle("is-active", key === target);
  });
}

function renderQuestion(index, direction) {
  const question = questions[index];
  const selectedIndex = state.answers[index];
  const completion = Math.round(((index + 1) / QUESTION_COUNT) * 100);

  state.currentIndex = index;
  elements.progressLabel.textContent = `第 ${index + 1} 题 / 共 ${QUESTION_COUNT} 题`;
  elements.progressFill.style.width = `${completion}%`;
  elements.questionNumber.textContent = `Q${index + 1}`;
  elements.questionTheme.textContent = question.theme;
  elements.questionTitle.textContent = question.title;
  elements.questionHint.textContent = question.hint;
  elements.liveEraTitle.textContent = question.focusTitle;
  elements.liveEraCopy.textContent = question.focusCopy;

  elements.questionCard.classList.remove("is-enter-next", "is-enter-prev");
  if (direction === "next") {
    elements.questionCard.classList.add("is-enter-next");
  } else if (direction === "prev") {
    elements.questionCard.classList.add("is-enter-prev");
  }

  elements.optionsContainer.innerHTML = "";
  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    if (selectedIndex === optionIndex) {
      button.classList.add("is-selected");
    }

    button.innerHTML = `
      <span>
        <span class="option-song">${option.song}</span>
        <span class="option-caption">${option.caption}</span>
      </span>
      <i class="fa-solid fa-chevron-right option-arrow" aria-hidden="true"></i>
    `;

    button.addEventListener("click", () => selectOption(optionIndex));
    elements.optionsContainer.appendChild(button);
  });

  elements.prevQuestionBtn.disabled = index === 0;
  elements.nextQuestionBtn.disabled = selectedIndex === null;
  elements.nextQuestionBtn.innerHTML = index === QUESTION_COUNT - 1
    ? '<i class="fa-solid fa-sparkles"></i> 查看结果'
    : '下一题 <i class="fa-solid fa-arrow-right"></i>';

  renderProgressDots();
}

function renderProgressDots() {
  elements.progressDots.innerHTML = "";
  questions.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "progress-dot";
    dot.textContent = index + 1;

    if (index === state.currentIndex) {
      dot.classList.add("is-current");
    } else if (state.answers[index] !== null) {
      dot.classList.add("is-done");
    }

    elements.progressDots.appendChild(dot);
  });
}

function selectOption(optionIndex) {
  clearTimeout(state.autoAdvanceTimer);
  state.answers[state.currentIndex] = optionIndex;
  renderQuestion(state.currentIndex, "stay");

  const delay = prefersReducedMotion() ? 0 : 240;
  state.autoAdvanceTimer = window.setTimeout(() => {
    if (state.currentIndex === QUESTION_COUNT - 1) {
      finishQuiz();
    } else {
      moveToQuestion(state.currentIndex + 1, "next");
    }
  }, delay);
}

function handlePrevQuestion() {
  clearTimeout(state.autoAdvanceTimer);
  if (state.currentIndex > 0) {
    moveToQuestion(state.currentIndex - 1, "prev");
  }
}

function handleNextQuestion() {
  clearTimeout(state.autoAdvanceTimer);
  if (state.answers[state.currentIndex] === null) {
    showToast("先选一个最像你的答案，再继续往下走。");
    return;
  }

  if (state.currentIndex === QUESTION_COUNT - 1) {
    finishQuiz();
    return;
  }

  moveToQuestion(state.currentIndex + 1, "next");
}

function moveToQuestion(index, direction) {
  renderQuestion(index, direction);
}

function finishQuiz() {
  if (state.answers.some((answer) => answer === null)) {
    showToast("还有题目没有完成，先把每一题都选完吧。");
    return;
  }

  const result = calculateResult();
  state.currentResult = result;
  saveResult(result);
  renderSavedPreview(result);
  renderResult(result);
  switchScreen("result");
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

function calculateResult() {
  const styleScores = Object.keys(styleDefinitions).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

  const traitScores = Object.keys(traitDefinitions).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});

  questions.forEach((question, questionIndex) => {
    const option = question.options[state.answers[questionIndex]];
    Object.entries(option.style).forEach(([key, value]) => {
      styleScores[key] += value;
    });
    Object.entries(option.trait).forEach(([key, value]) => {
      traitScores[key] += value;
    });
  });

  const sortedStyles = Object.entries(styleScores).sort((a, b) => b[1] - a[1]);
  const sortedTraits = Object.entries(traitScores).sort((a, b) => b[1] - a[1]);
  const primaryKey = sortedStyles[0][0];
  const secondaryKey = sortedStyles[1][0];
  const profile = profileDefinitions[primaryKey];
  const totalStyleScore = Object.values(styleScores).reduce((sum, value) => sum + value, 0);
  const consistency = styleScores[primaryKey] / totalStyleScore;
  const matchScore = clamp(Math.round(60 + consistency * 55), 68, 96);
  const traitPercentages = normalizeTraits(traitScores);
  const stylePercentages = normalizeStyles(styleScores, totalStyleScore);
  const topTraits = sortedTraits.slice(0, 3).map(([key]) => key);
  const recommendations = buildRecommendations(primaryKey, secondaryKey);
  const concert = buildConcertAdvice(primaryKey, traitPercentages);
  const summary = buildSummary(primaryKey, secondaryKey, topTraits, matchScore);
  const highlights = buildHighlights(topTraits, sortedTraits[sortedTraits.length - 1][0], traitPercentages);
  const psychologyNote = buildPsychologyNote(primaryKey, secondaryKey, traitPercentages);
  const timestamp = new Date().toISOString();
  const shareText = buildShareText(profile.title, matchScore, primaryKey, secondaryKey);

  return {
    primaryKey,
    secondaryKey,
    profile,
    matchScore,
    styleScores,
    stylePercentages,
    traitScores,
    traitPercentages,
    summary,
    highlights,
    recommendations,
    concert,
    psychologyNote,
    shareText,
    timestamp,
  };
}

function normalizeTraits(traitScores) {
  const maxima = getTraitMaxima();
  return Object.entries(traitScores).reduce((acc, [key, value]) => {
    acc[key] = Math.round((value / maxima[key]) * 100);
    return acc;
  }, {});
}

function normalizeStyles(styleScores, totalStyleScore) {
  return Object.entries(styleScores).reduce((acc, [key, value]) => {
    acc[key] = Math.round((value / totalStyleScore) * 100);
    return acc;
  }, {});
}

function getTraitMaxima() {
  return questions.reduce((acc, question) => {
    Object.keys(traitDefinitions).forEach((traitKey) => {
      const maxValue = Math.max(
        ...question.options.map((option) => option.trait[traitKey] || 0)
      );
      acc[traitKey] = (acc[traitKey] || 0) + maxValue;
    });
    return acc;
  }, {});
}

function buildRecommendations(primaryKey, secondaryKey) {
  const picks = [];
  const uniqueSongs = new Set();
  const pool = [
    ...profileDefinitions[primaryKey].recommendations,
    ...profileDefinitions[secondaryKey].recommendations,
  ];

  pool.forEach((entry) => {
    if (!uniqueSongs.has(entry.song) && picks.length < 5) {
      uniqueSongs.add(entry.song);
      picks.push(`${entry.song}：${entry.note}`);
    }
  });

  return picks;
}

function buildSummary(primaryKey, secondaryKey, topTraits, matchScore) {
  const primaryStyle = styleDefinitions[primaryKey];
  const secondaryStyle = styleDefinitions[secondaryKey];
  const traitNames = topTraits.map((key) => traitDefinitions[key].label).join("、");

  return `你和「${profileDefinitions[primaryKey].title}」的匹配度是 ${matchScore}%。
  ${profileDefinitions[primaryKey].summaryLead} 你的答案明显偏向 ${primaryStyle.albums} 这一侧，同时也保留了一点 ${secondaryStyle.albums} 的质感。
  在 ${traitNames} 上，你的分值更突出，说明你会用音乐来确认关系、整理情绪，或者给自己补一点继续往前走的能量。`;
}

function buildHighlights(topTraits, lowestTrait, traitPercentages) {
  const items = topTraits.map((traitKey) => {
    return `${traitDefinitions[traitKey].label} ${traitPercentages[traitKey]} 分：${traitDefinitions[traitKey].narrative}`;
  });

  const softNotes = {
    openness: "你不是必须时时追求新鲜，熟悉感对你来说同样有安定作用。",
    warmth: "你对关系的筛选更谨慎，一旦投入，反而会更真诚和稳定。",
    energy: "你未必喜欢持续高能输出，安静沉浸式体验反而更能补足能量。",
    autonomy: "你不会过度强调掌控，很多时候更愿意把空间留给彼此自然流动。",
    sensitivity: "你不是迟钝，而是更擅长在合适的时候再慢慢消化情绪。",
  };

  items.push(`补充观察：${softNotes[lowestTrait]}`);
  return items;
}

function buildConcertAdvice(primaryKey, traitPercentages) {
  const base = profileDefinitions[primaryKey];
  const tags = [...base.concertTags];

  if (traitPercentages.energy >= 72) {
    tags.push("高能段落更容易上头");
  } else {
    tags.push("保留一点自己的沉浸空间");
  }

  if (traitPercentages.sensitivity >= 75 || traitPercentages.openness >= 75) {
    tags.push("重点关注惊喜曲和叙事段落");
  }

  if (traitPercentages.warmth >= 72) {
    tags.push("很适合和熟人一起去");
  }

  return {
    title: base.concertTitle,
    copy: base.concertBase,
    tags: Array.from(new Set(tags)).slice(0, 4),
  };
}

function buildPsychologyNote(primaryKey, secondaryKey, traitPercentages) {
  const openness = traitPercentages.openness;
  const energy = traitPercentages.energy;
  const warmth = traitPercentages.warmth;
  const sensitivity = traitPercentages.sensitivity;
  const autonomy = traitPercentages.autonomy;

  return `这份结果是根据你在开放感、关系温度、舞台能量、自主表达和情绪敏锐度上的选择倾向做出的轻量分析。
  其中 ${styleDefinitions[primaryKey].label} 是你的主风格，${styleDefinitions[secondaryKey].label} 是次强风格。
  你当前的维度画像大致是：开放感 ${openness}、关系温度 ${warmth}、舞台能量 ${energy}、自主表达 ${autonomy}、情绪敏锐度 ${sensitivity}。
  它参考了大五人格中与开放性、外向驱动力、宜人性及情绪加工有关的思路，但本质上仍是一份娱乐向、适合自我观察的音乐偏好测验。`;
}

function buildShareText(title, matchScore, primaryKey, secondaryKey) {
  return `我在 Era Echo 里测出了「${title}」，和 Taylor 风格匹配度 ${matchScore}%。
主风格是 ${styleDefinitions[primaryKey].label}，还带一点 ${styleDefinitions[secondaryKey].label} 的底色。你也来测测看：${window.location.href}`;
}

function renderResult(result) {
  elements.resultBadge.textContent = `${styleDefinitions[result.primaryKey].label} 匹配完成`;
  elements.resultTitle.textContent = result.profile.title;
  elements.resultSubtitle.textContent = `${result.profile.subtitle} · 次强风格：${styleDefinitions[result.secondaryKey].label}`;
  elements.resultSummary.textContent = result.summary.replace(/\s+/g, " ").trim();
  elements.concertTitle.textContent = result.concert.title;
  elements.concertSuggestion.textContent = result.concert.copy;
  elements.psychologyNote.textContent = result.psychologyNote.replace(/\s+/g, " ").trim();
  elements.savedTimestamp.textContent = `已保存到本地浏览器：${formatDate(result.timestamp)}`;

  renderMetrics(elements.styleSpectrum, result.stylePercentages, styleDefinitions, "style");
  renderMetrics(elements.traitBars, result.traitPercentages, traitDefinitions, "trait");
  renderList(elements.traitHighlights, result.highlights);
  renderList(elements.songRecommendations, result.recommendations);
  renderTags(result.concert.tags);
  animateMatchScore(result.matchScore);
}

function renderMetrics(container, values, definitions, type) {
  container.innerHTML = "";

  Object.entries(values)
    .sort((a, b) => b[1] - a[1])
    .forEach(([key, value]) => {
      const definition = definitions[key];
      const item = document.createElement("article");
      item.className = "metric-item";
      item.innerHTML = `
        <div class="metric-head">
          <strong>${definition.label}</strong>
          <span>${value}%</span>
        </div>
        <div class="metric-track">
          <div class="metric-fill" data-width="${value}" style="background: ${definition.fill};"></div>
        </div>
        <p class="metric-subcopy mb-0">${type === "style" ? definition.albums : definition.description}</p>
      `;
      container.appendChild(item);
    });

  requestAnimationFrame(() => {
    container.querySelectorAll(".metric-fill").forEach((fill) => {
      fill.style.width = `${fill.dataset.width}%`;
    });
  });
}

function renderList(container, items) {
  container.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderTags(tags) {
  elements.concertTags.innerHTML = "";
  tags.forEach((tagText) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tagText;
    elements.concertTags.appendChild(tag);
  });
}

function animateMatchScore(targetScore) {
  const duration = prefersReducedMotion() ? 0 : 900;
  const startTime = performance.now();

  function frame(currentTime) {
    if (!duration) {
      elements.matchScore.textContent = `${targetScore}%`;
      return;
    }

    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    elements.matchScore.textContent = `${Math.round(targetScore * eased)}%`;
    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function saveResult(result) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, ...result }));
  } catch (error) {
    showToast("结果生成成功，但浏览器没有成功写入本地存储。");
  }
}

function getSavedResult() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    if (parsed.version !== 1) {
      return null;
    }
    return parsed;
  } catch (error) {
    return null;
  }
}

function renderSavedPreview(saved) {
  const hasSaved = Boolean(saved);
  elements.loadSavedBtn.hidden = !hasSaved;
  elements.headerSavedBtn.hidden = !hasSaved;
  elements.savedResultPanel.hidden = !hasSaved;

  if (!hasSaved) {
    return;
  }

  elements.savedResultTitle.textContent = saved.profile.title;
  elements.savedResultCopy.textContent = `上次结果生成于 ${formatDate(saved.timestamp)}。你的主风格是 ${styleDefinitions[saved.primaryKey].label}，匹配度 ${saved.matchScore}%。`;
}

function loadSavedResultIntoView() {
  const saved = getSavedResult();
  if (!saved) {
    showToast("本地还没有可读取的结果，先做一次测试吧。");
    return;
  }

  state.currentResult = saved;
  renderResult(saved);
  switchScreen("result");
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

async function handleShare() {
  const result = state.currentResult || getSavedResult();
  if (!result) {
    showToast("先完成测试，才会生成可分享的结果。");
    return;
  }

  try {
    if (navigator.share) {
      await navigator.share({
        title: `Era Echo - ${result.profile.title}`,
        text: result.shareText,
        url: window.location.href,
      });
      showToast("结果分享面板已打开。");
      return;
    }

    await copyToClipboard(result.shareText);
    showToast("当前浏览器不支持原生分享，结果文案已复制。");
  } catch (error) {
    if (error.name === "AbortError") {
      return;
    }
    showToast("分享失败了，建议直接使用复制文案。");
  }
}

async function handleCopy() {
  const result = state.currentResult || getSavedResult();
  if (!result) {
    showToast("先完成测试，才会生成可复制的结果文案。");
    return;
  }

  try {
    await copyToClipboard(result.shareText);
    showToast("结果文案已复制，可以直接发给朋友了。");
  } catch (error) {
    showToast("复制失败了，建议在 HTTPS 环境下再试一次。");
  }
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

function showToast(message) {
  clearTimeout(state.toastTimer);
  elements.statusToast.textContent = message;
  elements.statusToast.classList.add("is-visible");
  state.toastTimer = window.setTimeout(() => {
    elements.statusToast.classList.remove("is-visible");
  }, 2200);
}

function formatDate(isoString) {
  return new Intl.DateTimeFormat("zh-CN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(isoString));
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
