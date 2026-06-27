document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.3 });

  fadeElements.forEach(el => observer.observe(el));

  // Dark/Light mode toggle
  const toggleButton = document.getElementById('modeToggle');
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
});


//registrationn form
const registerform = document.getElementById("register")
if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        // Registration code
    });
}

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = {

        Name: document.getElementById("Name").value,

        email: document.getElementById("email").value,

        Password: document.getElementById("Password").value

    };

    console.log(formData);

    try {

        const response = await fetch(
            "http://localhost:5000/register",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData)
            }
        );

        const data = await response.text();

        alert(data);

    } catch(error){

        console.log(error);

        alert("Something went wrong");

    }

});



//Login form 
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        // Login code
    });
}
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = {

        email: document.getElementById("email").value,

        Password: document.getElementById("Password").value

    };

    console.log(formData);

    try {

        const response = await fetch(
            "http://localhost:5000/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData)
            }
        );

        const data = await response.text();

        alert(data);

        console.log("SERVER RESPONSR:",data);

        if(data === "welcome"){
            window.location.href = "index.html";
        }

    } catch(error){

        console.log(error);

        alert("login failed");

    }

});