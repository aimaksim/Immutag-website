// Sign Up Form
$(document).ready(function () {
  $('#signupForm').submit(function (e) {
    e.preventDefault();
    const firstName = $('#firstName').val().trim();
    const lastName = $('#lastName').val().trim();
    const email = $('#emailInput').val().trim();
    const message = $('#formMessage');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName || !lastName) {
      message
        .text("Please enter your first and last name.")
        .removeClass("text-success")
        .addClass("text-danger")
        .fadeIn();
      return;
    }

    if (!emailRegex.test(email)) {
      message
        .text("Please enter a valid email address.")
        .removeClass("text-success")
        .addClass("text-danger")
        .fadeIn();
      return;
    }
    message
      .text(`Thanks, ${firstName}! You're on the waitlist.`)
      .removeClass("text-danger")
      .addClass("text-success")
      .fadeIn();

    $(this)[0].reset();
  });
});