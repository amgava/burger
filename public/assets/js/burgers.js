$(function() {
  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");

    var newBurgerState = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        location.reload();
      }
    );
  });


  $(".create-burger").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      burger_name: $("#bn").val().trim(),
      devoured: false
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
