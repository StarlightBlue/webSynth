window.onload = function () {

    var filter = new Tone.Filter({
        frequency: 350,
        type: "highpass"
    }).toMaster()


    var synth = new Tone.PolySynth({
        polyphony: 6,
        oscillator: {
            type:"triangle"
        }
    }).connect(filter);

    console.log(synth.voices[0])

    var analyzer = new Tone.Analyser('waveform', 256);
    var canvas = document.getElementById("oscilloscope");
    var canvasCtx = canvas.getContext("2d");
    canvas.width = 500;
    canvas.height = 200;

    synth.connect(analyzer);
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);

    function drawGraph() {
        requestAnimationFrame(drawGraph);
        const value = analyzer.getValue(synth);
        canvasCtx.fillStyle = "rgb(9,9,121)";
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(255,255,255)';
        canvasCtx.beginPath();

        var sliceWidth = canvas.width * 1.0 / value.length;
        var x = 0;

        for (var i = 0; i < value.length; i++) {
            var v = value[i] * 3;
            var y = (v * canvas.height / 3) + 100;
            if (i === 0) {
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }
            x += sliceWidth;
        }
        canvasCtx.lineTo(canvas.width, canvas.height / 2);
        canvasCtx.stroke();
    }
    drawGraph();

    var test = new Tone.FMSynth({
        modulation: {
            type: "triangle"
        }
    }).toMaster()

    const piano = document.getElementById('piano');
    piano.addEventListener("mousedown", e => {
        synth.triggerAttack(e.target.dataset.note);
    });
    piano.addEventListener("mouseup", e => {
        synth.triggerRelease(e.target.dataset.note);
    });
    $('#osc').change(function () {
        var newtype = $(this).val();
        for(let i = 0; i < synth.voices.length; i++){
            synth.voices[i].oscillator.type = newtype;
        }
    });
    $('#filterType').change(function () {
        var newtype = $(this).val();
        filter.type = newtype;
    });
    $('.test').click(function () {
        test.triggerAttackRelease("c5", "4n")
    });
    /* var ModIdxSlider = document.getElementById('myModIdx');
    this.document.getElementById('myModIdx').value = synth.modulationIndex.value;
    var curIdx = synth.modulationIndex.value;
    var showIdx = document.getElementById('modIndex');
    showIdx.innerHTML = curIdx;
    ModIdxSlider.oninput = function () {
        showIdx.innerHTML = (this.value);
        synth.modulationIndex.value = (this.value)
    }
    var HarmSlider = document.getElementById('myHarm');
    this.document.getElementById('myHarm').value = synth.harmonicity.value * 100;
    var curHarm = synth.harmonicity.value;
    var showHarm = document.getElementById('harm');
    showHarm.innerHTML = curHarm;
    HarmSlider.oninput = function () {
        showHarm.innerHTML = ((this.value) / 100).toFixed(2);
        synth.harmonicity.value = (this.value) / 100;
    } */
    var fcutoffSlider = document.getElementById('myfCutOff');
    this.document.getElementById('myfCutOff').value = filter.frequency.value;
    var curFeq = filter.frequency.value;
    var showFeq = document.getElementById('fCutOff');
    showFeq.innerHTML = curFeq;
    fcutoffSlider.oninput = function () {
        showFeq.innerHTML = (this.value);
        filter.frequency.value = (this.value)
    }

    var AtkSlider = document.getElementById('myAttack');
    document.getElementById('myAttack').value = synth.voices[0].envelope.attack * 100;
    var curAtk = synth.voices[0].envelope.attack;
    var showAtk = document.getElementById('attack');
    showAtk.innerHTML = curAtk.toFixed(2);
    AtkSlider.oninput = function () {
        showAtk.innerHTML = ((this.value) / 100).toFixed(2);
        for(let i = 0; i < synth.voices.length; i++){
            synth.voices[0].envelope.attack = (this.value) / 100;
        }
    }

    var DcySlider = document.getElementById('myDecay');
    document.getElementById('myDecay').value = synth.voices[0].envelope.decay * 100;
    var curDcy = synth.voices[0].envelope.decay;
    var showDcy = document.getElementById('decay');
    showDcy.innerHTML = curDcy.toFixed(2);
    DcySlider.oninput = function () {
        showDcy.innerHTML = ((this.value) / 100).toFixed(2);
        for(let i = 0; i < synth.voices.length; i++){
            synth.voices[0].envelope.decay = (this.value) / 100;
        }
    }

    var SusSlider = document.getElementById('mySustain');
    document.getElementById('mySustain').value = synth.voices[0].envelope.sustain * 100;
    var curSus = synth.voices[0].envelope.sustain;
    var showSus = document.getElementById('sustain');
    showSus.innerHTML = curSus.toFixed(2);
    SusSlider.oninput = function () {
        showSus.innerHTML = ((this.value) / 100).toFixed(2);
        for(let i = 0; i < synth.voices.length; i++){
            synth.voices[0].envelope.decay.sustain = (this.value) / 100;
        }
    }

    var RelSlider = document.getElementById('myRelease');
    document.getElementById('myRelease').value = synth.voices[0].envelope.release * 100;
    var curRel = synth.voices[0].envelope.release;
    var showRel = document.getElementById('release');
    showRel.innerHTML = curRel.toFixed(2);
    RelSlider.oninput = function () {
        showRel.innerHTML = ((this.value) / 100).toFixed(2);
        for(let i = 0; i < synth.voices.length; i++){
            synth.voices[0].envelope.decay.release = (this.value) / 100;
        }
    }

    WebMidi.enable(function (err) {

        if (err) {
            console.log("WebMidi could not be enabled.", err);
        } else {
            console.log("WebMidi enabled!");
            console.log(WebMidi.inputs);
            if (WebMidi.inputs.length > 0){
                var input = WebMidi.inputs[0];
            input.addListener('noteon', "all", function(e) {
                synth.triggerAttack(""+e.note.name+e.note.octave);
            })
            input.addListener('noteoff', "all", function(e) {
                synth.triggerRelease(""+e.note.name+e.note.octave);
            })
            }   
        }
    });

}