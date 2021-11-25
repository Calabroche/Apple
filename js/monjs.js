const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    // loop: true,
    deleteSpeed: 40
})
    .changeDelay(55)
    .typeString('Grace à Apple Education vous pouvez')
    .pauseFor(300)
    .typeString('<span style="color: #A786B6;"> APPRENDRE !')
    .pauseFor(1000)
    .deleteChars(11)
    .typeString('<span style="color: #0099CC;"> TRAVAILLER !</span> ')
    .pauseFor(1000)
    .deleteChars(13)
    .typeString('<span style="color: #FFCC03;"> CREER ! </span> ')
    .pauseFor(1000)
    .start()

    