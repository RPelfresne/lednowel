let z = 0
let y = 0
let x = 0
let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
while (true) {
    x = input.acceleration(Dimension.X) / 2
    y = input.acceleration(Dimension.Y) / 2
    z = input.acceleration(Dimension.Z) / 2
    strip.shift(1)
    strip.setPixelColor(0, neopixel.rgb(x, y, 0 - z))
    strip.show()
    basic.pause(100)
}
basic.forever(function () {
	
})
