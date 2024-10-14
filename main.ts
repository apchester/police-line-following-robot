maqueen.ltEvent(maqueen.Patrol1.PatrolRight, maqueen.Voltage.High, function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 44)
})
maqueen.ltEvent(maqueen.Patrol1.PatrolLeft, maqueen.Voltage.High, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 44)
})
loops.everyInterval(500, function () {
	
})
basic.forever(function () {
	
})
