// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
  
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");
  
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";
  
    let valid = true;
  
    if (name.value.trim() === "") {
      nameError.textContent = "Name is required";
      valid = false;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      emailError.textContent = "Valid email is required";
      valid = false;
    }
  
    if (message.value.trim() === "") {
      messageError.textContent = "Message cannot be empty";
      valid = false;
    }
  
    if (valid) {
      successMessage.textContent = "Message sent successfully!";
      name.value = "";
      email.value = "";
      message.value = "";
    }
  });
  
  // Scroll to top button
  const topBtn = document.getElementById("topBtn");
  
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // Fade-in animation on scroll
  const faders = document.querySelectorAll(".fade-in");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });
  
  faders.forEach(fader => {
    observer.observe(fader);
  });
  