const aside = document.querySelector('aside')
const photoContainer = document.getElementById('photo-container')
const photoProfile = document.getElementById('photo-profile')
const photoCallAction = document.getElementById('photo-call-action')

function handleMouseOver(){
    photoContainer.classList.remove('floating')
    photoContainer.classList.add('hovering')
}
function handleMouseLeave(){
    photoContainer.classList.remove('hovering')
    photoContainer.classList.add('floating')
}

photoContainer.addEventListener('mouseover', handleMouseOver)
photoContainer.addEventListener('mouseleave', handleMouseLeave)