function changeMode(size, weight, transform, background, color)
{
    return function ()
    {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

function main()
{
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    const buttonSpooky = document.createElement('button');
    buttonSpooky.textContent = 'Spooky';
    buttonSpooky.onclick = spooky;

    const buttonDark = document.createElement('button');
    buttonDark.textContent = 'Dark mode';
    buttonDark.onclick = darkMode;
    
    const buttonScream = document.createElement('button');
    buttonScream.textContent = 'Scream mode';
    buttonScream.onclick = screamMode;

    document.body.appendChild(buttonSpooky);
    document.body.appendChild(buttonDark);
    document.body.appendChild(buttonScream);
}

main();
