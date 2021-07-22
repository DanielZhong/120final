class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('background', './assets/gamebgm.wav');
        
        // load image
        this.load.image('start', './assets/start.png');
        
    }

    create() {
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.input.setDefaultCursor('url(./assets/target.cur), pointer');
        this.sound.play('background'); //background music

        // place menu
        this.start = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'start').setOrigin(0, 0);
        
        
            

        

    }
    

    update() {
        
        if (Phaser.Input.Keyboard.JustDown(keySPACE) || game.input.mousePointer.isDown) {

            this.scene.start('menu3');
        }
        
        
    }
}
