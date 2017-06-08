// Check off specific Todos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Click on X to delete Todos
$("ul").on("click", "span", function() {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function() {
  if (event.which === 13) {
    // Save new todo from input
    var todoText = $(this).val();
    $(this).val("");
    // Create a new todo
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
});

// Toggling the Plus Button
$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
