const focusBox = document.getElementById('focus-box');
const focusTitle = document.getElementById('focus-title');
const focusText = document.getElementById('focus-text');
const buttons = document.querySelectorAll('.box3 button');

const defaultTitle = focusTitle.innerHTML;
const defaultText = focusText.innerHTML;

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        focusTitle.innerHTML = button.getAttribute('data-title');
        focusText.innerHTML = button.getAttribute('data-focus');
            
        if (button.classList.contains('btn-spec')) {
            focusBox.classList.add('theme-spec');
            
            focusBox.style.borderColor = '#0055ff';
            focusBox.style.boxShadow = '0 0 15px rgba(0, 85, 255, 0.2)';
        } else if (button.classList.contains('btn-notans')) {
            focusBox.classList.add('theme-notans');
            
            focusBox.style.borderColor = '#9d00ff';
            focusBox.style.boxShadow = '0 0 15px rgba(157, 0, 255, 0.2)';
        }
    });

    button.addEventListener('mouseleave', () => {
        focusTitle.innerHTML = defaultTitle;
        focusText.innerHTML = defaultText;
        
        focusBox.classList.remove('theme-spec', 'theme-notans');
            
        focusBox.style.borderColor = '#51125e';
        focusBox.style.boxShadow = '0 0 15px rgba(255, 140, 0, 0.15)';
    });
});