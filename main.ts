input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playMelody("C5 G B A F A C5 B ", 120)
    basic.showString("Woof!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . # . # .
        `)
    music.playMelody("- C - C C - C - ", 150)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("G B A G C5 B A B ", 120)
    basic.pause(200)
    basic.showString("Woof!")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.showLeds(`
    . . . # .
    # . . # #
    # # # # #
    # # # # #
    . # . # .
    `)
basic.pause(1000)
basic.showString("Z Z Z ")
basic.forever(function () {
    basic.showLeds(`
        . . . # .
        # . . # #
        # # # # #
        # # # # #
        . # . # .
        `)
})
