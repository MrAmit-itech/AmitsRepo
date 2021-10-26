var outputdiv = document.getElementById("display")
var h4 = document.createElement("h4")


var timeoutID
function inputvalue(){
    var t =  document.getElementById("selectout").value
    var s = document.getElementById("selectin").value
    var data =  document.getElementById("input").value

    if(timeoutID){
        clearInterval(timeoutID)
    }
    timeoutID = setTimeout(() => {
        translate(data,s,t)
    },1000);
}




async function translate(data,s,t){
    let res = await fetch("https://libretranslate.de/translate", {
        method: "POST",
        body: JSON.stringify({
            q: `${data}`,
            source: `${s}`,
            target: `${t}`
        }),
        headers: { "Content-Type": "application/json" }
    });
    h4.textContent = (await res.json()).translatedText
    outputdiv.innerHTML = null
    outputdiv.append(h4)
}


