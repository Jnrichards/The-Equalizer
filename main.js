let interval
let n = -1
onmessage =  msg => {

    if (msg.data === "stop") {
        return clearInterval(interval)
    }

    if (msg.data === "play"){
    interval = setInterval(function(){
        if (n > 6) { n = -1 }
        postMessage(n  = (n + 1));}, 500 )
    }
    if (msg.data === "record") {
        interval = setInterval(function(){
            if (n > 6) { clearInterval(interval); n = -1 }
            postMessage({ bar: n = (n + 1), record: "record"});}, 500 )
    }

}