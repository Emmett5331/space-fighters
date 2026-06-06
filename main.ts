namespace SpriteKind {
    export const Static = SpriteKind.create()
}
function setupMenu () {
    cursor = sprites.create(assets.image`staticWarrior`, SpriteKind.Player)
    console.log("Setup finished suecessfuly")
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`dungeonEntrance`)
    cursor.setPosition(72, 125)
})
let cursor: Sprite = null
tiles.setCurrentTilemap(tilemap`dungeonEntrance`)
console.log("Setup started")
setupMenu()
forever(function () {
    controller.moveSprite(cursor)
    scene.cameraFollowSprite(cursor)
})
