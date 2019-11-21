/* window.onload = function () {
    document.getElementById('starter').addEventListener('click', () => {
        if (Tone.context.state !== 'running') Tone.context.resume();
    });
    document.getElementById('stopper').addEventListener('click', () => {
        if (Tone.context.state === 'running') Tone.context.suspend();
    });

    var bpmslider = document.getElementById('bpmslider');
    var curbpm = bpmslider.value;
    var showbpm = document.getElementById('bpm');
    showbpm.innerHTML = curbpm;
    bpmslider.oninput = function () {
        showbpm.innerHTML = this.value;
    }


    console.log(this.__filename)

    const buf = new Tone.Buffer("./assets/samples/CYCdh_ElecK02-Clap01.wav", function () {
        console.log('loaded')
    }, function (err) {
        console.log(err)
    })

    const synths = [
        new Tone.Player("./assets/samples/CYCdh_ElecK02-Clap01.wav"),
        new Tone.Player("./assets/samples/CYCdh_ElecK02-HfHat.wav"),
        new Tone.Player("./assets/samples/CYCdh_ElecK02-Snr02.wav"),
        new Tone.Player("./assets/samples/CYCdh_ElecK01-Kick02.wav"),
    ];

    

    const gain = new Tone.Gain(0.6).toMaster();

    synths.forEach(synth => synth.connect(gain));

    const rows = document.body.querySelectorAll("#seqrow");
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < 16; j++) {
            rows[i].innerHTML += '<button class="seqbtn" value=' + j + '></button>';
        }
    }

    $('.seqbtn').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass("active");
        }
    });

    const notes = ["G5", "E4", "C3", "B2"];
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat, "16n");
    Tone.Transport.start();



    function repeat(time) {
        Tone.Transport.bpm.value = bpmslider.value;
        let step = index % 16;
        for (let i = 0; i < rows.length; i++) {
            let synth = synths[i];
            let row = rows[i];
            let note = notes[i];
            let input = row.querySelector(`.seqbtn:nth-child(${step + 1})`)
            if ($(input).hasClass("active")) {
                synth.start();
            }
        }
        index++;
    }
} */