let contrasenya = 0
let número = 0
let letra = 0
let símbolo = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass=")
    for (let index = 0; index < 8; index++) {
        contrasenya = randint(1, 3)
        if (contrasenya == 1) {
            número = randint(1, 9)
            basic.showString("" + (número))
        } else if (contrasenya == 2) {
            letra = randint(1, 4)
            if (letra == 1) {
                basic.showString("M")
            } else if (letra == 2) {
                basic.showString("Y")
            } else if (letra == 3) {
                basic.showString("T")
            } else if (letra == 4) {
                basic.showString("C")
            }
        } else if (contrasenya == 3) {
            símbolo = randint(1, 4)
            if (símbolo == 1) {
                basic.showString("|")
            } else if (símbolo == 2) {
                basic.showString(":")
            } else if (símbolo == 3) {
                basic.showString("^")
            } else if (símbolo == 4) {
                basic.showString(">")
            }
        }
        basic.pause(200)
    }
})
