// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");// /\S/g는 공백이 아닌 모든 문자(S)를 전역(g)에서 찾아라라는 의미의 정규표현식, <span class='letter'>$&</span>는 찾은 글자 한글자를 <span class='letter'>라는 태그로 감싸줍니다. 

anime.timeline({loop: true})//anime.js 덕분에 변수를 생성하지 않아도 anime를 사용할 수 있다.
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.3em", 0], //각 글자를 아래에서 위로 올라오게 
    translateZ: 0,
    duration: 1000,
    delay: (el, i) => 50 * i //각 글자마다 50cm씩 딜레이
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1300,
    easing: "easeOutExpo",
    delay: 1000000 // (의도된 지연으로 무한 루프처럼 보일 수도 있음)
  });

  //index.ejs파일에서 글자들 위아래로 움직이는 애니메이션임 from anime.js