document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  alert("Thanks for reaching out! I'll get back to you soon.");
});
