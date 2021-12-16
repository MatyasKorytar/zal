let TRESHOLD = 512
let DELAY = 1000
let X = 2
let Y = 2
function replot(X: number, Y: number) {
    basic.clearScreen()
    led.plot(X, Y)
}

basic.forever(function on_forever() {
    let X: number;
    let tiltDirection = input.acceleration(Dimension.X)
    if (tiltDirection > TRESHOLD) {
        X = 3
        replot(X, Y)
        basic.pause(DELAY)
        if (tiltDirection > TRESHOLD + TRESHOLD / 2) {
            X = 4
            replot(X, Y)
            basic.pause(DELAY)
        }
        
    } else if (tiltDirection < -TRESHOLD) {
        X = 1
        replot(X, Y)
        basic.pause(DELAY)
        if (tiltDirection < -TRESHOLD - TRESHOLD / 2) {
            X = 0
            replot(X, Y)
            basic.pause(DELAY)
        }
        
    } else {
        X = 2
        replot(X, Y)
        basic.pause(DELAY)
    }
    
})
