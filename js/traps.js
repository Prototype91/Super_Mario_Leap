function traps_create() {
    // Création des plateformes

    trapsGroup = game.add.physicsGroup();

    const TRAP_POSITIONS = [
        [200, 520, 111]
    ]

    for (let i = 0; i < TRAP_POSITIONS.length; i++) {
        let [x, y, width] = TRAP_POSITIONS[i];
        let s = new Phaser.TileSprite(game, x, y, width, 111, 'spikes');
        trapsGroup.add(s);
    }

    trapsGroup.forEach(item => {
        item.body.immovable = true;
        item.body.allowGravity = false;
    });
    // --------------------
}