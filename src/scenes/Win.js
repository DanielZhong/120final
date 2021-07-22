class win extends Phaser.Scene {
    constructor() {
        super("win");
    }

    preload() {
        // load image
        this.load.image('win', './assets/victory.png');
    }

    create() {
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        // place menu
        this.over = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'win').setOrigin(0, 0);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('Scene1');
        }
    }
}
