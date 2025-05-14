input.onGesture(Gesture.LogoUp, function () {
    basic.pause(5000)
    for (let index = 0; index < 115; index++) {
        strip.shift(1)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(200)
    }
    basic.pause(2000)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(5000)
    strip.show()
    for (let index = 0; index < 25; index++) {
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
strip = neopixel.create(DigitalPin.P0, 115, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.show()
basic.forever(function () {
	
})
