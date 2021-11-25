
    const txtAnima = document.getElementById('couleur');

    new Typewriter(txtAnima, {
        // loop: true,
        deleteSpeed: 40
    })
        .changeDelay(35)
        .typeString('Dites bonjour à la couleur !')
        .pauseFor(800)
        .deleteChars(9)
        .typeString('<span style="color: #1E5A47;">couleur !')
        .pauseFor(800)
        .deleteChars(9)
        .typeString('<span style="color: #BB7521;">couleur !</span>')
        .pauseFor(800)
        .deleteChars(9)
        .typeString('<span style="color: red;">couleur !</span>')
        .pauseFor(800)
        .deleteChars(9)
        .typeString('<span style="color: #174150;">couleur !</span>')
        .pauseFor(800)
        .start()
    