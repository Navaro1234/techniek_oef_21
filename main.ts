let getal_A = 0
let oplossing = 0
let getal_B = 0
input.onButtonPressed(Button.A, function () {
    getal_A = randint(0, 10)
    basic.showNumber(getal_A)
})
input.onButtonPressed(Button.AB, function () {
    oplossing = getal_A * getal_B
    basic.showNumber(getal_A)
    basic.showString("*")
    basic.showNumber(getal_B)
    basic.showString("=")
    basic.pause(2000)
    basic.showNumber(oplossing)
})
input.onButtonPressed(Button.B, function () {
    getal_B = randint(0, 10)
    basic.showNumber(getal_B)
})
