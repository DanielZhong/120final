class over extends Phaser.Scene {
    constructor() {
        super("over");
    }

    preload() {
        // load image
        this.load.image('over', './assets/over.png');
    }

    create() {
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        // place menu
        this.over = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'over').setOrigin(0, 0);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('Scene1');
        }
    }
}
