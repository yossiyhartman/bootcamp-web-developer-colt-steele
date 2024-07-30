
const containerButton = document.querySelector('.container-button');
const containerColor = document.querySelector('.container-color');

function generateColor() {
    const red = Math.floor(Math.random() * (255 + 1));
    const green = Math.floor(Math.random() * (255 + 1));
    const blue = Math.floor(Math.random() * (255 + 1));

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    containerColor.innerText = `rgb(${red}, ${green}, ${blue})`;
}

containerButton.addEventListener('click', generateColor)