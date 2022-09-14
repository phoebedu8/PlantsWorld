$(document).ready(() => {
  // ham
  $('.ham-show').click(function (e) { 
    e.preventDefault();
    $('.ham-dropDown').slideToggle('show');
  })

  // question
  $('.question').click(function (e) {
    // e.preventDefault();
    $(this).parent('.question-content').find('.answer').toggleClass('active');
    $(this).parent('.question-content').find('i').toggleClass('fa-caret-down fa-caret-up');
  })

  //  select
  $('.select-all').click(function (e) {
    $('.select-all').addClass('active');
    $('.productsList-all').addClass('active');

    $('.select-plants').removeClass('active');
    $('.productsList-plants').removeClass('active');

    $('.select-space').removeClass('active');
    $('.productsList-space').removeClass('active');
  })

  $('.select-plants').click(function (e) {
    $('.select-plants').addClass('active');
    $('.productsList-plants').addClass('active');

    $('.select-all').removeClass('active');
    $('.productsList-all').removeClass('active');

    $('.select-space').removeClass('active');
    $('.productsList-space').removeClass('active');
  })

  $('.select-space').click(function (e) {
    $('.select-space').addClass('active');
    $('.productsList-space').addClass('active');

    $('.select-all').removeClass('active');
    $('.productsList-all').removeClass('active');

    $('.select-plants').removeClass('active');
    $('.productsList-plants').removeClass('active');
  })

});

// Swiper
var swiper = new Swiper(".mySwiper", {
  on: {
    init: function () {
      console.log('swiper initialized');
    },
  },
  loop: true,
  autoplay: {
    delay: 8000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
