castButton = document.getElementById('cast-button');
tipButtons = document.querySelectorAll('.tip-button');
video = document.getElementById('video');
closeBtns = document.querySelectorAll('.close-buttn');

castButton.onclick = function () {
    window.location.href = 'cast.html';
}

function scrollAnim() {
    for (var i = 0; i <tipButtons.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = tipButtons[i].getBoundingClientRect().top;
        var elementVisible = 50;
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

modalActive = 1

tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
        num = button.id;
        console.log(num);
        modal = document.getElementById(`modal-${num}`);
        modalOpen = document.getElementById(`modal-${modalActive}`);
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
        modalOpen = document.getElementById(`modal-${modalActive}`);
        modalOpen.style.display = 'none';
        modalOpen.style.opacity = '0';
        modalOpen.style.zIndex = '0';
    })
});
