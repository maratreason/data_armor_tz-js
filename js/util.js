function getRandomColor(inputColors) {
    const randomIndex = Math.floor(Math.random() * inputColors.length);
    return inputColors[randomIndex];
}

function getSortedColor(inputColors, index) {
    return inputColors[index];
}

function renderCircles(wrapper, circles = []) {
    wrapper.innerHTML = "";

    circles.forEach(circle => {
        wrapper.appendChild(circle.create());
    });

    return wrapper;
}

function splitRgb(rgb) {
    return ((rgb.split("(")[1]).split(")")[0]).split(", ")[0];
}