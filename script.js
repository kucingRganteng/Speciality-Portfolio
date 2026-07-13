const focusBox = document.getElementById('focus-box');
const focusTitle = document.getElementById('focus-title');
const focusText = document.getElementById('focus-text');
const buttons = document.querySelectorAll('.box3 button');

// Save the default setup text
const defaultTitle = focusTitle.innerHTML;
const defaultText = focusText.innerHTML;

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        focusTitle.innerHTML = button.getAttribute('data-title');
        focusText.innerHTML = button.getAttribute('data-focus');
            
        if (button.classList.contains('btn-spec')) {
            // Apply Speciality Theme
            focusBox.classList.add('theme-spec');
            
            // Retaining your dynamic border adjustments
            focusBox.style.borderColor = '#0055ff';
            focusBox.style.boxShadow = '0 0 15px rgba(0, 85, 255, 0.2)';
        } else if (button.classList.contains('btn-notans')) {
            // Apply Notans Theme
            focusBox.classList.add('theme-notans');
            
            // Retaining your dynamic border adjustments
            focusBox.style.borderColor = '#9d00ff';
            focusBox.style.boxShadow = '0 0 15px rgba(157, 0, 255, 0.2)';
        }
    });

    button.addEventListener('mouseleave', () => {
        focusTitle.innerHTML = defaultTitle;
        focusText.innerHTML = defaultText;
        
        // Remove the theme classes when mouse leaves
        focusBox.classList.remove('theme-spec', 'theme-notans');
            
        // Reset borders back to original
        focusBox.style.borderColor = '#51125e';
        focusBox.style.boxShadow = '0 0 15px rgba(255, 140, 0, 0.15)';
    });
});

const translations = {
    en: {
        wiptext1: "This language option is still a work in progress.",
        wiptext2: "> Work In Progress Portfolio",
        welcome: "> Welcome",
        terminalTitle: "> About me",
        welcomeImage: "Welcome.png",
        terminalDesc: "I enjoy making games, learning programming, and creating digital art. Most of the projects I work on are built in Roblox Studio using Luau. Right now, I'm also learning JavaScript, HTML, and CSS through personal projects. In the future, I want to learn Godot and Unity so I can create my own games."        
    },
    id: {
        wiptext1: "Fitur pilihan bahasa masih dalam tahap pengembangan.",
        wiptext2: "> Portofolio masih dalam tahap Pengembangan",
        welcome: "> Selamat Datang",
        terminalTitle: "> Tentang saya",
        welcomeImage: "SelamatDatang.png",
        terminalDesc: "Saya suka bikin game, belajar ngoding, dan menggambar. Kebanyakan proyek yang saya kerjakan dibuat di Roblox Studio menggunakan Luau. Sekarang saya lagi belajar JavaScript, HTML, dan CSS lewat proyek-proyek pribadi. Ke depannya, saya juga pengen belajar Godot dan Unity untuk memperluas pengalaman dalam membuat game."
    }
};

const langSelect = document.getElementById('lang-select');
const welcomeText = document.querySelector('.box1 p');
const terminalTitle = document.querySelector('.box2 h1');
const terminalDesc = document.querySelector('.box2 h3');
const welcomeImage = document.querySelector('.box1 img');
const wiptext1 = document.querySelector('#HHI');
const wiptext2 = document.querySelector('#HHA');

langSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    
    welcomeText.textContent = translations[selectedLanguage].welcome;
    terminalTitle.textContent = translations[selectedLanguage].terminalTitle;
    terminalDesc.textContent = translations[selectedLanguage].terminalDesc;
    wiptext1.textContent = translations[selectedLanguage].wiptext1;
    wiptext2.textContent = translations[selectedLanguage].wiptext2;

    welcomeImage.src = translations[selectedLanguage].welcomeImage;
});