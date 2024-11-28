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
