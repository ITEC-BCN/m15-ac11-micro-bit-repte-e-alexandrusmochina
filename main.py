gota = False
accY = 0
accX = 0
Y = 2
X = 2

def on_forever():
    global gota, accX, accY, X, Y
    
    if not gota and input.button_is_pressed(Button.A):
        clear_screen()
        gota = True
    if input.button_is_pressed(Button.B):
        gota = False
    
    if gota == False:
        led.plot_bar_graph(input.temperature(), 50)
    elif gota == True:
        led.plot(X, Y)
        basic.pause(50)
        led.unplot(X, Y)
        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)
        if accX <= 150 and X > 0:
            X = X - 1
        if accX > 150 and X < 4:
            X = X + 1
        if accY <= 150 and Y > 0:
            Y = Y - 1
        if accY > 150 and Y < 4:
            Y = Y + 1

basic.forever(on_forever)

def clear_screen():
    for y in range(5):
        for x in range(5):
            led.unplot(x, y)

