let gota = false
let accY = 0
let accX = 0
let Y = 2
let X = 2
basic.forever(function on_forever() {
    
    if (!gota && input.buttonIsPressed(Button.A)) {
        clear_screen()
        gota = true
    }
    
    if (input.buttonIsPressed(Button.B)) {
        gota = false
    }
    
    if (gota == false) {
        led.plotBarGraph(input.temperature(), 50)
    } else if (gota == true) {
        led.plot(X, Y)
        basic.pause(50)
        led.unplot(X, Y)
        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)
        if (accX <= 150 && X > 0) {
            X = X - 1
        }
        
        if (accX > 150 && X < 4) {
            X = X + 1
        }
        
        if (accY <= 150 && Y > 0) {
            Y = Y - 1
        }
        
        if (accY > 150 && Y < 4) {
            Y = Y + 1
        }
        
    }
    
})
function clear_screen() {
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            led.unplot(x, y)
        }
    }
}

