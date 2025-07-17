document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example of form handling (could be sent to an API)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    alert("Thank you for your message!");

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

});
