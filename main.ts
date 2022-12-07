input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(254)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendNumber(255)
})
let Helning = 0
radio.setGroup(138)
basic.forever(function () {
    Helning = input.rotation(Rotation.Roll)
    if (input.buttonIsPressed(Button.A)) {
        if (Helning < -70) {
            radio.sendNumber(1)
        } else if (Helning > 70) {
            radio.sendNumber(50)
        } else if (Helning > -70 && Helning < -10) {
            radio.sendNumber(pins.map(
            Helning,
            -70,
            -10,
            1,
            49
            ))
        } else if (Helning < 70 && Helning > 10) {
            radio.sendNumber(pins.map(
            Helning,
            10,
            70,
            99,
            50
            ))
        } else {
            radio.sendNumber(100)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        if (Helning < -20) {
            radio.sendNumber(201)
        } else if (Helning > 20) {
            radio.sendNumber(202)
        } else {
            radio.sendNumber(203)
        }
    } else {
        radio.sendNumber(0)
    }
})
