// script.js
const generatorForm = document.getElementById('generatorForm');
const outputDiv = document.getElementById('output');

generatorForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const visitorName = document.getElementById('visitorName').value;
    generateContent(visitorName);
});

function generateContent(visitorName) {
    const fortunes = [
        "You will find unexpected joy today.",
        "Take risks now; future favours the bold!",
        "Good news will come to you by mail.",
        "Your hard work will soon pay off.",
        "A pleasant surprise is waiting for you.",
        "Your determination will bring you success."
    ];

    const outfits = [
        "Wear something comfortable and casual today.",
        "Dress up and embrace your inner elegance.",
        "Try mixing and matching different styles for a unique look.",
        "Go for a sporty outfit and stay active.",
        "Experiment with bold colors and patterns.",
        "Opt for a cozy sweater and jeans combo."
    ];

    const meals = [
        "Indulge in a hearty homemade pasta dish.",
        "Treat yourself to a delicious sushi dinner.",
        "Enjoy a refreshing salad with seasonal vegetables.",
        "Savor a comforting bowl of soup.",
        "Try cooking a new recipe you've been curious about.",
        "Order your favorite takeout for a relaxing night in."
    ];

    const activities = [
        "Go for a scenic hike in nature.",
        "Visit a local museum or art gallery.",
        "Attend a yoga class for some relaxation.",
        "Explore a new neighborhood in your city.",
        "Host a game night with friends or family.",
        "Volunteer for a cause you're passionate about."
    ];

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const randomOutfit = outfits[Math.floor(Math.random() * outfits.length)];
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];

    const contentOptions = [
        `${visitorName}, your fortune is: ${randomFortune}`,
        `${visitorName}, today's outfit suggestion: ${randomOutfit}`,
        `${visitorName}, enjoy this delicious meal idea: ${randomMeal}`,
        `${visitorName}, here's an activity suggestion for you: ${randomActivity}`
    ];

    const randomContent = contentOptions[Math.floor(Math.random() * contentOptions.length)];

    outputDiv.textContent = randomContent;
    restyle();
}

function restyle() {
    const colors = ['#ff6347', '#4682b4', '#32cd32', '#ffa500', '#9370db'];
    const fonts = ['Arial', 'Verdana', 'Georgia', 'Times New Roman', 'Courier New'];
    const sizes = ['16px', '18px', '20px', '22px', '24px'];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

    outputDiv.style.color = randomColor;
    outputDiv.style.fontFamily = randomFont;
    outputDiv.style.fontSize = randomSize;
}
