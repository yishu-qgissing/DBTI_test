const axes = ["欲望锚点", "规则姿态", "关系模式", "压力处理"];

const questions = [
  { type:"金钱", q:"你银行卡里只剩三百块。一个关系复杂的人突然转给你五千，没有备注，也没说什么时候还。你会：", a:[
    ["收下。钱先救命，关系以后再他妈慢慢解释。", [4.7,4.4,1.8,1.8], {M:1}],
    ["问清楚这笔钱意味着什么，再决定要不要动。", [3.3,3.4,3.5,3.7], {}],
    ["退回去。欠钱不一定要命，欠一个说不清的人情才要命。", [2.0,1.9,4.8,3.5], {}]
  ]},
  { type:"观点", q:"有人说：“绝大多数工作都不值得热爱。工资就是社会为你的忍耐支付的赔偿金。”你的第一反应是：", a:[
    ["话说得挺漂亮，明天不还得打卡？", [4.7,4.3,3.3,3.0], {}],
    ["基本同意，但看清这一点至少能让我少骗自己。", [2.2,3.8,3.4,4.5], {X:1}],
    ["不对。把忍耐说成必然，只是在替懦弱找理论。", [1.4,1.2,3.8,1.8], {H:1}]
  ]},
  { type:"意象", q:"凌晨两点，你面对三扇门。你推开哪一扇？", a:[
    ["门后有人喝酒、唱歌，说可以让你免费住一晚。", [1.7,2.3,1.2,1.8], {}],
    ["门后是一份枯燥但稳定的工作，明早八点入职。", [5.0,4.3,3.6,3.6], {}],
    ["门后没有人，只有一把锁和一张写着你名字的床。", [2.8,3.2,4.9,4.5], {V:1}]
  ]},
  { type:"关系", q:"最好的朋友替你办砸了一件大事，还一直瞒着你。他说：“我怕你失望。”你会：", a:[
    ["先让他说完。事情已经坏了，我得知道他到底蠢在哪一步。", [3.7,3.7,2.5,3.7], {}],
    ["我替他扛过事，也给过他不止一次机会。事情办砸可以，骗我不行。今天必须把话说清楚，谁他妈也别先走。", [4.2,1.2,1.2,1.2], {}],
    ["帮他把残局收拾完，但这笔账我不会忘。", [4.3,4.0,1.0,2.6], {M:2}]
  ]},
  { type:"观点", q:"一个一直没什么行动的人说：“我不想为了钱，变成自己讨厌的那种人。”这更接近：", a:[
    ["我愿意相信他，但不是因为他说得对。人要是连这点自欺都没有，很多夜晚根本过不去。至于明天醒来怎么赎罪，是另一回事。", [1.3,1.8,1.8,4.3], {H:1}],
    ["一半真话，一半给无能准备的遮羞布。", [3.0,3.3,3.8,4.1], {}],
    ["穷的时候先别急着设计灵魂，活下来再说。", [5.0,4.4,3.7,2.9], {}]
  ]},
  { type:"工作", q:"老板说公司没有上下级，入职两周后你发现所有重要决定还是他说了算。你会：", a:[
    ["先留下，把工资和能学的东西拿到手；傻逼不耽误利用。", [4.5,5.0,4.0,3.0], {}],
    ["当面问他：既然没有上下级，为什么只有你能决定？", [1.8,1.0,3.1,1.2], {}],
    ["不揭穿，也不相信。按要求工作，同时悄悄准备下一条路。", [3.8,4.5,4.5,4.5], {}]
  ]},
  { type:"关系", q:"一个人借了别人的钱给你买花。你知道他最近连房租都快交不起。你会：", a:[
    ["收下。花没有错，有些人的爱只能用错误的方式出现。", [1.8,2.8,1.0,2.2], {M:1}],
    ["把花留下，但要求他以后别再用这种方式证明什么。", [3.0,3.2,2.7,3.5], {}],
    ["让他退掉。一个人连自己都养不起时，浪漫很像碰瓷。", [5.0,4.0,4.5,3.8], {}]
  ]},
  { type:"文化", q:"“我们喜欢的音乐、电影、生活方式，全是别人的二手货。中国所有东西都是cosplay。”你更接近：", a:[
    ["是复制品又怎样？假的东西被人活久了，也会长出真的部分。", [1.8,2.2,3.0,2.0], {H:1}],
    ["说得难听，但没有对应的生活经验，表达确实容易只剩姿态。", [2.2,3.7,4.2,4.0], {}],
    ["太装了。文化本来就是互相偷，谁他妈也不是从石头里长出来的。", [3.4,2.0,3.3,1.4], {}]
  ]},
  { type:"机会", q:"今晚的饭局上有个“能给你机会的人”，但他提供机会时很少不索取别的东西。你会：", a:[
    ["去。哪怕我已经知道这顿饭不会白吃，也得先坐到桌上。底线不用提前喊给别人听，真到了那一步，我自己承担。", [4.6,4.8,1.6,4.1], {}],
    ["去，但提前给自己划一条绝不能跨过的线。", [3.6,4.0,4.0,3.6], {}],
    ["不去。需要我把自己也放上桌的机会，本质上就是收购。", [1.7,1.8,4.8,3.5], {}]
  ]},
  { type:"家庭", q:"亲人反复闯祸。这次你能替他还债，但几年的积蓄会全部消失。你会：", a:[
    ["先还。家里真的塌了，没有谁能独善其身。", [4.8,4.1,1.0,2.4], {M:2}],
    ["只解决会牵连到我的部分，剩下的让他自己承担。", [4.2,4.2,3.8,3.8], {}],
    ["不还。爱不是替另一个成年人无限续命。", [2.8,2.0,5.0,3.5], {}]
  ]},
  { type:"取舍", q:"如果必须选一种，你更能忍受：", a:[
    ["被人养着，但重要决定要看对方的脸色。", [4.5,4.7,1.0,2.2], {V:1}],
    ["做一份讨厌的工作，但下班后谁也管不着我。", [4.8,4.0,4.8,4.0], {}],
    ["什么都不稳定，但每天醒来还觉得自己可能成为别人。", [1.0,1.4,2.5,1.5], {H:1}]
  ]},
  { type:"归因", q:"你接连经历失业、被骗和关系破裂。朋友问问题到底出在哪儿，你更可能说：", a:[
    ["社会就是一张网。不是我走错了，是每条路最后都通向同一个地方。", [1.5,1.4,3.6,2.0], {H:1,X:1}],
    ["别急着分析宇宙，我肯定有几步走得像个纯傻逼。", [2.8,2.5,3.6,4.7], {}],
    ["现在解释没意义。先处理能处理的，再看是谁的错。", [4.8,4.5,4.0,3.7], {}]
  ]},
  { type:"边界", q:"一个刚认识、处境很差的人想暂住几天，你感觉他已把善意理解成更亲密的邀请。你会：", a:[
    ["让他留下，但当晚就把边界说清楚。", [2.7,3.7,4.3,3.3], {}],
    ["婉拒。很多灾难都是从“不好意思说不”开始的。", [3.5,3.5,5.0,4.0], {}],
    ["让他留下再说。也许越过边界以后才知道关系是什么。", [1.7,2.3,1.0,1.8], {V:1,M:1}]
  ]},
  { type:"失去", q:"你终于得到渴望多年的机会、爱情或一笔钱。脑子里最先出现的是：", a:[
    ["就这？我为这个东西受了这么多罪？", [2.0,2.5,4.0,4.7], {X:1}],
    ["我得抓紧，它不会永远属于我。", [4.0,4.3,1.8,2.0], {M:1}],
    ["下一步是什么？别让这一刻白白过去。", [3.8,4.7,4.0,2.0], {}]
  ]},
  { type:"镜头", q:"有人把摄像机竖在地上，说：“你看，它像不像一个人跪着？”你觉得这更像：", a:[
    ["漂亮但危险的谎言——镜头跪着，拿镜头的人未必跪着。", [2.3,3.5,4.2,4.2], {}],
    ["一种真相。拍摄别人，本来就既是凝视，也是乞求。", [1.5,2.3,2.8,3.5], {}],
    ["一句用来让现场所有人觉得他很有东西的屁话。", [4.0,2.0,4.0,1.2], {}]
  ]},
  { type:"工作", q:"你看清了环境的虚伪和混乱，但暂时没有更好的去处。你会：", a:[
    ["继续留下。看清规则以后，至少可以少受一点骗。", [4.0,4.5,3.8,4.2], {X:1}],
    ["规定一个期限，哪怕出去更差，也必须走。", [1.8,1.5,4.0,2.5], {}],
    ["不走，也不假装自己认同。白天把活干完，晚上继续骂这套鬼东西。至少它能买走我的时间，不能顺便买走我的脑子。", [1.8,4.2,4.2,4.7], {}]
  ]},
  { type:"自我", q:"一群人忽然问你：“那你到底想去哪儿？”你通常会：", a:[
    ["说出自己的选择，即使最后没人同意。", [1.7,1.5,4.8,1.5], {}],
    ["先听安排。如果都能接受，就没必要增加麻烦。", [3.8,4.2,2.2,4.0], {V:1}],
    ["一时答不上来。我先知道别人不喜欢什么，最后才想起自己。", [3.0,4.0,1.5,5.0], {V:2}]
  ]},
  { type:"结尾", q:"主人公依然欠债，梦想没实现，爱人也走了。外面传来一声闷响。你愿意相信：", a:[
    ["他还活着。活得很差，但活着本身就是对结局的一次拖延。", [2.5,3.0,2.8,4.0], {}],
    ["他会把一切写成宣言，至少让失败听起来像一场战争。", [1.0,1.0,3.0,1.0], {H:2}],
    ["他没走向任何地方，只是从此不再期待“后来”。", [2.2,4.0,4.4,5.0], {X:2,V:1}]
  ]}
];

