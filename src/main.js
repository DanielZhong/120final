let cursors;
const SCALE = 0.5;


let config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    
    scene: [menu, Scene1, over, win, menu3, menu2, menu1, menubegin]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keySPACE, keyR, keyLEFT, keyRIGHT, keyUP, keyDOWN;
