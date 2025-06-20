// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Nivel 1":
            case "Nivel 1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020c0101010101010101010101010c020201010101010101010101010101010202010106040501010101060405010102020101070809010101010708090101020201010b030a010101010b030a0101020201010101010101010101010101010202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010101010202010106040501010101060405010102020101070809010101010708090101020201010b030a010101010b030a01010202010101010101010101010101010102020c0101010101010101010101010c0202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . 2 2 2 . . . . 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.brick,sprites.builtin.forestTiles14,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles10,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,sprites.builtin.field0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
