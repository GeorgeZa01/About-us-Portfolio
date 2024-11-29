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
            } else if (selectedColor === 'colorful') {
                document.body.style.backgroundColor = '#ff6347'; // Tomato color (colorful)
                document.body.style.color = '#fff'; // Light text color
            }
        });
    } else {
        console.error('Dropdown element not found!');
    }
});

// Show/Hide Bio Feature

// Group Photo Animation

