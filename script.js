const aside = document.querySelector('aside')
const photoContainer = document.getElementById('photo-container')
const photoProfile = document.getElementById('photo-profile')
const photoCallAction = document.getElementById('photo-call-action')

function handleMouseOver() {
    photoContainer.classList.remove('floating')
    photoContainer.classList.add('hovering')
}
function handleMouseLeave() {
    photoContainer.classList.remove('hovering')
    photoContainer.classList.add('floating')
}
function handleMouseClick() {
    photoContainer.classList.remove('hovering')
    photoContainer.classList.remove('floating')
    photoContainer.classList.add('no-hover')
    photoContainer.classList.add('photoContainerChanges')
    setTimeout(() => {
        photoContainer.style.height = '400px'
    }, 450);
    photoProfile.classList.add('photoProfileChanges')
    setTimeout(() => {
        photoProfile.style.borderRadius = '40px'
    }, 450);
    photoCallAction.classList.remove('active')
    photoCallAction.classList.add('hidden')
    setTimeout(() => {
        aside.classList.add('asideChanges')
    }, 1000); 
    photoContainer.removeEventListener('mouseover', handleMouseOver)
    photoContainer.removeEventListener('mouseleave', handleMouseLeave)
}

photoContainer.addEventListener('mouseover', handleMouseOver)
photoContainer.addEventListener('mouseleave', handleMouseLeave)
photoContainer.addEventListener('click', handleMouseClick)