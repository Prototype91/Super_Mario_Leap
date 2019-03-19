function platforms_create() {
    // Création des plateformes

    platformsGroup = game.add.physicsGroup();

    const PLATFORM_POSITIONS = [
        [ 100, 450, 120 ],
        [ 300, 400, 150 ],
        // ...
    ];

    for (let i = 0; i < PLATFORM_POSITIONS.length; i++) {
        let [x, y, width] = PLATFORM_POSITIONS[i];
        let s = new Phaser.TileSprite(game, x, y, width, 50, 'ground');
        platformsGroup.add(s);
    }

    platformsGroup.forEach(item => {
        item.body.immovable = true;
        item.body.allowGravity = false;
    });
    // --------------------
}