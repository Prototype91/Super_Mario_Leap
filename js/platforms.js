function platforms_create() {
    // Création des plateformes

    platformsGroup = game.add.physicsGroup();

    const PLATFORM_POSITIONS = [
        [100, 450, 24],
        [300, 400, 24],
        [500, 400, 24],
        // ... 465
    ];

    const TRAP_POSITIONS = [
        [200, 520, 111]
    ]

    for (let i = 0; i < PLATFORM_POSITIONS.length; i++) {
        let [x, y, width] = PLATFORM_POSITIONS[i];
        let s = new Phaser.TileSprite(game, x, y, width, 24, 'brique');
        platformsGroup.add(s);
    }
    for (let i = 0; i < TRAP_POSITIONS.length; i++) {
        let [x, y, width] = TRAP_POSITIONS[i];
        let s = new Phaser.TileSprite(game, x, y, width, 111, 'spikes');
        platformsGroup.add(s);
    }

    platformsGroup.forEach(item => {
        item.body.immovable = true;
        item.body.allowGravity = false;
    });
    // --------------------
}