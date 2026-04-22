
const menuItems = document.querySelectorAll(".account-sidebar li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
});



const bar = document.querySelector(".bar");
const nav = document.querySelector(".navlist");

bar.addEventListener("click", () => {
    nav.classList.toggle("active");
});
