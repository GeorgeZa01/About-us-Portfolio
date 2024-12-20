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
document.addEventListener('DOMContentLoaded', function(){
    let toggle
})
// Group Photo Animation
function showGroupPhoto() {
    const groupImg = document.getElementById('grp-img');

    // Make the image visible and apply the fade-in animation
    groupImg.style.display = 'block';
    groupImg.classList.add('fade-in');
    groupImg.classList.remove('fade-out'); // Ensure fade-out is reset if called again

    // After 10 seconds, apply the fade-out animation
    setTimeout(() => {
        groupImg.classList.remove('fade-in'); // Remove fade-in class
        groupImg.classList.add('fade-out'); // Add fade-out class

        // Wait for fade-out animation to finish before hiding the image
        setTimeout(() => {
            groupImg.style.display = 'none';
        }, 1000); // Match this timeout to the fade-out animation duration (1s)
    }, 10000); // Wait for 10 seconds before fading out
}

