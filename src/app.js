const navList = document.querySelector(".navList")
const hamBtn = document.querySelector(".hamButton")
const hamIcon = document.querySelector(".hamIcon")

hamBtn.addEventListener("click", ()=>{
    if(navList.ariaExpanded == "false"){
        navList.classList.remove("navHidden")
        navList.setAttribute("aria-expanded", "true")
        hamIcon.src = "assets/images/icon-close-menu.svg"
    }else if(navList.ariaExpanded == "true"){
        navList.classList.add("navHidden")
        navList.setAttribute("aria-expanded", "false")
        hamIcon.src = "assets/images/icon-hamburger.svg"
    }
})

