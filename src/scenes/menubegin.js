class menubegin extends Phaser.Scene {
    constructor() {
        super("menubegin");
    }

    preload() {
        this.load.image('start', './assets/start.png');
    }

    create() {
        this.count = 50;
        this.start = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'start').setOrigin(0, 0);
    }
    

    update() {
        this.count -= 1;
        this.gameOverText = this.add.text(
            game.config.width/2 - 100, 
            game.config.height/2 - 170, 
            "Begin!", 
            { fontFamily: "Papyrus, Comic Sans, serif",
            textAlign: 'center',
            fontSize: "64px"
        });
    
        if(this.count == 0){
            this.scene.start('Scene1');
        }
    }
}
