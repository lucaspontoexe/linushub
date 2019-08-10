
document.addEventListener('click', (event) => {
    let { clientX, clientY } = event;
    
    instanceLinus(clientX, clientY);
    console.log(clientX);
});

function instanceLinus(x, y) {
    let newNode = document.createElement('img');
    //TODO: Select random pic from an array
    newNode.src = "pics/image0.jpg";
    newNode.className = "linus";
    newNode.draggable = false;
    newNode.style.left = `${x}px`;
    newNode.style.top = `${y}px`;

    document.body.appendChild(newNode);
}