

// bulma 모달창 js 기본틀임

document.addEventListener('DOMContentLoaded', () => {//DOMContentLoaded는 HTML이 모두 로딩된 뒤에 모달 제어로직을 실행함.
    
    function openModal($el) {
      $el.classList.add('is-active');//$el은 특정 HTML의 요소를 가리키는 변수나 식별자로 사용된다.
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }//모달을 숨기거나 보이게 하는 코드 si-activate가 그 역할을 함.
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {//forEach로 배열에 있는 각 항목을 하나씩 꺼내서 중괄호 안의 작업을 실행한다.
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    // 모달 밖을 클릭할 시, 모달이 사라지게 하기위한 코드
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');//closest()는 특정 요소에서 시작해서 자기 자신을 포함하여 DOM 트리(부모, 조부모, ...)를 거슬러 올라가면서, 주어진 CSS 선택자(.modal)와 일치하는 가장 가까운 조상 요소를 찾는 함수이다.
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });


  //my modal

  const modalButton1 = document.querySelector('#modalButton1'); // 회원가입 모달 버튼임
  const modalButton2 = document.querySelector('#modalButton2'); // 로그인 모달 버튼임
  const modal1 = document.querySelector('#modal1');
  const modal2 = document.querySelector('#modal2');
  const modalBg = document.querySelector('.modal-background');


  modalButton1.addEventListener('click',()=>{
    modal1.classList.add('is-active'); // is-active 클래스에 추가 =  모달 열어줌
    let nickName = document.querySelector("#nickName");
    nickName.setAttribute('value',changeNickName()); // changeNickName from randomName.js
  })
  modalBg.addEventListener('click',()=>{
    modal1.classList.remove('is-active'); // is-active 클래스에서 제거 = 모달 닫음
  })
  modalButton2.addEventListener('click',()=>{
    modal2.classList.add('is-active');
  })
  modalBg.addEventListener('click',()=>{
    modal2.classList.remove('is-active');
  })

