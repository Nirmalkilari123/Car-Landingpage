document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    alert(`Thank you for signing up, ${email}!`);
  });
});