const trueEnds = [
  ["王笑", [1,1.2,1.2,1.2], "过载的索取者", "王笑不肯只选一样。他要钱、面子、爱情和前途，也要保住一个与所有人都不同的自己。他缺少承担欲望的资源，却把每一种欲望都体验成生死攸关。世界没有及时回应，他便用愤怒、争吵、说唱和自我伤害证明自己仍然存在。他依赖关系，却又把依赖理解成屈辱；渴望被爱，也不断把最亲近的人推开。你不是没有能力，只是想一次性赢回太多东西。", "我要钱、要面子，要他妈我的前途，要这些人都想要的，还他妈要和他们不一样的。"],
  ["王子轩", [4.2,4.3,2.2,1.5], "被后果绕开的人", "王子轩没有建立自己的事业，也未真正学会处理生活，但生活依然对他足够宽容。他习惯占据人群中心，把要求说成玩笑，把冒犯当作气氛，并默认总会有人替自己收拾残局。别人面对的是债务、警察和家庭破裂，他关心的却是父亲有没有赶到。他并非深谋远虑，只是从小知道后果有价格，而那个价格通常不需要自己支付。你的自由可能很真实，只是它一直由别人买单。", "阿Sir，我爸来了吗？"],
  ["兮萨", [2.2,3.7,4.5,3.8], "有边界的容纳者", "兮萨有自己的收入，也只是住在合租房里，却愿意把有限的私人空间让给热爱艺术、暂时无处可去的年轻人。她相信交流，却不把接纳误认为无限责任；可以陪你谈音乐、谈文化、谈理想，却不会因此允许你进入她的身体或替你承担人生。她的清醒带有一点冷，但这种冷保护了善意不被侵占。你愿意为别人开门，同时清楚地知道：开门不等于交出钥匙。", "我一直觉得中国所有东西都是cosplay。"],
  ["陈清奇", [2,3,3.1,4.7], "有退路的矛盾信徒", "陈清奇生活在彼此矛盾的秩序里：艺术与家庭资源、开放的欲望与天主教信仰、自由生活与事后祷告。他没有真正解决这些冲突，而是让它们在同一个人身上继续共存。家庭提供的退路，使他有资格把混乱变成精神问题，而不是立刻坠入生存危机。你不会轻易否定自己的欲望，也不肯彻底抛弃心中的审判者，于是一次次越界，再一次次请求宽恕。", "我们在天上的父，愿您的国降临，愿您的旨意行在地上，如同行在天上。"],
  ["Roxie", [4.8,4,4.1,4], "资源现实主义者", "Roxie知道钱不伟大，却也知道钱能提供退路、行动能力和拒绝别人的资格。她不相信贫穷会自动带来深度，也不愿把空谈理想误认成高贵。她会劝王笑干点实事，却不把自己的苦衷拿出来换取理解。你习惯先判断一件事能否落地，再决定是否投入感情；不是没有梦想，而是不愿让梦想成为逃避无能的借口。你最珍惜的从来不是钱本身，而是钱替你守住的选择权。", "空谈理想只会被人欺负，干点实事才是你该走的路。"],
  ["李哥", [3.3,4.8,2.8,2], "理念化的控制者", "李哥确实把一家小公司经营了多年，也拥有稳定的员工与现金流。他的问题不是没有能力，而是把能力逐渐变成了评价他人的特权。他谈朋克、真诚和扁平化管理，却保留着解释规则、分配机会和定义员工品格的权力。当下属不符合期待，他不会怀疑制度，只会指责对方辜负了自己的善意。你可能真心反感虚伪，但最危险的时刻，是你开始把“真实”定义成别人必须服从你的方式。", "你来公司面试的时候怎么说的，是不是虚心学？你根本不是我想象的那种人。"],
  ["俞茜雅", [4,4.8,1.3,2.1], "机会漂流者", "俞茜雅相信自己的黄金时间正在迅速流失。没有稳定住所、职业入口和可靠资源，她便不断进入可能带来钱、角色、庇护或上升机会的关系。她看似在利用男人，实际上也随时会被新的希望利用；甚至那场法事，都可能只是她抓住的最后一根稻草。你很少把一段关系当作终点，更愿意把它视为临时住所和下一扇门。你不是不相信爱，只是比起永远，更害怕自己永远没有出头之日。", "如果你真的喜欢我，你就带我一起私奔怎么样？去哪儿都行，但是我没钱。"],
  ["烙饼", [2.3,3.8,3.4,4.2], "清醒的滞留者", "烙饼知道工作怎样损害人的尊严，也能识别消费欲望和社会规则如何塑造个人。但认识并没有自动转化为行动。她不是认同现实，而是尚未找到足以离开现实的力量，只能继续坐在相同的位置，完成相同的工作。她通过谈论、分析、抱怨和讽刺保存精神上的不合作。你看得比许多人都清楚，却也因此更清楚反抗需要付出什么。清醒让你没有被彻底同化，却暂时也没有把你带出去。", "为什么咱们活得这么没有尊严啊？这是一个正常人该过的日子吗？"],
  ["短剧导演", [3.6,4.7,4,2.2], "表演型机会中介", "短剧导演熟悉镜头、身体和机会之间的交换。他能够制造一种“我可以带你进入行业”的可能，同时在导演、情人、主人和宠物之间不断改变位置。他可以在性关系中跪下，却未必真正交出选角、拍摄和叙事的权力。你擅长把欲望变成表演，也擅长用表演掩盖真正的权力关系。别人很难判断你什么时候真诚，因为对你而言，真诚本身或许也只是一个效果不错的镜头。", "你知道摄像机竖着的时候特别像什么吗？像人跪着。"],
  ["心哥", [4.1,3.7,1.2,1.3], "以赠予维持秩序的人", "心哥通过收入、圈内经验和赠予建立自己的关系网络。他可能真心照顾兄弟，也可能真心喜欢身边的女孩，但这种真心始终与资源分配和权威绑定。只要接受了他的好意，就仿佛同时签下了一份忠诚契约。因此，欺骗对他不只是私人伤害，更是对其地位和男性尊严的公开否定。你愿意为自己人付出，却很难接受对方拥有不向你交代的秘密。你的慷慨是真的，慷慨背后的账也是真的。", "我信你，我把你当我兄弟；但你要真骗我，你就你妈了逼。"]
];

