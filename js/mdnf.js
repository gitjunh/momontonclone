const mdnf = document.querySelector(".js-location .location__text");

const mdnfs = ["김윤제 - 와이프 한번만 차보게 해주세요.", 
"손은경 - 모가지만 따", 
"윤나람 - 야동이나 봐야지",
"유제선 - 나 중국 간다!",
"손은경 - 헛 ㅋㅋㅋ 시바귀욤 ㅋ",
"윤나람 - 니새끼 잡히면 쳐죽인다",
"윤나람 - 아잉",
"홍은표 - 개소리한듯",
"김윤제 - 만지고싶다",
"성율 - 뭔 미친소리를 하는거야!!",
"이휘준 - 아잇",
"박신환 - 아시발",
"윤나람 - 아 그거 찍혔다는 뜻이에요",
"송진영 - 아 뭔가 똥산거같은데",
"윤나람 - 러시아 사람들 커요?",
"윤나람 - 멍멍 같은 소리하고 앉아있네",
"강정훈 - 그냥 다 뒤져야 됩니다.",
"임성철 - 아니이이이~~~!!!!",
"장호준 - 부활을 확~~~",
"whatsin 2018.11.08 - 힘들게 만들었더니 지우라고 한다 다신 안만들꺼다"];

function paintMDNF() {
    const number = Math.floor(Math.random() * 20);
    mdnf.innerHTML = mdnfs[number];
}


function init() {    
    paintMDNF();
}

init();