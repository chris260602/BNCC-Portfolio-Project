$("form").submit((e) => {
  e.preventDefault();
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let message = [];
  let messageLenght = 0;
  message = $("#message").val().split(" ");
  message.forEach((item) => {
    if (item.length > 0) {
      messageLenght++;
    }
  });
  let error = [];
  if ($("#name").val().length <= 0) {
    error.push("Name is Empty");
    $("#label-name").html("Name is Empty");
  } else {
    $("#label-name").html("");
  }
  if ($("#email").val().match(validRegex) == null) {
    error.push("Invalid Email");
    $("#label-email").html("Invalid Email");
  } else {
    $("#label-email").html("");
  }
  if ($("#telnum").val().length >= 2 && $("#telnum").val().length <= 14) {
    if (
      $("#telnum").val().charAt(0) === "0" &&
      $("#telnum").val().charAt(1) === "8"
    ) {
      $("#label-number").html("");
    } else {
      error.push("Invalid Number");
      $("#label-number").html("Invalid Number");
    }
  } else {
    error.push("Invalid Number");
    $("#label-number").html("Invalid Number");
  }
  if (messageLenght < 5 || messageLenght > 100) {
    error.push("Min 5 Words and Max 100 Words");
    $("#label-message").html("Min 5 Words and Max 100 Words");
  } else {
    $("#label-message").html("");
  }
  if (error.length <= 0) {
    let users = {
      name: $("#name").val(),
      email: $("#email").val(),
      number: $("#telnum").val(),
      message: $("#message").val(),
    };
    try {
      toDoCollection.add(users).then((res) => {
        $("#name").val("");
        $("#email").val("");
        $("#telnum").val("");
        $("#message").val("");
        alert("Data Successfuly added");
      });
    } catch (err) {
      alert("Form Disabled");
    }
  }
});