// 四维类型原型。角色匹配只比较四条轴，不再使用角色坐标的欧氏距离。
const roleCodes = {
  "王笑":"DRTE",
  "王子轩":"BPTE",
  "兮萨":"DRSI",
  "陈清奇":"DRTI",
  "Roxie":"BPSI",
  "李哥":"BPSE",
  "俞茜雅":"BPTI",
  "烙饼":"DPSI",
  "短剧导演":"BRSE",
  "心哥":"BRTE"
};

const axisLetters = [["D","B"],["R","P"],["T","S"],["E","I"]];

const hiddenEnds = {
  H:["Dream Boy",[1,1,3,1.2],"宏大化的幸存者","Dream Boy拒绝承认自己的困境只是一场私人失败。他把贫穷、失业、屈辱和无能重新命名为阶级斗争，并把那个迟迟没有翻身的自己想象成潜伏在现实中的战士。这种宏大叙事让他保存了尊严，也可能让他无需面对具体生活。他的敌人足够庞大，因此每一次失败都能获得意义。你仍然相信愤怒可以变成力量，但要小心：当一个人只剩下英雄身份，真正需要被拯救的生活便可能无人处理。","我是他妈无产阶级战士，aka资本主义狙击手。"],
  X:["Dead Bastard",[1.8,3.8,4.2,4.8],"答案耗尽之后","Dead Bastard并非从未寻找答案，而是已经把能够想到的答案都试着想过。他从一个群体走向另一个群体，从爱情走向工作，从梦想走向金钱，最终只看见不同形状的圈套。最可怕的不是失去，而是得到某样东西时，立刻看见它背后的倒计时。你已经不太相信改变，却仍保留着足够的清醒观察自己的下坠。这个结局不是死亡本身，而是世界继续运转，你却再也无法相信任何出口值得动身。","从一个群体到另一个群体，从一个圈套到另一个圈套，在人的欲望编织的无形的大网里面挣扎。我累了，我想不出答案了，我得到的那些东西背后都是他妈倒计时。"],
  M:["母亲",[4.5,3.7,1,2.3],"爱所形成的债务","母亲一次次替家人支付现实的价格：钱、时间、情绪，以及本来属于自己的生活。她不能真正退出家庭，只能在危机来临时继续填补窟窿。可牺牲不会自动消失，它逐渐变成账目，等待某一天以责骂、控诉和亏欠的形式全部归还。你相信爱意味着承担，也因此难以允许自己停止承担。最深的伤害不是对方犯错，而是对方把你的牺牲当成空气——离不开，却也从未认真看见。","你爸爸挣这点钱容易吗？死这么惨，家里钱都让你败光了。我的情，我这个妈能值多少钱？"],
  V:["死婴",[3,5,2.5,5],"未能成为的声音","死婴不是一种完整人格，而是一个在形成愿望之前就被取消的可能。它没有机会决定自己要梦想还是面包、反抗还是适应，甚至无法确认自己遭遇的事情是否算作伤害。当需求可能打扰别人，它便先取消需求；当表达可能遭到拒绝，它便假装自己从未想过开口。你不是没有声音，而是太习惯在声音出现之前将它掐灭。这个结局没有控诉，因为连控诉者都还未来得及成为一个人。","……"]
};

