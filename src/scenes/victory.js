class victory extends Phaser.Scene {
    constructor() {
        super("victory");
    }

    preload() {
        // load image
        this.load.image('victory', './assets/victory.png');
    }

    create() {
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        // place menu
        this.victory = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'victory').setOrigin(0, 0);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('Scene1');
        }
    }
}
