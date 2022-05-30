input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    timer = 0
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    timer = 0
    basic.showIcon(IconNames.Surprised)
    soundExpression.giggle.playUntilDone()
})
let timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
soundExpression.hello.playUntilDone()
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 20) {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.playUntilDone()
    }
    if (timer == 30) {
        basic.showIcon(IconNames.Asleep)
        soundExpression.yawn.playUntilDone()
    }
    if (timer == 40) {
        soundExpression.mysterious.playUntilDone()
        music.setBuiltInSpeakerEnabled(false)
        while (true) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
