// -- Fonction pour la création de nos briques 
function platforms_create() {

    // -- Ajouts d'un objet de type physicsGroup sur nos platforms(briques)
    platformsGroup = game.add.physicsGroup();

    // -- Tableau des positions de nos briques
    const PLATFORM_POSITIONS = [
        [20, 450, 24],
        [45, 450, 24],

        [124, 425, 24],
        [149, 425, 24],

        [230, 380, 24],
        [255, 380, 24],

        [330, 320, 24],
        [355, 320, 24],
        
        [230, 270, 24],
        [205, 270, 24],

        [360, 225, 24],
        [385, 225, 24],

        [460, 200, 24],
        [485, 200, 24],

        [560, 280, 24],
        [585, 280, 24],

        [660, 400, 24],
        [685, 400, 24],

        [760, 490, 24],
        [785, 490, 24],

        [860, 410, 24],
        [885, 410, 24],

        [960, 450, 24],
        [985, 450, 24],

        [1100, 480, 24],
        [1125, 480, 24],

        [1200, 480, 24],
        [1225, 480, 24],

        [1300, 480, 24],
        [1325, 480, 24],

        [1400, 480, 24],
        [1425, 480, 24],




        [1500, 480, 24],
        [1525, 480, 24],

        [1625, 430, 24],
        [1650, 430, 24],

        [1750, 400, 24],

        [1850, 400, 24],

        [1950, 400, 24],

        [2050, 400, 24],

        [2150, 400, 24],

        [2250, 400, 24],
        // ... 465
    ];

    // -- Boucle pour l'affichage de nos briques 
    for (let i = 0; i < PLATFORM_POSITIONS.length; i++) {
        let [x, y, width] = PLATFORM_POSITIONS[i];
        let s = new Phaser.TileSprite(game, x, y, width, 24, 'brique');
        platformsGroup.add(s);
    }

    // -- Gérer la gavité et l'immobilité des éléments briques
    platformsGroup.forEach(item => {
        item.body.immovable = true;
        item.body.allowGravity = false;
    });

}