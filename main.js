
document.addEventListener('click', (event) => {
    let { clientX, clientY } = event;
    
    instanceLinus(clientX, clientY);
    console.log(clientX);
});

function instanceLinus(x, y) {
    let newNode = document.createElement('img');
    //TODO: Improve random number generator
    let random = Math.floor(Math.random()*7);
    newNode.src = `pics/image${random}.jpg`;
    newNode.className = "linus";
    newNode.draggable = false;
    newNode.style.left = `${x}px`;
    newNode.style.top = `${y}px`;

    document.body.appendChild(newNode);
}