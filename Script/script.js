// learn more buttons & alerts
document.addEventListener('DOMContentLoaded', function() {
    // Jemaile's Learn More button event listener
    let jemaileBioButtons = document.getElementsByClassName('Jemaile-bio');
    for (let button of jemaileBioButtons) {
        button.addEventListener('click', function() {
            alert('Jemaile Mohamed: Enjoys Call of Duty Black Ops 6, Python is my favorite programming language!');
        });
    }

    // Chante's Learn More button event listener
    let chanteBioButtons = document.getElementsByClassName('Chante-bio');
    for (let button of chanteBioButtons) {
        button.addEventListener('click', function() {
            alert('Chante Wyngaardt: Enjoys Baking, favourite programming language is python.');
        });
    }

    // Keanan's Learn More button event listener
    let keananBioButtons = document.getElementsByClassName('Keanan-bio');
    for (let button of keananBioButtons) {
        button.addEventListener('click', function() {
            alert('Keanan Oliver: Enjoys reading, favourite programming language is javaScript');
        });
    }
});

// Interactive Theme Selector
document.addEventListener('DOMContentLoaded', function() {
    let colorDropdown = document.getElementById('color');
    
    // Check if the dropdown exists
    if (colorDropdown) {
        colorDropdown.addEventListener('change', function() {
            let selectedColor = colorDropdown.value;

            if (selectedColor === 'default') {
                document.body.style.backgroundColor = ''; // Reset to default
                document.body.style.color = '#000';
                 // Select all <section> elements and loop through them
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.border = '2px solid #000'; // White border color for each section
    });
                
            } 
            else if (selectedColor === 'dark') {
                document.body.style.backgroundColor = '#333'; // Dark background
                document.body.style.color = 'white'; // Light text color
                
              // Select all <section> elements and loop through them
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.border = '3px solid #fff'; // White border color for each section
    });
            } else if (selectedColor === 'colorful') {
                document.body.style.backgroundColor = '#ff6347'; // Tomato color (colorful)
                document.body.style.color = '#fff'; // Light text color
                // Select all <section> elements and loop through them
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.border = '3px solid #fff'; // White border color for each section
    });
            }
        });
    } else {
        console.error('Dropdown element not found!');
    }
});

// Show/Hide Bio Feature

function jemaileToggleBtn(){
    const jemaileToggle = document.querySelector('.Hide-Jemaile-Bio')
    const jemaileBioText = document.querySelector('.jemaile-bio-text')
    if (jemaileToggle.classList.contains('show')){
        jemaileToggle.classList.remove('show')
        jemaileBioText.style.display = 'none'
    }else {
        jemaileToggle.classList.add('show')
        jemaileBioText.style.display = 'block'
    }
}

function chanteToggleBtn(){
    const chanteToggle = document.querySelector('.Hide-Chante-Bio')
    const chanteBioText = document.querySelector('.chante-bio-text')
    if (chanteToggle.classList.contains('show')){
        chanteToggle.classList.remove('show')
        chanteBioText.style.display = 'none'
    }else {
        chanteToggle.classList.add('show')
        chanteBioText.style.display = 'block'
    }
}

function keananToggleBtn(){
    const keananToggle = document.querySelector('.Hide-Keanan-Bio')
    const keananBioText = document.querySelector('.keanan-bio-text')
    if (keananToggle.classList.contains('show')){
        keananToggle.classList.remove('show')
        keananBioText.style.display = 'none'
    }else {
        keananToggle.classList.add('show')
        keananBioText.style.display = 'block'
    }
}

// Group Photo Animation

