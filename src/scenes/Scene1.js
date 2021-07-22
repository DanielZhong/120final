class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
    }

    preload() {
 
        // load image
        this.load.image('background', './assets/background.png');
        this.load.image('road', './assets/ground.png');
        this.load.image('road2', './assets/ground2.png');
        this.load.image('character', './assets/character.png');
        this.load.image('block', './assets/enemy.png');
        this.load.image('star', './assets/star.png');
        
        this.load.audio('jump2', './assets/jump.mp3');
        this.load.audio('dead', './assets/dead.wav');
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    }

    create() {
        this.level = 370;
        this.ACCELERATION = 1500;
        this.JUMP_VELOCITY = -900;
        this.MAX_JUMPS = 2;
        this.DRAG = 600;
        this.MAX_X_VEL = 500;   // pixels/second
        this.MAX_Y_VEL = 5000;
        this.physics.world.gravity.y = 2600;
        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);
        this.ground = this.physics.add.sprite(0, game.config.height - 30, 'road').setOrigin(0,0);
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = false;
        this.ground2 = this.physics.add.sprite(200, 400, 'road2').setOrigin(0,0);
        this.ground2.body.immovable = true;
        this.ground2.body.allowGravity = false;
        this.ground3 = this.physics.add.sprite(700, 250, 'road2').setOrigin(0,0);
        this.ground3.body.immovable = true;
        this.ground3.body.allowGravity = false;
        this.character = this.physics.add.sprite(120, 600, 'character').setScale(0.3).setInteractive({ cursor: 'url(./assets/stop.cur), pointer'});
        this.character.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);
        this.character.setCollideWorldBounds(true);
        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.character, this.ground);
        this.physics.add.collider(this.character, this.ground2);
        this.physics.add.collider(this.character, this.ground3);

        //score
        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

        this.cameras.main.setBounds(0, 0, game.config.width, game.config.height);
    	// make the camera follow the player
    	this.cameras.main.startFollow(this.character);
    	this.cameras.main.setZoom(1.5);
   	 	// set background color, so the sky is not black    

        this.input.on('pointerdown', function(){
			var bullet_speed = 200;
			var bullet_position_correction = 40;
	        var bullet = this.bullets.get(player.x + (look_direction * bullet_position_correction), player.y);
	        //var bullet = this.bullets.get(pointer.x, pointer.y);
	        if (bullet) {
	            bullet.setActive(true);
	            bullet.setVisible(true);
	            bullet.setScale(0.1);
	            bullet.body.velocity.x = look_direction * bullet_speed;
	            
	            // use both x and y for angular shooting
	            //bullet.body.velocity.y = look_direction * bullet_speed;
	            
	            bullet.body.setAllowGravity﻿(false);


				//this.physics.add.overlap(bullet, enemy, this.collideEnemy, null, this);
	        }
	    }, this);
    } 
  

    update() {
        
        this.gamespeed += 0.003;
        this.score += 1;
        this.scoreText.setText('Score: ' + this.score);
        
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
            this.scene.start('Scene1');
        }
        this.random = Phaser.Math.RND.integerInRange(1, 680);
        if(1 == this.random){
            this.block = this.physics.add.sprite(550, 660, 'block').setScale(0.5).setInteractive({ cursor: 'url(./assets/cursor.cur), pointer'});
            this.block.body.setVelocityX(- 150);
            this.block.body.allowGravity = false
            this.block.body.immovable = true;
            this.physics.add.collider(this.character, this.block);
        }
        if(2 == this.random){
            this.block = this.physics.add.sprite(250, 660, 'block').setScale(0.5).setInteractive({ cursor: 'url(./assets/cursor.cur), pointer'});
            this.block.body.setVelocityX(150);
            this.block.body.allowGravity = false
            this.block.body.immovable = true;
            this.physics.add.collider(this.character, this.block);
        }
        if(3 == this.random){
            this.block = this.physics.add.sprite(100, 660, 'block').setScale(0.5).setInteractive({ cursor: 'url(./assets/cursor.cur), pointer'});
            this.block.body.setVelocityX(200);
            this.block.body.allowGravity = false
            this.block.body.immovable = true;
            this.physics.add.collider(this.character, this.block);
        }

        if(4 == this.random){
            this.block = this.physics.add.sprite(750, 660, 'block').setScale(0.5).setInteractive({ cursor: 'url(./assets/cursor.cur), pointer'});
            this.block.body.setVelocityX(- 200);
            this.block.body.allowGravity = false
            this.block.body.immovable = true;
            this.physics.add.collider(this.character, this.block);
        }

        if(5 == this.random){
            this.block = this.physics.add.sprite(400, 660, 'block').setScale(0.5).setInteractive({ cursor: 'url(./assets/cursor.cur), pointer'});
            this.block.body.setVelocityX(- 50);
            this.block.body.allowGravity = false
            this.block.body.immovable = true;
            this.physics.add.collider(this.character, this.block);
        }
        if(6 == this.random){
            this.block = this.physics.add.sprite(850, 660, 'block').setScale(0.5).setInteractive({ cursor: 'url(./assets/cursor.cur), pointer'});
            this.block.body.setVelocityX(- 150);
            this.block.body.allowGravity = false
            this.block.body.immovable = true;
            this.physics.add.collider(this.character, this.block);
        }
        if(7 == this.random){
            this.block = this.physics.add.sprite(950, 660, 'block').setScale(0.5).setInteractive({ cursor: 'url(./assets/cursor.cur), pointer'});
            this.block.body.setVelocityX(- 200);
            this.block.body.allowGravity = false
            this.block.body.immovable = true;
            this.physics.add.collider(this.character, this.block);
        }
        if(8 == this.random){
            this.block = this.physics.add.sprite(1010, 660, 'block').setScale(0.5).setInteractive({ cursor: 'url(./assets/cursor.cur), pointer'});
            this.block.body.setVelocityX(- 200);
            this.block.body.allowGravity = false
            this.block.body.immovable = true;
            this.physics.add.collider(this.character, this.block);
        }
        if(9 == this.random){
            this.star = this.physics.add.sprite(640, 10, 'star').setScale(0.5).setInteractive({ cursor: 'url(./assets/stop.cur), pointer'});
            this.star.tilePositionY -= 150;
        }
        if(10 == this.random){
            this.star = this.physics.add.sprite(100, 10, 'star').setScale(0.5).setInteractive({ cursor: 'url(./assets/stop.cur), pointer'});
            this.star.tilePositionY -= 150;
        }
        if(11 == this.random){
            this.star = this.physics.add.sprite(550, 10, 'star').setScale(0.5).setInteractive({ cursor: 'url(./assets/stop.cur), pointer'});
            this.star.tilePositionY -= 150;
        }
        if(12 == this.random){
            this.star = this.physics.add.sprite(1200, 10, 'star').setScale(0.5).setInteractive({ cursor: 'url(./assets/stop.cur), pointer'});
            this.star.tilePositionY -= 150;
        }
        
        // check keyboard input
        if(cursors.left.isDown) {
            this.character.body.setAccelerationX(-this.ACCELERATION);
            this.character.setFlip(true, false);
            
        } else if(cursors.right.isDown) {
            this.character.body.setAccelerationX(this.ACCELERATION);
            this.character.resetFlip();
            
        } else {
            // set acceleration to 0 so DRAG will take over
            this.character.body.setAccelerationX(0);
            this.character.body.setDragX(this.DRAG);
            
        }
        // check if alien is grounded
	    this.character.isGrounded = this.character.body.touching.down;
	    // if so, we have jumps to spare
	    if(this.character.isGrounded) {
	    	this.jumps = this.MAX_JUMPS;
	    	this.jumping = false;
	    } 
        // allow steady velocity change up to a certain key down duration
	    if(this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 150)) {
	        this.character.body.velocity.y = this.JUMP_VELOCITY;
	        this.jumping = true;
	    }

	    if(this.jumping && Phaser.Input.Keyboard.UpDuration(cursors.up)) {
	    	this.jumps--;
	    	this.jumping = false;
            this.sound.play('jump2'); 
	    }

        if (this.character.body.touching.right || this.character.body.touching.left)
        {
        // player is dead
        this.sound.play('dead'); 
        this.scene.start('over');
        }
    }
    

    shoot(pointer) {


		var bullet_speed = 200;
		var bullet_position_correction = 40;

        var bullet = this.bullets.get(player.x + (look_direction * bullet_position_correction), player.y);
        //var bullet = this.bullets.get(pointer.x, pointer.y);
        if (bullet) {
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.setScale(0.1);
            bullet.body.velocity.x = look_direction * bullet_speed;
            
            // use both x and y for angular shooting
            //bullet.body.velocity.y = look_direction * bullet_speed;
            
            bullet.body.setAllowGravity﻿(false);
        }
    }

    collideBomb (bullet, bomb)
	{

		//enemy.destroy();
		bullet.destroy();

	}

}
