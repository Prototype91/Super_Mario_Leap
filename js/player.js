const MOVE_AREA = (window.innerWidth / 4);

function player_create() {
    player = game.add.sprite(32, 320, 'dude');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.collideWorldBounds = true;
    player.body.gravity.y = 1000;
    player.body.maxVelocity.y = 500;
    player.body.setSize(20, 32, 5, 16);

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);
}

function player_update()  {
    
    player.body.velocity.x = 0;

    console.log(LEAP.position.x)

    if (LEAP.connected == true){
        player_move_leap();

    }else{
        player_move();
    }
}

function player_move_leap() {
    // player.body.velocity.x = 100 * (LEAP.rotation * -1);

    if (LEAP.position.x > game.camera.width * 0.5 + MOVE_AREA) {
        player.body.velocity.x = 150;
    } else if (LEAP.position.x < game.camera.width * 0.5 - MOVE_AREA) {
        player.body.velocity.x = -150;
    }

    if (facing != 'left')
    {
        player.animations.play('left');
        facing = 'left';
    }else if (facing != 'right'){
        player.animations.play('right');
        facing = 'right';
        // player.body.position.x = LEAP.position.x;
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

    if (LEAP.grab && (player.body.onFloor() || player.body.touching.down) && game.time.now > jumpTimer)
    {
        player.body.velocity.y = -500;
        jumpTimer = game.time.now + 750;
    }
}

function player_move() {
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

    /* Condition pour gérer les sauts dans tous les cas  */
    
    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down) && game.time.now > jumpTimer)
    {
        player.body.velocity.y = -500;
        jumpTimer = game.time.now + 750;
    }
}