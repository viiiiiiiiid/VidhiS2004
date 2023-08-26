let sour = document.getElementById('sour');
let olivia=document.getElementById('olivia');

window.addEventListener('scroll',()=>{
    let value=window.scrollY

    sour.style.left= value * 2+'px'

})

