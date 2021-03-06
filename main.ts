scene.onOverlapTile(SpriteKind.Player, myTiles.tile31, function (sprite, location) {
    game.over(true)
})
color.setPalette(
color.originalPalette
)
let charlie = sprites.create(img`
    ....................
    ....................
    ....................
    ................d...
    ............1..d....
    .............11.....
    ............11f1....
    ...........111111...
    .dd..111111111111...
    dddd1111111111......
    ddd1111111111.......
    dd.1111111111.......
    dd..11111111........
    d....111111.........
    .....11..11.........
    .....11..11.........
    .....1f..1f.........
    ......ff..ff........
    ....................
    ....................
    `, SpriteKind.Player)
controller.moveSprite(charlie)
let red = sprites.create(img`
    ....................
    ....................
    .................2..
    .............d..2...
    ..............dd....
    .............ddfd...
    ............dddddd..
    ..22..dddddddddddd..
    .2222dddddddddd.....
    .222dddddddddd......
    .22.dddddddddd......
    .22..dddddddd.......
    .2....dddddd........
    ......dd..dd........
    ......dd..dd........
    ......df..df........
    .......ff..ff.......
    ....................
    ....................
    ....................
    `, SpriteKind.Player)
red.setPosition(24, 39)
let blue = sprites.create(img`
    ....................
    ....................
    ....................
    ................8...
    ............9..8....
    .............99.....
    ............99f9....
    ...........999999...
    .88..999999999999...
    88889999999999......
    8889999999999.......
    88.9999999999.......
    88..99999999........
    8....999999.........
    .....99..99.........
    .....99..99.........
    .....9f..9f.........
    ......ff..ff........
    ....................
    ....................
    `, SpriteKind.Player)
blue.setPosition(12, 55)
tiles.setTilemap(tiles.createTilemap(hex`100010001919190401010401010101010104010119191904010103010101010101030101031b1b0301010101010301010101010101010101010101010401010101010101030303030303030303030304010101010407080401010101010101040101030304090a0401010101010e0d1101010401041a1a0401010401010b1413010104010401010401010401010b16010101010104010104010104010117170101010101040101040404040101181801010101010401010401010401010c150d0d05060d0401010401010101010f1010120506020401010101010101010401010b0506020401010101010401010401010b0506020401010401010401010101010b050602`, img`
    . . . 2 . . 2 . . . . . . 2 . . 
    . . . 2 . . 2 . . . . . . 2 . . 
    2 . . 2 . . . . . 2 . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
    2 . . 2 . . . . . . . 2 . . 2 2 
    2 . . 2 . . . . . 2 2 2 . . 2 . 
    2 . . 2 . . 2 . . 2 2 2 . . 2 . 
    2 . . 2 . . 2 . . 2 2 . . . . . 
    2 . . 2 . . 2 . . . . . . . . . 
    2 . . 2 2 2 2 . . . . . . . . . 
    2 . . 2 . . 2 . . 2 2 2 2 . . 2 
    2 . . 2 . . . . . 2 2 2 2 . . 2 
    2 . . . . . . . . 2 . . 2 . . 2 
    2 . . . . . 2 . . 2 . . 2 . . 2 
    2 . . 2 . . 2 . . . . . 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile9,myTiles.tile11,myTiles.tile12,myTiles.tile14,myTiles.tile17,myTiles.tile15,myTiles.tile1,myTiles.tile8,myTiles.tile10,myTiles.tile13,myTiles.tile16,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile24,myTiles.tile18,myTiles.tile25,myTiles.tile26,myTiles.tile27,myTiles.tile31,myTiles.tile33,myTiles.tile19,myTiles.tile23,myTiles.tile28,myTiles.tile29,myTiles.tile30,myTiles.tile32], TileScale.Sixteen))
scene.cameraFollowSprite(charlie)
tiles.placeOnRandomTile(charlie, myTiles.tile27)
game.showLongText("Blue: Heeey Charlie, hey Charlie, wake up!", DialogLayout.Bottom)
game.showLongText("Pink: Yeah Charlie, you silly sleepy head, wake up!", DialogLayout.Bottom)
game.showLongText("Charlie : Ugh, oh god you guys, this better be pretty freaking Important. So is the meadow on fire?", DialogLayout.Bottom)
game.showLongText("Blue: No Charlie, we found a map to Candy Mountain! Candy Mountain Charlie!", DialogLayout.Bottom)
game.showLongText("Pink: Yeah Charlie, we’re going Too Candy Mountain , come with us Charlie!", DialogLayout.Bottom)
game.showLongText("Blue: Yeah Charlie, It’ll be an adventure; we’re going on an adventure Charlie!", DialogLayout.Bottom)
game.showLongText("Charlie: Yeah, Candy Mountain right, I’m just gonna, you know. Go back to sleep now.", DialogLayout.Bottom)
game.showLongText("Blue: Noooooo, Charlie , you have to come with us to Candy Mountain.", DialogLayout.Bottom)
game.showLongText("Pink: Yeah Charlie, Candy Mountain! It’s a land of sweets & joy, and joyness.", DialogLayout.Bottom)
red.follow(charlie)
scene.cameraShake(4, 2000)
pause(2000)
game.showLongText("Charlie: Please stop bouncing on me.", DialogLayout.Bottom)
red.setPosition(24, 39)
game.showLongText("Blue: Candy Mountain Charlie!!!!", DialogLayout.Bottom)
game.showLongText("Pink: Yeah, Candy Mountain!", DialogLayout.Bottom)
game.showLongText("Charlie: Alright fine! I’ll go with you to Candy Mountain.", DialogLayout.Bottom)
blue.follow(charlie)
for (let index = 0; index < 10; index++) {
    red.say("lalala")
    blue.say("lalala")
}
