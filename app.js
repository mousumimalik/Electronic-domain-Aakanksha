
// secondary-navbar
const secondaryNavbar = document.querySelector('.sec-container');
window.addEventListener('scroll', function(event) {
    const scrollHeight = event.target.scrollingElement.scrollTop;
    console.log(scrollHeight);
    if(scrollHeight >= 500){
        secondaryNavbar.classList.remove('hide');
    }else{
        secondaryNavbar.classList.add('hide');
    }
});
