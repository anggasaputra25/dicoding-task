// Dark Mode
const btn = document.getElementById("btn-dark");
const card = document.querySelectorAll(".card");
const body = document.getElementsByTagName("body")[0];
const nav = document.getElementsByTagName("nav")[0];
const footer = document.getElementsByTagName("footer")[0];
btn.addEventListener("click", () => {
    card.forEach(element => {
        element.classList.toggle("dark");
    });
    body.classList.toggle("darker");
    nav.classList.toggle("light");
    footer.classList.toggle("light");
    if (body.classList.contains("darker")) {
        btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        btn.style.padding = '5px 8px';
    } else {
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        btn.style.padding = '5px 10px';
    }
});

// to Top
const btnTop = document.getElementById("btn-top");
btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0
    });
})
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        btnTop.style.margin = "10px";
        btnTop.style.transform = "rotate(0deg)"
    } else {
        btnTop.style.margin = "10px -50px";
        btnTop.style.transform = "rotate(90deg)"
    }
})