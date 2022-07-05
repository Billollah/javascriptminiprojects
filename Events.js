let events = require('events');

let eventEmmiter =   new events.EventEmitter();

let connectHandlers =  function connected(){
    console.log("you have successfully connected ")

    eventEmmiter.emit('data received')
}

eventEmmiter.on("connection"  ,connectHandlers)
eventEmmiter.on("data received" ,function (){
    console.log("data received successfully")
})
eventEmmiter.emit('connection')