// Initialize fallback array
let randompics = ["https://media.discordapp.net/attachments/609890487595434008/609895709524623390/image0.jpg?width=319&height=426",
    "https://media.discordapp.net/attachments/609890487595434008/609895672006574080/image1.jpg?width=319&height=426",
];


// Using the good ol' XHR request
const xhr = new XMLHttpRequest();
xhr.onload = function () {
    console.log('gottem', JSON.parse(xhr.response));

    // If we got a valid status code (2XX), replace the fallback
    if (xhr.status >= 200 && xhr.status < 300) randompics = JSON.parse(xhr.response);
};

xhr.open('GET', 'pics.json');
xhr.send();

// For every click, spawn a new Linus
document.addEventListener('click', (event) => {
    let { clientX, clientY } = event;
    instanceLinus(clientX, clientY);
});

function instanceLinus(x, y) {
    //Set up a new node
    let newNode = document.createElement('img');

    newNode.src = getRandomLinusPic();
    newNode.className = "linus";
    newNode.draggable = false;
    newNode.style.left = `${x}px`;
    newNode.style.top = `${y}px`;

    document.body.appendChild(newNode);
}

function getRandomLinusPic() {
    let number = Math.floor(Math.random() * (randompics.length));
    console.log(number);
    return randompics[number];
}