let step = -1;
let answers = Array(questions.length).fill(null);
let secretTimers = [];
const app = document.querySelector("#app");

function clearSecretTimers(){
  secretTimers.forEach(id=>{clearTimeout(id);clearInterval(id);});
  secretTimers=[];
}

function renderStart(){
  clearSecretTimers();
  app.innerHTML = `<section class="hero"><div class="eyebrow">DBTI / survival logic inventory</div><h1>你在用什么<br><span>姿势活着？</span></h1><p class="lede">测测你的生存逻辑，最接近中国地下电影《DB》里的谁。</p><div class="warning">别选那个听起来最像好人的。选那个事情真的发生时，你最可能做出来的。<br>世界不负责了解你。这个测试也不一定负责。</div><div class="start-actions"><button class="primary" id="start">开始，看看我是哪种傻逼</button><button class="refuse-link" id="refuse">我不想测</button></div></section>`;
  document.querySelector("#start").onclick=()=>{step=0;renderQuestion();};
  document.querySelector("#refuse").onclick=()=>renderRefusal();
}

function renderQuestion(){
  clearSecretTimers();
  const item=questions[step], selected=answers[step];
  app.innerHTML=`<section class="quiz"><div class="quiz-top"><div class="progress"><i style="width:${((step+1)/questions.length)*100}%"></i></div><div class="counter">${String(step+1).padStart(2,"0")} / ${questions.length}</div></div><article class="question"><div class="question-type" id="question-type">${item.type}</div><h2>${item.q}</h2><div class="answers" id="answers">${item.a.map((x,i)=>`<button class="answer ${selected===i?"selected":""}" data-i="${i}"><b>${String.fromCharCode(65+i)}</b><span>${x[0]}</span></button>`).join("")}</div><div id="secret-slot"></div></article><div class="quiz-nav"><button class="text-btn" id="back">${step?"← 上一题":"← 返回封面"}</button><span class="meta" id="quiz-meta">NO CORRECT ANSWER</span></div></section>`;
  document.querySelectorAll(".answer").forEach(btn=>btn.onclick=()=>{
    answers[step]=Number(btn.dataset.i);
    if(step<questions.length-1){step++;renderQuestion();}else{renderResult();}
  });
  document.querySelector("#back").onclick=()=>{if(step===0){step=-1;renderStart();}else{step--;renderQuestion();}};

  // 第10题：题型标签在“家庭”与家庭账本入口之间反复跳变。
  if(step===9){
    const typeLabel=document.querySelector("#question-type");
    let expanded=false;
    const toggleMother=()=>{
      expanded=!expanded;
      typeLabel.textContent=expanded?"家庭：查看这几年到底花了多少钱":"家庭";
      typeLabel.classList.add("secret-jump");
      if(expanded) typeLabel.classList.add("secret-ready");
      setTimeout(()=>typeLabel.classList.remove("secret-jump"),300);
    };
    secretTimers.push(setTimeout(toggleMother,1200));
    secretTimers.push(setInterval(toggleMother,2200));
    typeLabel.onclick=()=>{
      if(typeLabel.classList.contains("secret-ready")) renderSecretEnd("M","你没有替他做选择。你只是又替所有人付了一次钱。");
    };
  }

  // 第12题：停留六秒后，出现对三个正常答案的拒绝。
  if(step===11){
    secretTimers.push(setTimeout(()=>{
      const slot=document.querySelector("#secret-slot");
      if(!slot) return;
      slot.innerHTML=`<button class="secret-answer" id="dream-secret">这些答案都太他妈温和了。</button>`;
      document.querySelector("#dream-secret").onclick=()=>renderSecretEnd("H","你没有回答问题。你决定重新定义问题。");
    },6000));
  }

  // 最后一题：十秒后，界面自己承认它并不相信“后来”。
  if(step===17){
    secretTimers.push(setTimeout(()=>{
      const meta=document.querySelector("#quiz-meta");
      if(!meta) return;
      meta.textContent="其实没有后来";
      meta.classList.add("secret-ready");
      meta.onclick=()=>renderSecretEnd("X","你已经走到了最后一题，但不再相信“最后”后面还有什么。");
    },10000));
  }
}

