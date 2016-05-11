$(function() {
  $('#project1').on('click', function() {
    $('.projectsWrapper').css('transform', 'translateX(0)');
    $('.circlesWrapper li').removeClass('current');
    $(this).addClass('current');
  });
  $('#project2').on('click', function() {
    $('.projectsWrapper').css('transform', 'translateX(-100vw)');
    $('.circlesWrapper li').removeClass('current');
    $(this).addClass('current');
  });
  $('#project3').on('click', function() {
    $('.projectsWrapper').css('transform', 'translateX(-200vw)');
    $('.circlesWrapper li').removeClass('current');
    $(this).addClass('current');
  });
});
