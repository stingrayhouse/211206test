$(document).ready(function(){
  $('.bon-ja1').click(function(){
    $('.modal').addClass('active');
  });
  $('.modal .modal-close').click(function(){
    $('.modal').removeClass('active');
  });

  $('.bon-ja2').click(function(){
    $('.modal2').addClass('active');
  });
  $('.modal2 .modal2-close').click(function(){
    $('.modal2').removeClass('active');
  });
});