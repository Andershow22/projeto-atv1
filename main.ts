namespace SpriteKind {
    export const portal = SpriteKind.create()
}
// pulo
// 
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (equipamento == "espada") {
        if (direcao == "direita") {
            animation.runImageAnimation(
            personagem,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . f f e e e e f 2 f . . . . . 
                . f f e e e e f 2 2 2 f . . . . 
                . f e e e f f e e e e f . . . c 
                . f f f f e e 2 2 2 2 e f . c d 
                . f e 2 2 2 f f f f e 2 f c d d 
                f f f f f f f e e e f f c d d c 
                f f e 4 4 e b f 4 4 e c d d c . 
                f e e 4 d 4 1 f d d e c d c . . 
                . f e e e 4 d d d e d c c c . . 
                . . f f e e 4 4 e 4 d d e . . . 
                . . . f 2 2 2 2 4 4 e e . . . . 
                . . . f 2 2 2 2 e 2 f . . . . . 
                . . . f 4 4 4 4 5 5 f . . . . . 
                . . . . f f f f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . f f f f f 2 f . . . . . 
                . . f f e e e e e 2 2 f f . . . 
                . f f e e e e e e 2 2 2 f f . . 
                . f e e e e f f f e e e e f . . 
                . f f f f f e e e 2 2 2 2 e f . 
                f f f e 2 2 2 f f f f f e 2 f . 
                f f f f f f f f f e e e f f f . 
                f e f e 4 4 e b b f 4 4 e e f . 
                . f e e 4 d 4 b b f d d e f . . 
                . . f e e e 4 d d d d d f e e c 
                . . . f 2 2 2 2 2 2 2 e e d d c 
                . . . f 4 4 4 4 4 5 e 4 4 d d c 
                . . . f f f f f f f f e e e e . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . . . . f f . . . . . . . 
                . . . . f f f f 2 f f . . . . . 
                . . f f e e e e f 2 f f . . . . 
                . f f e e e e e f 2 2 f f . . . 
                . f e e e e f f e e e e f . . . 
                . f f f f f e e 2 2 2 2 e f . . 
                f f f e 2 2 2 f f f f e 2 f . . 
                f f f f f f f f e e e f f f . . 
                f e f e 4 4 e b f 4 4 e e f . . 
                . f e e 4 d 4 b f d d e f . . . 
                . . f e e e 4 d d d e e . c . . 
                . . . f 2 2 2 2 e e d d e c c c 
                . . . f 4 4 4 e 4 4 d d e c d d 
                . . . f f f f f e e e e . c c c 
                . . f f f f f f f f . . . c . . 
                . . f f f . . f f . . . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . f f e e e e f 2 f . . . . . 
                . f f e e e e f 2 2 2 f . . . . 
                . f e e e f f e e e e f . . . . 
                . f f f f e e 2 2 2 2 e f . . . 
                . f e 2 2 2 f f f f e 2 f . . . 
                f f f f f f f e e e f f f . . . 
                f f e 4 4 e b f 4 4 e e f . . . 
                f e e 4 d 4 1 f d d e f . . . . 
                . f e e e 4 d d d d f . . . . . 
                . . f d d e 4 4 4 e f . . . . . 
                . . f d d e 2 2 c c c . . . . . 
                . . . e e f 2 2 c d c . . . . . 
                . . . f 4 4 4 4 c d d c . . . . 
                . . . . f f f f f c d d c . . . 
                . . . . . f f f . . c d d c . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `],
            50,
            false
            )
            if (personagem.overlapsWith(maluco)) {
                sprites.destroy(maluco)
            }
        }
        if (direcao == "esquerda") {
            animation.runImageAnimation(
            personagem,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . f 2 f e e e e f f . . 
                . . . . f 2 2 2 f e e e e f f . 
                c . . . f e e e e f f e e e f . 
                d c . f e 2 2 2 2 e e f f f f . 
                d d c f 2 e f f f f 2 2 2 e f . 
                c d d c f f e e e f f f f f f f 
                . c d d c e 4 4 f b e 4 4 e f f 
                . . c d c e d d f 1 4 d 4 e e f 
                . . c c c d e d d d 4 e e e f . 
                . . . e d d 4 e 4 4 e e f f . . 
                . . . . e e 4 4 2 2 2 2 f . . . 
                . . . . . f 2 e 2 2 2 2 f . . . 
                . . . . . f 5 5 4 4 4 4 f . . . 
                . . . . . . f f f f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f . . . . . . . 
                . . . . . f 2 f f f f f . . . . 
                . . . f f 2 2 e e e e e f f . . 
                . . f f 2 2 2 e e e e e e f f . 
                . . f e e e e f f f e e e e f . 
                . f e 2 2 2 2 e e e f f f f f . 
                . f 2 e f f f f f 2 2 2 e f f f 
                . f f f e e e f f f f f f f f f 
                . f e e 4 4 f b b e 4 4 e f e f 
                . . f e d d f b b 4 d 4 e e f . 
                c e e f d d d d d 4 e e e f . . 
                c d d e e 2 2 2 2 2 2 2 f . . . 
                c d d 4 4 e 5 4 4 4 4 4 f . . . 
                . e e e e f f f f f f f f . . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . . f f . . . . . . . 
                . . . . . f f 2 f f f f . . . . 
                . . . . f f 2 f e e e e f f . . 
                . . . f f 2 2 f e e e e e f f . 
                . . . f e e e e f f e e e e f . 
                . . f e 2 2 2 2 e e f f f f f . 
                . . f 2 e f f f f 2 2 2 e f f f 
                . . f f f e e e f f f f f f f f 
                . . f e e 4 4 f b e 4 4 e f e f 
                . . . f e d d f b 4 d 4 e e f . 
                . . c . e e d d d 4 e e e f . . 
                c c c e d d e e 2 2 2 2 f . . . 
                d d c e d d 4 4 e 4 4 4 f . . . 
                c c c . e e e e f f f f f . . . 
                . . c . . . f f f f f f f f . . 
                . . . . . . . f f . . f f f . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . . f 2 f e e e e f f . . 
                . . . . f 2 2 2 f e e e e f f . 
                . . . . f e e e e f f e e e f . 
                . . . f e 2 2 2 2 e e f f f f . 
                . . . f 2 e f f f f 2 2 2 e f . 
                . . . f f f e e e f f f f f f f 
                . . . f e e 4 4 f b e 4 4 e f f 
                . . . . f e d d f 1 4 d 4 e e f 
                . . . . . f d d d d 4 e e e f . 
                . . . . . f e 4 4 4 e d d f . . 
                . . . . . c c c 2 2 e d d f . . 
                . . . . . c d c 2 2 f e e . . . 
                . . . . c d d c 4 4 4 4 f . . . 
                . . . c d d c f f f f f . . . . 
                . . c d d c . . f f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `],
            50,
            false
            )
            if (personagem.overlapsWith(maluco)) {
                sprites.destroy(maluco)
            }
        }
    }
})
// pulo
// 
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (location == "dungeon" && personagem.isHittingTile(CollisionDirection.Bottom)) {
        personagem.vy += -130
    }
    if (location == "espaço" && personagem.isHittingTile(CollisionDirection.Bottom)) {
        personagem.vy += -30
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    personagem,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    false
    )
    direcao = "esquerda"
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    personagem.ay = 20
    personagem.setPosition(72, 21)
    tiles.setCurrentTilemap(tilemap`level4`)
    for (let value of inimigos) {
        sprites.destroy(value)
    }
    location = "espaço"
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    if (controller.B.isPressed()) {
        tiles.setTileAt(location, sprites.dungeon.chestOpen)
        equipamento = "espada"
        game.showLongText("você ganhou uma espada", DialogLayout.Bottom)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    personagem,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    false
    )
    direcao = "direita"
})
let direcao = ""
let equipamento = ""
let maluco: Sprite = null
let personagem: Sprite = null
let inimigos: Sprite[] = []
let location = ""
location = "dungeon"
let goodzila = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c c . 
    . c b b c 5 5 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d d c . 
    . . c c c c c b 5 5 b c c c . . 
    . . c b b b c d 5 5 b c . . . . 
    `, SpriteKind.Player)
let cobra = sprites.create(img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `, SpriteKind.Player)
let fantasma = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.setCurrentTilemap(tilemap`level2`)
inimigos = [cobra, goodzila, fantasma]
info.setLife(3)
personagem = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
personagem.setPosition(5, 200)
maluco = inimigos._pickRandom()
maluco.setPosition(randint(150, 180), 200)
controller.moveSprite(personagem, 100, 0)
scene.cameraFollowSprite(personagem)
personagem.ay = 250
let portal1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . b 8 . . . . . . 
    . . . . . . 8 b d b 8 . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . 8 c 5 c . . . . . . 
    . . . 8 8 . c d 5 d c . 8 . . . 
    . . . b c c d 5 5 5 d c c b . . 
    . 8 b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b 8 . 
    . . . . . . c d 5 d c . . 8 . . 
    . . . . . . . c 5 c 8 . . . . . 
    . . . . . . . c d c 8 . . . . . 
    . . . . . . 8 b d b . . . . . . 
    . . . . . . . . b 8 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.portal)
