function newPlayableCharacter(x, y) {
    const element = newImage('assets/green-character/static.gif')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/green-character/static.gif`
        }
        if (direction === 'west') {
            element.src = `assets/green-character/west.gif`
        }
        if (direction === 'north') {
            element.src = `assets/green-character/north.gif`
        }
        if (direction === 'east') {
            element.src = `assets/green-character/east.gif`
        }
        if (direction === 'south') {
            element.src = `assets/green-character/south.gif`
        }
    }

    const player = {
        element: element,
        x: x,
        y: y
    };

    move(element).withArrowKeys(x, y, handleDirectionChange);

    return player;    
}

function checkCollision(player, npc) {
    const playerRect = player.element.getBoundingClientRect();
    const npcRect = npc.element.getBoundingClientRect();

    return !(
        playerRect.right < npcRect.left ||
        playerRect.left > npcRect.right ||
        playerRect.bottom < npcRect.top ||
        playerRect.top > npcRect.bottom
    );
}

function handleCollision(player, npc) {
    if (checkCollision(player, npc)) {
        const playAgain = confirm("You collided with the non-player character. Do you want to play again?");
        if (playAgain) {
            alert("Refresh to restart the game...");
        } else {
            alert("Game over!");
        }
    }
}