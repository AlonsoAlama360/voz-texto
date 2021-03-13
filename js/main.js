let rec;
if (!("webkitSpeechRecognition" in window)) {
    alert('diga algo o dar permiso al microfono');
} else {
    rec = new webkitSpeechRecognition();
    rec.lang = "es-AR";
    rec.continuous = true;
    rec.interim = true;
    rec.addEventListener("result", ejecutar);
}

function ejecutar(event) {
    for (let i = event.resultIndex; i < event.results.length; i++) {
        document.getElementById("text").innerHTML = event.results[i][0].transcript;
    }
}
rec.start();