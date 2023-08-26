let sour = document.getElementById('sour');

window.addEventListener('scroll',()=>{
    let value=window.scrollY

    sour.style.left= value * 2+'px'

})

