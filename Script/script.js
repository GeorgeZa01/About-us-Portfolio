// learn more buttons & alerts
document.addEventListener('DOMContentLoaded', function() {
    // Jemaile's Learn More button event listener
    let jemaileBioButtons = document.getElementsByClassName('Jemaile-bio');
    for (let button of jemaileBioButtons) {
        button.addEventListener('click', function() {
            alert('Jemaile Mohamed: Call of Duty Black Ops 6, Python is my favorite programming language!');
        });
    }

    // Chante's Learn More button event listener
    let chanteBioButtons = document.getElementsByClassName('Chante-bio');
    for (let button of chanteBioButtons) {
        button.addEventListener('click', function() {
            alert('Chante Wyngaardt: Passionate about design, loves playing chess in free time.');
        });
    }

    // Keanan's Learn More button event listener
    let keananBioButtons = document.getElementsByClassName('Keanan-bio');
    for (let button of keananBioButtons) {
        button.addEventListener('click', function() {
            alert('Keanan Oliver: Enthusiast in software engineering, enjoys rock climbing on weekends.');
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
                
            } 
            else if (selectedColor === 'dark') {
                document.body.style.backgroundColor = '#333'; // Dark background
                document.body.style.color = 'white'; // Light text color
              // Select all <section> elements and loop through them
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.border = '2px solid #fff'; // White border color for each section
    });
            } else if (selectedColor === 'colorful') {
                document.body.style.backgroundColor = '#ff6347'; // Tomato color (colorful)
                document.body.style.color = '#fff'; // Light text color
                // Select all <section> elements and loop through them
    let sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.border = '2px solid #fff'; // White border color for each section
    });
            }
        });
    } else {
        console.error('Dropdown element not found!');
    }
});

// Show/Hide Bio Feature

// Group Photo Animation

