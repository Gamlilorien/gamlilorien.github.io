//this file requires the following:

//<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
//<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.min.js"></script>
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/5.3.0/ekko-lightbox.css" type="text/css" media="screen" />

//for examples and documentation see:
//ekko-lightbox see; http://ashleydw.github.io/lightbox/#mixed-gallery

//PURPOSE: to take arguments and generate a lightbox gallery using JQuery and Bootstrap
//sample object
// {
//     title: "",
//     footer: "",
//     image: "",
//     readme: "",
//     github: "",
//     demo: ""
// }


//desired items INPUT for portfolio
var input = [
    {
        title: "GOT Hangman",
        footer: "WARNING: may contain spoilers. A Game Of Thrones 8-bit themed version of Hangman using only HTML, CSS, Bootstrap and JavaScript.",
        image: "images/got-hanged.png",
        readme: "https://github.com/Gamlilorien/got-hanged/blob/master/README.md",
        github: "https://github.com/Gamlilorien/got-hanged/",
        demo: "https://gamlilorien.github.io/got-hanged/"
    },
    {
        title: "HP Trivia Game",
        footer: "A Harry Potter inspired trivia game built using timer events and DOM manulipation via Javascript and Jquery.",
        image: "images/hp-trivia.png",
        readme: "https://github.com/Gamlilorien/trivia-game/blob/master/README.md",
        github: "https://github.com/Gamlilorien/trivia-game",
        demo: "https://gamlilorien.github.io/trivia-game/"
    },
    {
        title: "Crystal Collector",
        footer: "A random number guessing game built with Javascript and Jquery.",
        image: "images/crystal-collector.png",
        readme: "https://github.com/Gamlilorien/crystal-game/blob/master/README.md",
        github: "https://github.com/Gamlilorien/crystal-game",
        demo: "https://gamlilorien.github.io/crystal-game/"
    },
    {
        title: "",
        footer: "",
        image: "",
        readme: "",
        github: "",
        demo: ""
    }
];

//function to loop through array of INPUT objects and then write out javascript
//** we want columns with no more than 3 items per row **


//EVENT triggers
//on page load...

//on click...
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});