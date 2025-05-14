input.onGesture(Gesture.LogoUp, function () {
    basic.pause(tempsInstallRegle)
    for (let index = 0; index < nbLeds; index++) {
        strip.shift(1)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(dureePauseMonteeEau)
    }
    basic.pause(dureePassageRouge)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(5000)
    for (let index = 0; index < Math.round(dureeStrobo / 100); index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.show()
    }
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})
let strip: neopixel.Strip = null
let dureeStrobo = 0
let dureePassageRouge = 0
let dureePauseMonteeEau = 0
let tempsInstallRegle = 0
let nbLeds = 0
nbLeds = 115
let dureeMonteeEau = 30000
tempsInstallRegle = 5000
dureePauseMonteeEau = Math.round(dureeMonteeEau / nbLeds)
dureePassageRouge = 2000
dureeStrobo = 5000
strip = neopixel.create(DigitalPin.P0, nbLeds, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
basic.forever(function () {
	
})