animation.runImageAnimation(
portal1,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 b 8 . . . . . . 
    . . . . . . 8 b d b . . . . . . 
    . . . . . . . c d c 8 . . . . . 
    . . . . . . 8 c 5 c 8 . . . . . 
    . . . . . 8 c d 5 d c 8 . 8 . . 
    . . 8 b c c d 5 5 5 d c c b 8 . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b . . 
    . . . 8 8 8 c d 5 d c 8 8 . . . 
    . . . . . . 8 c 5 c 8 . . . . . 
    . . . . . . . c d c . . . . . . 
    . . . . . . . b d b 8 . . . . . 
    . . . . . . . 8 b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 b 8 . . . . . . 
    . . . . . . b b d b b . . . . . 
    . . . . . . c c d c b . . . . . 
    . . . . b b c c 5 c c b . . . . 
    . . . b c c c d 5 d c c c 8 . . 
    . . 8 b c c d 5 5 5 d c c b 8 . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b . . 
    . . . 8 c c c d 5 d c c b . . . 
    . . . . . . 8 c 5 c c b b . . . 
    . . . . . . c c d c c c . . . . 
    . . . . . . c b d b b b . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 b d b 8 . . . . . 
    . . . . 8 . . b d b c . . . . . 
    . . . . b b c 5 5 5 c b b 8 . . 
    . . . 8 b 5 5 5 1 5 5 5 b . . . 
    . . 8 c c 5 5 5 1 5 5 5 c c . . 
    . . b b 5 5 5 1 1 1 5 5 5 b b 8 
    . . d d 5 1 1 1 1 1 1 1 5 d d . 
    . 8 b b 5 5 5 1 1 1 5 5 5 b b . 
    . . . c c 5 5 5 1 5 5 5 c c 8 . 
    . . . . b 5 5 5 1 5 5 5 b . . . 
    . . . 8 b b c 5 5 5 c b b 8 . . 
    . . . . . . c b d b c . 8 . . . 
    . . . . . . 8 b d b . . . . . . 
    . . . . . . . 8 8 . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 b 8 . . . . . . 
    . . . . . . b b d b b . . . . . 
    . . . . . . c c d c b . . . . . 
    . . . . b b c c 5 c c b . . . . 
    . . . b c c c d 5 d c c c 8 . . 
    . . 8 b c c d 5 5 5 d c c b 8 . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b . . 
    . . . 8 c c c d 5 d c c b . . . 
    . . . . . . 8 c 5 c c b b . . . 
    . . . . . . c c d c c c . . . . 
    . . . . . . c b d b b b . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 b 8 . . . . . . 
    . . . . . . 8 b d b . . . . . . 
    . . . . . . . c d c 8 . . . . . 
    . . . . . . . c 5 c 8 . . . . . 
    . . . . . 8 c d 5 d c 8 8 8 . . 
    . . 8 b c c d 5 5 5 d c c b 8 . 
    . . b d d 5 5 5 5 5 5 5 d d b . 
    . . . b c c d 5 5 5 d c c b . . 
    . . . 8 8 8 c d 5 d c 8 8 . . . 
    . . . . . . 8 c 5 c . . . . . . 
    . . . . . . . c d c 8 . . . . . 
    . . . . . . 8 b d b 8 . . . . . 
    . . . . . . 8 8 b 8 8 . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
100,
true
)
portal1.setPosition(270, 200)
