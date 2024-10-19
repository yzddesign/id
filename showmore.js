function showMore1() {
    var hiddenCards = document.querySelectorAll('.hidden1');
    var btnText = document.getElementById("showMoreBtn1");

    hiddenCards.forEach((card, index) => {
        // Show all hidden cards
        card.classList.remove('hidden1');
    });

    // Change button text after showing all cards
    btnText.style.display = 'none'; // Hide the button after cards are shown
}

function showMore2() {
    var hiddenCards = document.querySelectorAll('.hidden2');
    var btnText = document.getElementById("showMoreBtn2");

    hiddenCards.forEach((card, index) => {
        // Show all hidden cards
        card.classList.remove('hidden2');
    });

    // Change button text after showing all cards
    btnText.style.display = 'none'; // Hide the button after cards are shown
}

function showMore3() {
    var hiddenCards = document.querySelectorAll('.hidden3');
    var btnText = document.getElementById("showMoreBtn3");

    hiddenCards.forEach((card, index) => {
        // Show all hidden cards
        card.classList.remove('hidden3');
    });

    // Change button text after showing all cards
    btnText.style.display = 'none'; // Hide the button after cards are shown
}

function showMore4() {
    var hiddenCards = document.querySelectorAll('.hidden4');
    var btnText = document.getElementById("showMoreBtn4");

    hiddenCards.forEach((card, index) => {
        // Show all hidden cards
        card.classList.remove('hidden4');
    });

    // Change button text after showing all cards
    btnText.style.display = 'none'; // Hide the button after cards are shown
}