let game = new Phaser.Game(960, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    game.load.image('scene', 'assets/visuel3.jpg');
    game.load.image('ground', 'assets/ground.jpg');
    game.load.image('peach', 'assets/peach.png');
    game.load.image('brique', 'assets/brique.png');
    game.load.image('spikes', 'assets/spikes.png');
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
let peach; 
let brique; 
let spikes;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.world.setBounds(0, 0, 3000, 600);

    scene = game.add.tileSprite(0, 0, 3000, 600, 'scene');

    game.physics.arcade.gravity.y = 300;

    player_create();
    platforms_create();

    ground = game.add.tileSprite(0, 545, 1000, 55, 'ground');
    brique = game.add.tileSprite(850, 250, 24, 24, 'brique');
    //spikes = game.add.tileSprite(850, 250, 120, 120, 'spikes');


    game.physics.enable([ player, ground ], Phaser.Physics.ARCADE);
    game.physics.enable([ peach, brique ], Phaser.Physics.ARCADE);

    ground.body.collideWorldBounds = true;
    ground.body.immovable = true;
    ground.body.allowGravity = false;

    brique.body.collideWorldBounds = true;
    brique.body.immovable = true;
    brique.body.allowGravity = false;
    //brique.scale.setTo(0.4, 0.4);

    peach.body.collideWorldBounds = true;
    peach.body.immovable = true;
    peach.body.allowGravity = false;

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

/* Fonction uptade gére ici les collisions player / sol puis le déplacement de la caméra */

function update() {

    game.physics.arcade.collide(player, ground);
    game.physics.arcade.collide(player, platformsGroup, (player, platform) => {
        // platform.kill();
    });
    game.physics.arcade.collide(player, peach);

    game.camera.follow(player);

    ground.position.x = game.camera.position.x;

    /* Condition pour savoir si utiliser le LEAP ou alors les touches du clavier */

    player_update();

}

function render () {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    //game.debug.body(player);
    //game.debug.body(ground);
    //game.debug.body(peach);
    //game.debug.body(brique);
    //game.debug.bodyInfo(player, 16, 24);

}