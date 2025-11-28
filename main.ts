scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.gameOver(true)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 7 7 7 7 7 . . . . . . 
    . . . . 7 7 f 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 7 . . . . . . 
    . . . . 7 f f f f 7 . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . . 
    . . . . 7 7 7 7 7 . 7 . . . . . 
    . 7 . . 7 7 7 7 7 . . . . . . . 
    . 7 7 7 7 7 7 7 7 . . . . . . . 
    . . . . 7 7 7 7 7 . . . . . . . 
    . . . . 7 . . . 7 . . . . . . . 
    . . . . 7 7 . . 7 7 . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 400
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
info.setScore(0)
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
