const logobtn = document.getElementById("logo")


logobtn.addEventListener('click', () =>{
    window.scroll({
        behavior : 'smooth',
        top: 0,
    })
})

// check if te scroll was trigged

const lastScrollTop = 612

window.addEventListener("scroll", () =>{
    const st = window.pageYOffset

    if (st > lastScrollTop){
        document.getElementById("arrowdown").style.display = "none"
    }
})