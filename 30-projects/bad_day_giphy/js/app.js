$(document).ready(function(){
  formButtonListener();
  $('.back-nav').hide();
});

var formButtonListener = function(){
  $("#gif_search").on("submit", function(event){
    event.preventDefault();
    $('.footer').hide();
    $('.back-nav').fadeIn();


    var $form = $(this);
    var url = $form.attr("action");
    var method = $form.attr("method");

    $.ajax({
      url: url,
      method: method,
    }).done(function(response){
      $("#gif-show").append(response);
    }).fail(function(){
      console.log(error)
    })
 })
};
