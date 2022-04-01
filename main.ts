let contrasenya = 0
let símbolo = 0
let número = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass=")
    for (let index = 0; index < 8; index++) {
        contrasenya = randint(1, 3)
        if (contrasenya == 1) {
            número = randint(1, 9)
            basic.showNumber(randint(1, 9))
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (false) {
        	
        } else if (contrasenya == 3) {
            símbolo = randint(1, 4)
        } else if (símbolo == 1) {
            basic.showString("*")
        } else if (símbolo == 2) {
            basic.showString("&")
        } else if (símbolo == 3) {
            basic.showString("^")
        } else if (símbolo == 3) {
            basic.showString(">")
        }
    }
})
