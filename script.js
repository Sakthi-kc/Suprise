function showSurprise()
{
    document.getElementById("surpriseMessage")
        .classList.remove("d-none");

    confetti({
        particleCount: 150,
        spread: 100
    });
}

function showPic()
{
    const image = document.getElementById("imageContainer");
    image.classList.remove("hidden");
    image.classList.add("show");

    confetti({
        particleCount: 150,
        spread: 100
    });
}

var audio = document.getElementById("myAudio");

function playAudio()
{
    audio.play();
}

function pauseAudio()
{
    audio.pause();
}