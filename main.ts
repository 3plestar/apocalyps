namespace SpriteKind {
    export const effect = SpriteKind.create()
}
function jumping (sprite: Sprite) {
    playerSprite.vy = -200
    canJump = false
    jumpEffect = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 1 . 
        . . . 1 1 1 . . . . 1 1 1 . . . 
        . 1 . 1 . . . . . . . . 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . 1 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.effect)
    jumpEffect.setPosition(sprite.x, sprite.y + 6)
    animation.runImageAnimation(
    jumpEffect,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 . . . . 1 1 . . . . 
        . . . . 1 1 1 . . 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . 1 1 . . . 
        . . 1 1 1 . . . . . . 1 1 1 . . 
        . . 1 1 1 1 . . . . 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 1 . . . . . . . . . . 1 1 . 
        1 1 1 . . . . . . . . . . 1 1 1 
        1 1 1 1 . . . . . . . . 1 1 1 1 
        . 1 1 1 1 . . . . . . 1 1 1 1 . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 1 . . 
        1 . . . . . . . . . . . . . . . 
        . 1 1 . . . . . . . . . . 1 1 . 
        1 1 1 . . . . . . . . . . 1 1 1 
        1 1 . . . . . . . . . . . . 1 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 1 . . 
        1 . . 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . 1 . . 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    false
    )
    pause(500)
    jumpEffect.destroy()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    up = true
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (horizontal == "left" && up == false && down == false) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 6 6 6 . . . . . . . . . . 
            . . 6 1 1 1 6 6 . . . . . . . . 
            . 6 9 9 9 9 1 1 6 6 . . . . . . 
            . 6 9 9 9 9 9 9 9 9 6 6 6 6 . . 
            . 6 9 9 9 9 9 9 6 6 . . . . . . 
            . . 6 9 9 9 6 6 . . . . . . . . 
            . . . 6 6 6 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, playerSprite, -170, 0)
    } else if (horizontal == "right" && up == false && down == false) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 6 6 6 . . . 
            . . . . . . . . 6 6 1 1 1 6 . . 
            . . . . . . 6 6 1 1 9 9 9 9 6 . 
            . . 6 6 6 6 9 9 9 9 9 9 9 9 6 . 
            . . . . . . 6 6 9 9 9 9 9 9 6 . 
            . . . . . . . . 6 6 9 9 9 6 . . 
            . . . . . . . . . . 6 6 6 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, playerSprite, 170, 0)
    } else if (up == true) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . 6 1 1 9 6 . . . . . 
            . . . . . 6 1 9 9 9 9 6 . . . . 
            . . . . . 6 1 9 9 9 9 6 . . . . 
            . . . . . 6 1 9 9 9 9 6 . . . . 
            . . . . . . 6 9 9 9 6 . . . . . 
            . . . . . . 6 9 9 9 6 . . . . . 
            . . . . . . . 6 9 6 . . . . . . 
            . . . . . . . 6 9 6 . . . . . . 
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, playerSprite, 0, -170)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cyoteTimer > 0 && canJump == true) {
        jumping(playerSprite)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    horizontal = "left"
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    horizontal = "right"
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    up = false
})
let windspeed = 0
let cyoteTimer = 0
let projectile: Sprite = null
let down = false
let up = false
let jumpEffect: Sprite = null
let playerSprite: Sprite = null
let horizontal = ""
let canJump = false
canJump = true
horizontal = "right"
tiles.setTilemap(tilemap`level2`)
scene.setBackgroundColor(9)
playerSprite = sprites.create(assets.image`characterright0`, SpriteKind.Player)
tiles.placeOnTile(playerSprite, tiles.getTileLocation(1, 15))
playerSprite.sayText("I need to recycle this bottle", 2000, false)
scene.cameraFollowSprite(playerSprite)
playerSprite.ay = 500
// wow speed
controller.moveSprite(playerSprite, 120, 0)
game.onUpdateInterval(10, function () {
    if (playerSprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        windspeed = 0.7
    } else {
        windspeed = 0
    }
    playerSprite.x += windspeed
})
game.onUpdateInterval(1, function () {
    if (cyoteTimer > 0) {
        cyoteTimer += 0 - 1
    }
    if (playerSprite.isHittingTile(CollisionDirection.Bottom)) {
        cyoteTimer = 7
        canJump = true
    }
})
game.onUpdateInterval(200, function () {
    if (playerSprite.vx < 0) {
        if (up) {
            animation.runImageAnimation(
            playerSprite,
            assets.animation`walk left0`,
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            playerSprite,
            assets.animation`walk left1`,
            100,
            true
            )
        }
    } else if (playerSprite.vx > 0) {
        if (up) {
            animation.runImageAnimation(
            playerSprite,
            assets.animation`walk right0`,
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            playerSprite,
            assets.animation`walk right`,
            100,
            true
            )
        }
    } else {
        animation.stopAnimation(animation.AnimationTypes.All, playerSprite)
        if (horizontal == "left" && up == false && down == false) {
            playerSprite.setImage(assets.image`characterleft1`)
        } else if (horizontal == "right" && up == false && down == false) {
            playerSprite.setImage(assets.image`characterright0`)
        } else if (up == true) {
            if (horizontal == "left") {
                playerSprite.setImage(assets.image`characterleft2`)
            } else if (horizontal == "right") {
                playerSprite.setImage(assets.image`characterright1`)
            }
        }
    }
})
