backButton = document.getElementById('back-button');
actorInfoSections = document.querySelectorAll('.actor-info');

backButton.onclick = function () {
    window.location.href = 'index.html';
}

function scrollAnim() {
    for (var i = 0; i <actorInfoSections.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = actorInfoSections[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            actorInfoSections[i].classList.add('active');
        } else {
            actorInfoSections[i].classList.remove('active');
        }
    }
}

window.addEventListener("scroll", scrollAnim);
scrollAnim();