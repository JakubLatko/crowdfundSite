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



const mainModal = document.querySelector(".mainModal")
const mainModalListeners = document.querySelectorAll(".mainModalListener")


function mainModalSwitch(){
    if(mainModal.ariaExpanded == "false"){
        mainModal.classList.remove("modalHidden")
        mainModal.setAttribute("aria-expanded", "true")
    }else if(mainModal.ariaExpanded == "true"){
        mainModal.classList.add("modalHidden")
        mainModal.setAttribute("aria-expanded", "false")
    }
}

mainModalListeners.forEach(element => {
    element.addEventListener("click", mainModalSwitch)
})


const smallModal = document.querySelector(".smallModal")
const smallModalClose = document.querySelector(".smallModalClose")


function smallModalSwitch(){
    if(smallModal.ariaExpanded == "false"){
        smallModal.classList.remove("modalHidden")
        smallModal.setAttribute("aria-expanded", "true")
    }else if(smallModal.ariaExpanded == "true"){
        smallModal.classList.add("modalHidden")
        smallModal.setAttribute("aria-expanded", "false")
    }
}

mainModal.addEventListener("submit", (e)=>{
    mainModalSwitch()
    e.preventDefault()
    smallModalSwitch()
})

smallModalClose.addEventListener("click", smallModalSwitch)

