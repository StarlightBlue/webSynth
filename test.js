window.onload = function () {
    var synth = new Tone.Synth({
        oscillator : {
            type : "sine"
        },
    }).toMaster();

    var analyzer = new Tone.Analyser('waveform',256);
    var canvas = document.getElementById("oscilloscope");
    var canvasCtx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 200;

    synth.connect(analyzer);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    function drawGraph(){
        requestAnimationFrame(drawGraph);
        const value = analyzer.getValue(synth);
        canvasCtx.fillStyle = "rgb(9,9,121)";
        canvasCtx.fillRect(0,0,canvas.width,canvas.height);

        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(255,255,255)';
        canvasCtx.beginPath();

        var sliceWidth = canvas.width * 1.0 / value.length;
        var x = 0;

        for(var i = 0; i < value.length; i++) {
            var v = value[i]*3;
            var y = (v * canvas.height/3)+100;
            if(i === 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }
            x += sliceWidth;
        }
        canvasCtx.lineTo(canvas.width, canvas.height/2);
        canvasCtx.stroke();
    }
    drawGraph();


    const piano = document.getElementById('piano');
    piano.addEventListener("mousedown", e => {
        synth.triggerAttack(e.target.dataset.note);
    });
    piano.addEventListener("mouseup", e => {
        synth.triggerRelease();
    });
    $('#osc').change(function(){
        var newtype = $(this).val();
        synth.oscillator.type = newtype;
    });
}