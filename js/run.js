let game = new Phaser.Game(960, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    game.load.image('scene', 'assets/visuel3.jpg');
    game.load.image('ground', 'assets/ground.jpg');

}

let player;
let facing = 'right';
let jumpTimer = 0;
let cursors;
let jumpButton;
let scene;
let ground;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.world.setBounds(0, 0, 1000, 600);

    scene = game.add.tileSprite(0, 0, 960, 600, 'scene');

    game.physics.arcade.gravity.y = 300;

    player = game.add.sprite(32, 320, 'dude');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.collideWorldBounds = true;
    player.body.gravity.y = 1000;
    player.body.maxVelocity.y = 500;
    player.body.setSize(20, 32, 5, 16);

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    ground = game.add.tileSprite(0, 545, 1000, 55, 'ground');

    game.physics.enable([ player, ground ], Phaser.Physics.ARCADE);

    player.body.collideWorldBounds = true;
    //player.body.bounce.set(1);

    ground.body.collideWorldBounds = true;
    ground.body.immovable = true;
    ground.body.allowGravity = false;

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

/* Fonction uptade gére ici les collisions player / sol puis le déplacement de la caméra */

function update() {

    game.physics.arcade.collide(player, ground);

    player.body.velocity.x = 0;

    game.camera.follow(player);

    /* Condition pour savoir si utiliser le LEAP ou alors les touches du clavier */

    if (LEAP.connected == true){
        if (facing != 'left')
        {
            player.animations.play('left');
            facing = 'left';
            player.body.velocity.x = -LEAP.position.x;
        }else if (facing != 'right'){
            player.animations.play('right');
            facing = 'right';
            player.body.velocity.x = LEAP.position.x;
        }else{
            if (facing != 'idle'){
                player.animations.stop();
            if (facing == 'left'){
                player.frame = 0;
            }else{
                player.frame = 5;
            }
                facing = 'idle';
            }
        }
    }else{
        if (cursors.left.isDown){

            player.body.velocity.x = -150;

            if (facing != 'left')
            {
                player.animations.play('left');
                facing = 'left';
            }
        }
        else if (cursors.right.isDown)
        {
            player.body.velocity.x = 150;

            if (facing != 'right')
            {
                player.animations.play('right');
                facing = 'right';
            }
        }
        else
        {
            if (facing != 'idle')
            {
                player.animations.stop();

                if (facing == 'left')
                {
                    player.frame = 0;
                }
                else
                {
                    player.frame = 5;
                }

                facing = 'idle';
            }
        }
    }

        /* Condition pour gérer les sauts dans tous les cas  */
        
        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down) && game.time.now > jumpTimer)
        {
            player.body.velocity.y = -500;
            jumpTimer = game.time.now + 750;
        }

    }

function render () {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    game.debug.body(player);
    game.debug.body(ground);
    //game.debug.bodyInfo(player, 16, 24);

}