// logo button scroll smooth

const logobtn = document.getElementById("logo")

logobtn.addEventListener('click', () =>{
    window.scroll({
        behavior : 'smooth',
        top: 0,
    })
})

