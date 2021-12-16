TRESHOLD = 512
DELAY = 1000
X = 2
Y = 2
def replot(X ,Y):
    basic.clear_screen()
    led.plot(X, Y)
    
def on_forever():
    tiltDirection = input.acceleration(Dimension.X)
    if tiltDirection > TRESHOLD:
        X = 3
        replot(X ,Y)
        basic.pause(DELAY)
        if tiltDirection > TRESHOLD+TRESHOLD/2:
            X = 4
            replot(X ,Y)
            basic.pause(DELAY)
    elif tiltDirection < -TRESHOLD:
        X = 1
        replot(X ,Y)
        basic.pause(DELAY)
        if tiltDirection < -TRESHOLD-TRESHOLD/2:
            X = 0
            replot(X ,Y)
            basic.pause(DELAY)
    else:
        X = 2
        replot(X ,Y)
        basic.pause(DELAY)
            

        

basic.forever(on_forever)