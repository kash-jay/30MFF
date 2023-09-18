const castButton = document.getElementById('cast-button');
const tipButtons = document.querySelectorAll('.tip-button');
const video = document.getElementById('video');
const closeBtns = document.querySelectorAll('.close-buttn');

castButton.onclick = function () {
    window.location.href = 'cast.html';
}

function scrollAnim() {
    for (var i = 0; i <tipButtons.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = tipButtons[i].getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            tipButtons[i].classList.add('active');
        } else {
            tipButtons[i].classList.remove('active');
        }
    }
}

window.addEventListener("scroll", scrollAnim);
scrollAnim();

window.addEventListener('DOMContentLoaded', () => {
    video.classList.add('anim');
})

var modalActive = 1

tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const num = button.id;
        console.log(num);
        const modal = document.getElementById(`modal-${num}`);
        const modalOpen = document.getElementById(`modal-${modalActive}`);
        modalOpen.style.opacity = '0';
        modalOpen.style.display = 'none';
        modalOpen.style.zIndex = '0';
        modal.style.display = 'flex';
        modal.style.opacity = '1';
        modal.style.zIndex = '2';
        console.log(modalActive);
        modalActive = num;
    })
});

closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const modalOpen = document.getElementById(`modal-${modalActive}`);
        modalOpen.style.display = 'none';
        modalOpen.style.opacity = '0';
        modalOpen.style.zIndex = '0';
    })
});
