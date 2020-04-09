window.addEventListener('keydown',(e)=>{
    // console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    //sanity check to see if keys pressed are being recognized
    console.log(key)
    key.classList.add('playing')

//Sanity check to see if keys will show the corresponding audio selector in console
    console.log(audio)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    let removeTransition =(e)=>{
        // console.log(e)
        if (e.propertyName !== 'transform') return;
        key.classList.remove('playing');
    }
    const keys = document.querySelectorAll('.key');

    keys.forEach(key => key.addEventListener('transitionend',removeTransition))
})