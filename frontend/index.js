const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", handleLogin);

function handleLogin(event) {
    event.preventDefault();

    const loginFormData = new FormData(event.target);
    const name = loginFormData.get("name");
    const password = loginFormData.get("password");
    console.log("name", name);
    console.log("password", password);

const loginBody =  { name, password }

fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify( loginBody )
}).then(response => response.json())
    .then(result => {
        console.log(result.token);
        localStorage.set("token", result.token);
    })
    event.target.reset();
}