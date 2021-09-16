let dropdown = document.getElementsByClassName("nav-button");
let nav_list = document.getElementsByClassName("nav-list");

window.addEventListener("resize", () => {
    if (window.innerWidth <= 740) {
        nav_list[0].style.display = "none";
        $(".fa-bars").css("display", "inline-block");
        $(".fa-times").css("display", "none");
    }
    if (window.innerWidth > 740) {
        nav_list[0].style.display = "block";
    }
})

dropdown[0].addEventListener('click', () => {
    if (nav_list[0].style.display == "block") {
        nav_list[0].style.display = "none";
        $(".fa-bars").css("display", "inline-block");
        $(".fa-times").css("display", "none");
    }
    else {
        nav_list[0].style.display = "block";
        $(".fa-bars").css("display", "none");
        $(".fa-times").css("display", "inline-block");
    }

})

let animasi = document.getElementsByClassName("awalAnimasi");
for (let i = 0; i < animasi.length; i++) {
    animasi[i].classList.add("akhirAnimasi")
}

let animasi2 = document.getElementsByClassName("awalAnimasi2");
let animasi3 = document.getElementsByClassName("awalAnimasi3");
for (let i = 0; i < animasi2.length; i++) {
    animasi2[i].classList.add("akhirAnimasi2");
}
for (let i = 0; i < animasi3.length; i++) {
    animasi3[i].classList.add("akhirAnimasi3");
}

