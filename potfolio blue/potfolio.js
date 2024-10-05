let icon = document.getElementById("icon");
icon.addEventListener("click", function() {
        let nav = document.getElementById("nav");
        let iconouter = document.getElementById("iconouter");
        let mainpages = document.getElementById("mainpages");
        let mainpage = document.querySelector(".main-page");

        iconouter.style.display="none";
        nav.style.display="flex"
        mainpage.style.transform = "perspective(1000px) rotateX(40deg) translateY(20px) scale(0.8, 0.9)"
        mainpages.style.borderRadius = "30px"
        });

let home = document.getElementById("home");
home.addEventListener("click", function() {
        let nav = document.getElementById("nav");
        let iconouter = document.getElementById("iconouter");
        let mainpage = document.querySelector(".main-page");
        let mainpages = document.getElementById("mainpages");

        iconouter.style.display="flex";
        nav.style.display="none"
        mainpage.style.transform = "none"
        mainpages.style.borderRadius = "0px"

        });
let education = document.getElementById("education");
education.addEventListener("click", function() {
        let nav = document.getElementById("nav");
        let iconouter = document.getElementById("iconouter");
        let mainpage = document.querySelector(".main-page");
        let mainpages = document.getElementById("mainpages");

        iconouter.style.display="flex";
        nav.style.display="none"
        mainpage.style.transform = "none"
        mainpages.style.borderRadius = "0px"

        });
let skills = document.getElementById("skills");
skills.addEventListener("click", function() {
        let nav = document.getElementById("nav");
        let iconouter = document.getElementById("iconouter");
        let mainpage = document.querySelector(".main-page");
        let mainpages = document.getElementById("mainpages");

        iconouter.style.display="flex";
        nav.style.display="none"
        mainpage.style.transform = "none"
        mainpages.style.borderRadius = "0px"

        });
let contact = document.getElementById("contact");
contact.addEventListener("click", function() {
        let nav = document.getElementById("nav");
        let iconouter = document.getElementById("iconouter");
        let mainpage = document.querySelector(".main-page");
        let mainpages = document.getElementById("mainpages");

        iconouter.style.display="flex";
        nav.style.display="none"
        mainpage.style.transform = "none"
        mainpages.style.borderRadius = "0px"

        });



















// window.onscroll = () => {
//         if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
//                 console.log("Boss its work")
//         }
// }


const mediaQuery = window.matchMedia('(max-width: 600px)');

mediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
        console.log("in mobile")

        let nav2 = document.getElementById("nav2");
        nav2.style.display="flex";
        let iconouter = document.getElementById("iconouter");
        iconouter.style.display="none";

        
let home = document.getElementById("home");
home.addEventListener("click", function() {
        let iconouter = document.getElementById("iconouter");

        iconouter.style.display="none";
        });
let education = document.getElementById("education");
education.addEventListener("click", function() {
        let iconouter = document.getElementById("iconouter");

        iconouter.style.display="none";
        });
let skills = document.getElementById("skills");
skills.addEventListener("click", function() {
        let iconouter = document.getElementById("iconouter");

        iconouter.style.display="none";
        });
let contact = document.getElementById("contact");
contact.addEventListener("click", function() {
        let iconouter = document.getElementById("iconouter");

        iconouter.style.display="none";







let navigation = document.getElementById("navigation");
navigation.addEventListener("click", function() {
        let navigation = document.getElementById("navigation");



        navigation.style.background = "#5811ff"
        navigation.style.fill = "#FFFFFF"
        navigation.style.transform = "translateY(-35px)"
        navigation.style.border = " 10px solid #adc8ff"
        });
let navigation2 = document.getElementById("navigation2");
navigation2.addEventListener("click", function() {
        let navigation2 = document.getElementById("navigation2");



        navigation2.style.background = "#5811ff"
        navigation2.style.fill = "#FFFFFF"
        navigation2.style.transform = "translateY(-35px)"
        navigation2.style.border = " 10px solid #adc8ff"
        });
let navigation3 = document.getElementById("navigation3");
navigation3.addEventListener("click", function() {
        let navigation3 = document.getElementById("navigation3");



        navigation3.style.background = "#5811ff"
        navigation3.style.fill = "#FFFFFF"
        navigation3.style.transform = "translateY(-35px)"
        navigation3.style.border = " 10px solid #adc8ff"
        });
let navigation = document.getElementById("navigation");
navigation.addEventListener("click", function() {
        let navigation = document.getElementById("navigation");



        navigation.style.background = "#5811ff"
        navigation.style.fill = "#FFFFFF"
        navigation.style.transform = "translateY(-35px)"
        navigation.style.border = " 10px solid #adc8ff"
        });

        });
} else {
        console.log("in desktop")
        
        let nav2 = document.getElementById("nav2");
        nav2.style.display="none";
        let iconouter = document.getElementById("iconouter");
        iconouter.style.display="flex";

        let home = document.getElementById("home");
home.addEventListener("click", function() {
        let iconouter = document.getElementById("iconouter");

        iconouter.style.display="flex";
        });
let education = document.getElementById("education");
education.addEventListener("click", function() {
        let iconouter = document.getElementById("iconouter");

        iconouter.style.display="flex";
        });
let skills = document.getElementById("skills");
skills.addEventListener("click", function() {
        let iconouter = document.getElementById("iconouter");

        iconouter.style.display="flex";
        });
let contact = document.getElementById("contact");
contact.addEventListener("click", function() {
        let iconouter = document.getElementById("iconouter");

        iconouter.style.display="flex";

        });
}
});
