navbar = document.querySelector(".navbar").querySelectorAll("a");
console.log(navbar);

navbar.forEach((element) => {
  element.addEventListener("click", function () {
    navbar.forEach((y) => y.classList.remove("active"));
    this.className += " active";
  });
});

function changeTheme() {
  console.log(document.documentElement.style.getPropertyValue("--bgColor"))
}

document.getElementById('change-theme').addEventListener('click',()=>{
    document.documentElement.style.setProperty('--bgColor', "black")
    document.documentElement.style.setProperty('--bgSecondaryColor', "black")
    document.documentElement.style.setProperty('--primaryColor', "white")
    document.documentElement.style.setProperty('--secondaryColor', "rgb(202, 202, 202)")
    document.documentElement.style.setProperty('--titleHeader', "lightGreen")
})

document.getElementById('light-theme').addEventListener('click',()=>{
    document.documentElement.style.setProperty('--bgColor', "rgb(237, 237, 237)")
    document.documentElement.style.setProperty('--bgSecondaryColor', "white")
    document.documentElement.style.setProperty('--primaryColor', "black")
    document.documentElement.style.setProperty('--secondaryColor', "rgb(105, 105, 105)")
    document.documentElement.style.setProperty('--titleHeader', "rgb(63, 126, 63)")
})
