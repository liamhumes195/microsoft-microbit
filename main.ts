input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
