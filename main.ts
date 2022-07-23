namespace SpriteKind {
    export const item = SpriteKind.create()
    export const player2 = SpriteKind.create()
}
namespace StatusBarKind {
    export const health2 = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    satusbar2.value += -10
})
statusbars.onZero(StatusBarKind.health2, function (status) {
    game_over_jack = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
	
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game_over_tom = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -10
})
let game_over_jack = 0
let game_over_tom = 0
let satusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
tiles.setCurrentTilemap(tilemap`level2`)
let Jack = sprites.create(assets.image`Jack`, SpriteKind.Player)
let Tom = sprites.create(assets.image`Tom`, SpriteKind.player2)
controller.moveSprite(Jack)
controller.player2.moveSprite(Tom)
tiles.placeOnRandomTile(Jack, assets.tile`myTile1`)
tiles.placeOnRandomTile(Tom, assets.tile`myTile1`)
scene.cameraFollowSprite(Jack)
tiles.coverAllTiles(assets.tile`myTile1`, assets.tile`myTile`)
tiles.coverAllTiles(tiles.util.door1, assets.tile`myTile2`)
let key1 = sprites.create(img`
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . 5 . . . . . 5 . . . . . 
    . . . . 5 . . . 5 5 5 . . . . . 
    . . . . 5 . . . 5 5 5 . . . . . 
    . . . . 5 . . . . . 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.item)
tiles.placeOnTile(key1, tiles.getTileLocation(9, 12))
let book1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . e e e e e e e e e e e . . 
    . . . e e e e e e e e e e e . . 
    . . . e f e e e e e e e e e . . 
    . . . e f e e e e f f f e e . . 
    . . . e f f f e e f e f e e . . 
    . . . e f f f e e f f f e e . . 
    . . . e e e e e e e e e e e . . 
    . . . e e e e e e e e e e e . . 
    . . . e e e e e e f e e e e . . 
    . . . e f f f f e f e f e e . . 
    . . . e f e e f e f f e e e . . 
    . . . e f e e f e f f e e e . . 
    . . . e f f f f e f e f e e . . 
    . . . e e e e e e e e e e e . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.item)
tiles.placeOnTile(book1, tiles.getTileLocation(6, 6))
let gypsy1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 . 4 4 . . . . . . 
    . . . 4 4 4 4 . 4 4 . . . . . . 
    . 4 4 4 4 4 4 4 4 4 4 . . . . . 
    4 4 4 4 4 4 4 4 4 4 4 . 4 4 . . 
    4 4 4 f f 4 4 4 f f 4 4 4 4 . . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    . . . . 4 4 4 4 4 4 4 4 4 4 4 . 
    . . . . . 4 . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(gypsy1, tiles.getTileLocation(2, 14))
statusbar = statusbars.create(20, 3, StatusBarKind.Health)
statusbar.value = 100
statusbar.attachToSprite(Jack)
satusbar2 = statusbars.create(20, 3, StatusBarKind.health2)
satusbar2.value = 100
satusbar2.attachToSprite(Tom)
game_over_tom = 2
game_over_jack = 2
game.onUpdate(function () {
    if (game_over_jack + game_over_tom == 0) {
        game.over(false)
    }
})
