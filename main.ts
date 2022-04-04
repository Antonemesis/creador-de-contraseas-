let Contraseña = 0
let Num = 0
let Letras = 0
let Simbol = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Pass")
    for (let index = 0; index < 8; index++) {
        Contraseña = randint(1, 3)
        if (Contraseña == 1) {
            Num = randint(1, 9)
            if (Num == 0) {
                basic.showNumber(0)
            }
        } else if (Contraseña == 2) {
            Letras = randint(1, 4)
            if (Letras == 1) {
                basic.showString("A")
            } else if (Letras == 2) {
                basic.showString("B")
            } else if (Letras == 3) {
                basic.showString("C")
            } else if (Letras == 4) {
                basic.showString("D")
            }
        } else if (Contraseña == 3) {
            Simbol = randint(1, 10)
            if (Simbol == 1) {
                basic.showString("*")
            } else if (Simbol == 2) {
                basic.showString("! ")
            } else if (Simbol == 3) {
                basic.showString("? ")
            } else if (Simbol == 4) {
                basic.showString("·")
            }
        }
        basic.pause(2000)
    }
})
