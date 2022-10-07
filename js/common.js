const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // setAttribute() : html 속성 삽입
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// blur: focus 해제
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // setAttribute() : html 속성 삽입
  searchInputEl.setAttribute('placeholder', '');
});



// 올해 년도 출력
const thisYear = document.querySelector('.this-year')
// textContent: 요소가 가지고 있는 글자 내용 값을 알아내거나 지정하는 용도
thisYear.textContent = new Date ().getFullYear (); // 2022