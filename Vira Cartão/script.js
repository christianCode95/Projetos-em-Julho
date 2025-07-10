const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark")? "☀️" : "🌙";
})