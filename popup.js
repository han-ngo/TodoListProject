// Check off specific Todos by clicking
$(".content ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete Todos
$(".content ul").on("click", "span", function() {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// Add new todo
$("input[type='text']").keypress(function() {
  if (event.which === 13) {
    // Save new todo from input
    var todoText = $(this).val();
    $(this).val("");
    // Create a new todo
    $("ul").prepend("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

// Toggling the Plus Button
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});

// Drop down menu selection
$(".fa-bars").click(function() {
  $().slideToggle( "slow" );
});

// Drop down menu selection
$( ".fa-times" ).hide();
$( ".menu" ).hide();
$( ".fa-bars" ).click(function() {
  $( ".menu" ).slideToggle( "fast", function() {
    $( ".fa-bars").hide();
    $( ".fa-times" ).show();
    $( ".content" ).css({
      opacity: 0.3
    })
  });
});

// Close drop down menu selection
$( ".fa-times" ).click(function() {
  $( ".menu" ).slideToggle( "fast", function(){
    $( ".fa-times").hide();
    $( ".fa-bars" ).show();
    $( ".content" ).css({
      opacity: 1
    })
  });
});

// KPOP drop down menu selection
$( ".fa-chevron-circle-up" ).hide();
$( ".KpopSelection" ).hide();
$( ".fa-chevron-circle-down" ).click(function() {
  $( ".KpopSelection" ).slideToggle( "fast", function() {
    $( ".fa-chevron-circle-down").hide();
    $( ".fa-chevron-circle-up" ).show();
    $( ".content" ).css({
      opacity: 0.3
    })
  });
});

// Close KPOP drop down menu selection
$( ".fa-chevron-circle-up" ).click(function() {
  $( ".KpopSelection" ).slideToggle( "fast", function(){
    $(".fa-chevron-circle-up").hide();
    $( ".fa-chevron-circle-down" ).show();
    $( ".content" ).css({
      opacity: 1
    })
  });
});

// Turn off KPOP mode
$( ".fa-toggle-off" ).hide();
$( ".fa-toggle-on" ).click(function() {
  $( ".fa-toggle-on").hide();
  $( ".fa-toggle-off" ).show();
});

// Turn on KPOP mode
$( ".fa-toggle-off" ).click(function() {
  $(".fa-toggle-off").hide();
  $( ".fa-toggle-on" ).show();
});
