// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

//function testFunc() {
//    window.api.receive("fromMain", (data) => {
//        console.log(`Received ${data} from main process`);
//        document.getElementById("path").innerHTML = data;
//    });
//    window.api.send("toMain", "some data");
//}


function testFunc() {
    window.api.send('toMain', 'ping');
    
    window.api.receiveOnce('fromMain', (event, arg) => {
        console.log(event);
        console.log(arg); // prints "pong"
        document.getElementById("path").innerHTML = arg;
        // window.api.receive.removeListener('fromMain', (event, arg));
    })
}

function testFuncTwo() {
    window.api.send('toMain', 'ping');
    
    window.api.receiveOnce('fromMain', (event, arg) => {
        console.log(arg); // prints "pong"
        document.getElementById("path").innerHTML = arg;
    })
}

function getNumber(){
    number = number + amount;
    document.getElementById("numbers").innerHTML = number;
};

function startGame() {
    window.clearInterval()
    window.setInterval(function(){

    }, 1000);

}