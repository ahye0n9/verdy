// $('body, #top').css({ 
//   'overflow': 'hidden', 
//   'height': '100vh',
//   'padding-right': scrollbarWidth + 'px' // body와 #top에 스크롤바 너비만큼 여백 추가
// });

// $('body, #top').css({ 
//   'overflow': 'auto', 
//   'height': 'auto',
//   'padding-right': '0' // body와 #top의 여백 원래대로 돌리기
// });

$(function () {
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  let scrollbarWidth = getScrollbarWidth();
  
  $('.popup').show(); // 처음부터 팝업 보이게
  $('body').css({
    'overflow': 'hidden', 
    'height': '100vh',
    // 'padding-right': scrollbarWidth + 'px' // 스크롤바 너비만큼 여백 추가
  });

  $('.popup_close').click(function () {
    $('.popup').fadeOut(0); // 팝업 닫기
    $('body').css({
      'overflow': 'auto', 
      'height': 'auto',
      // 'padding-right': '0' // 여백 원래대로 돌리기
    });
  });
});

$(document).ready(function() {
  setTimeout(function() {
    $('.line_point').addClass('active');
  }, 0);
});


document.addEventListener('DOMContentLoaded', () => {
  const listItems = document.querySelectorAll('.bookmark_wrap');

  listItems.forEach((item) => {
    const bookmark = item.querySelector('.bookmark');
    const bookmarkHover = item.querySelector('.bookmark_hover');

    // 초기 상태 설정
    bookmarkHover.classList.remove('active');
    bookmark.classList.remove('active');

    // 클릭 이벤트 설정
    item.addEventListener('click', () => {
      if (bookmarkHover.classList.contains('active')) {
        // 현재 hover 이미지가 활성 상태라면 원래 상태로 복귀
        bookmarkHover.classList.remove('active');
        bookmark.classList.remove('active');
      } else {
        // hover 이미지 활성화
        bookmarkHover.classList.add('active');
        bookmark.classList.add('active');
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const moreButton = document.querySelector('.btn.more'); // 'MORE' 버튼
  const moreList = document.querySelector('.more_list'); // 'more_list' 요소

  moreButton.addEventListener('click', () => {
    // more_list가 숨겨져 있으면 보이게 하고, active 클래스를 추가
    if (moreList.style.display === 'none' || moreList.style.display === '') {
      moreList.style.display = 'flex'; // 'more_list' 보이기
      moreButton.classList.add('active'); // 'MORE' 버튼에 active 클래스 추가
    } else {
      moreList.style.display = 'none'; // 'more_list' 숨기기
      moreButton.classList.remove('active'); // 'MORE' 버튼에서 active 클래스 제거
    }
  });
});