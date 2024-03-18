const btn_up = document.querySelector('.btn_up');

btn_up.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})