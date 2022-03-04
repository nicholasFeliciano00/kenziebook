const profileImage = document.getElementById('profile_img');
const settingsMenu = document.querySelector('.settings-menu');

const settingsMenuToggle = () => {
    settingsMenu.classList.toggle('settings-menu-height');
}

profileImage.addEventListener('click', settingsMenuToggle);

