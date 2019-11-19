window.onload = function () {
    var synth = new Tone.Synth({
        oscillator : {
            type : "sine"
        },
    }).toMaster();
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