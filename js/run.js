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
let platformsGroup;
let platformSprite;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.world.setBounds(0, 0, 3000, 600);

    scene = game.add.tileSprite(0, 0, 3000, 600, 'scene');

    game.physics.arcade.gravity.y = 300;

    player_create();

    platforms_create();

    ground = game.add.tileSprite(0, 545, 1000, 55, 'ground');

    game.physics.enable([ player, ground ], Phaser.Physics.ARCADE);

    ground.body.collideWorldBounds = true;
    ground.body.immovable = true;
    ground.body.allowGravity = false;

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

/* Fonction uptade gére ici les collisions player / sol puis le déplacement de la caméra */

function update() {

    game.physics.arcade.collide(player, ground);
    game.physics.arcade.collide(player, platformsGroup);

    game.camera.follow(player);

    ground.position.x = game.camera.position.x;

    /* Condition pour savoir si utiliser le LEAP ou alors les touches du clavier */

    player_update();

}

function render () {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    game.debug.body(player);
    game.debug.body(ground);
    //game.debug.bodyInfo(player, 16, 24);

}