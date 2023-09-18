const backButton = document.getElementById('back-button');
const actorInfoSections = document.querySelectorAll('.actor-info');

backButton.onclick = function () {
    window.location.href = 'index.html';
}

function scrollAnim() {
    for (var i = 0; i <actorInfoSections.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = actorInfoSections[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            actorInfoSections[i].classList.add('active');
        } else {
            actorInfoSections[i].classList.remove('active');
        }
    }
}

window.addEventListener("scroll", scrollAnim);
scrollAnim();