function calculate(){
  const sums=[0,0,0,0]; const flags={H:0,X:0,M:0,V:0};
  questions.forEach((q,i)=>{const choice=q.a[answers[i]];choice[1].forEach((v,j)=>sums[j]+=v);Object.entries(choice[2]).forEach(([k,v])=>flags[k]+=v);});
  // 校正题库本身对B、P、S、I的轻微语言偏向，使四条轴在随机答卷中回到中点。
  const axisCalibration=[0.02,0.17,0.34,0.08];
  const profile=sums.map((v,i)=>Math.max(1,Math.min(5,v/questions.length-axisCalibration[i])));
  // 把每条1—5轴换算成左右两端的百分比分布。
  const preferences=profile.map(v=>{
    const right=Math.max(0,Math.min(1,(v-1)/4));
    return [1-right,right];
  });
  const userCode=preferences.map((p,i)=>p[0]>=p[1]?axisLetters[i][0]:axisLetters[i][1]).join("");
  const roleSimilarity=end=>{
    const code=roleCodes[end[0]];
    const matches=[...code].map((letter,i)=>letter===axisLetters[i][0]?preferences[i][0]:preferences[i][1]);
    // 几何平均会惩罚某一维严重相反，避免三个温吞的吻合掩盖一个核心冲突。
    return Math.pow(matches.reduce((product,v)=>product*Math.max(.08,v),1),1/4);
  };
  const ranked=trueEnds
    .map(e=>({end:e,sim:Math.round(45+roleSimilarity(e)*52)}))
    .sort((a,b)=>b.sim-a.sim || roleCodes[a.end[0]].localeCompare(roleCodes[b.end[0]]));
  const candidates=[];
  if(flags.H>=4 && flags.X<5 && profile[0]<2.8 && profile[1]<2.9)candidates.push(["H",flags.H/6]);
  if(flags.X>=3 && profile[3]>3.25)candidates.push(["X",flags.X/5]);
  if(flags.M>=4 && profile[2]<2.6)candidates.push(["M",flags.M/6]);
  if(flags.V>=4 && profile[3]>3.2)candidates.push(["V",flags.V/6]);
  candidates.sort((a,b)=>b[1]-a[1]);
  return {profile,preferences,userCode,ranked,hidden:candidates[0]?.[0]};
}

