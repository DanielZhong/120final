//game title: The Space Trooper
//collaborator names: Daniel Zhong, Tingyuan Lu, Tszho Mak
//date completed: 7/22/2021

//creative tilt justification: 
//1. We have great music and theme(Space style theme). We got jumping and dead sound effect and Sci-Fi style background music. 
//2. The game will get more and more monsters to increase difficulty. (in Scene1.js update())
//3. You can click on the monster to kill them that will let you have more space to step on
//4. The cursor has different styles for 'idle', 'player' and 'monster'.

// All music assets are from free music website  https://www.aigei.com/
// All graphical assets which were not made by us are from free assets website https://www.58pic.com/tupian/donghuatu.html



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


