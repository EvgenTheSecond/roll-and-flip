const diceMap = {
    1: 'images/dice-six-faces-one.png',
    2: 'images/dice-six-faces-two.png',
    3: 'images/dice-six-faces-three.png',
    4: 'images/dice-six-faces-four.png',
    5: 'images/dice-six-faces-five.png',
    6: 'images/dice-six-faces-six.png'
}

document.getElementById('roll-die').addEventListener('click', function() {
    const result = Math.floor(Math.random() * 6) + 1;
    const dieImage = document.getElementById('die-image');

    // Add the animation class
    dieImage.classList.add('die-rolling');

    // Change the die image source after the animation ends
    setTimeout(() => {
        dieImage.classList.remove('die-rolling');
        dieImage.src = diceMap[result];
        document.getElementById('result').textContent = `Die rolled: ${result}`;
    }, 1000); // Match the duration of the animation
});