function verdictMarkup(text){
  const splitAt=text.indexOf("。你");
  if(splitAt<0) return `<p class="verdict">${text}</p>`;
  return `<p class="verdict">${text.slice(0,splitAt+1)}</p><p class="user-address">${text.slice(splitAt+1)}</p>`;
}

function card(end,rank,sim,label,showSimilarity=true){
  return `<article class="result-card"><div class="card-top"><div class="rank">${label||`NO. ${rank}`}</div>${showSimilarity?`<div class="similarity">相似度 ${sim}%</div>`:""}</div><h2>${end[0]} · ${end[2]}</h2>${verdictMarkup(end[3])}<div class="dimensions">${axes.map((a,i)=>`<div class="dimension"><small>${a}</small><b>${end[1][i].toFixed(1)}</b></div>`).join("")}</div><blockquote class="quote">“${end[4]}”</blockquote></article>`;
}

function renderRefusal(){
  renderSecretEnd("V","你拒绝回答，于是测试把沉默当作了唯一证词。","我又想测了");
}

function renderSecretEnd(key,subtitle,restartLabel="重新活一遍"){
  clearSecretTimers();
  const end=hiddenEnds[key];
  app.innerHTML=`<section class="results"><header class="result-head"><div class="end-label">HIDDEN END / SECRET ROUTE</div><h1>${end[0]}</h1><div class="subtitle">${subtitle}</div><div class="stamp">不是答案把你带到这里的</div></header><div class="result-grid">${card(end,1,100,"HIDDEN END",false)}</div><div class="result-actions"><button class="primary" id="again">${restartLabel}</button></div></section>`;
  document.querySelector("#again").onclick=()=>{answers.fill(null);step=-1;renderStart();};
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderResult(){
  clearSecretTimers();
  const r=calculate(); const isHidden=Boolean(r.hidden);
  let cards="";
  if(isHidden){cards+=card(hiddenEnds[r.hidden],1,Math.min(96,Math.max(82,Math.round(82+r.ranked[0].sim/8))),"HIDDEN END");cards+=card(r.ranked[0].end,2,r.ranked[0].sim,"现实投影 01");cards+=card(r.ranked[1].end,3,r.ranked[1].sim,"现实投影 02");}
  else r.ranked.slice(0,3).forEach((x,i)=>cards+=card(x.end,i+1,x.sim));
  app.innerHTML=`<section class="results"><header class="result-head"><div class="end-label">${isHidden?"HIDDEN END / REALITY OUTSIDE":"TRUE END / STILL ALIVE"}</div><h1>${isHidden?hiddenEnds[r.hidden][0]:r.ranked[0].end[0]}</h1><div class="subtitle">你的生存逻辑最接近以下三个结果。</div><div class="stamp">${isHidden?"现实之外的可能性":"苟活认证"}</div></header><div class="result-grid">${cards}</div><div class="result-actions"><button class="primary" id="again">重新活一遍</button><button class="secondary" id="review">返回修改答案</button></div></section>`;
  document.querySelector("#again").onclick=()=>{answers.fill(null);step=-1;renderStart();};
  document.querySelector("#review").onclick=()=>{step=questions.length-1;renderQuestion();};
  window.scrollTo({top:0,behavior:"smooth"});
}

renderStart();
