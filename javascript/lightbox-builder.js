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


/* <div class="btn-group portfolio-buttons" role="group">
    <a href="https://github.com/Gamlilorien/got-hanged/blob/master/README.md" target="_blank" role="button" class="btn btn-dark" data-toggle="tooltip" data-placement="bottom" title="View Readme"><i class="fab fa-readme"></i></a>
    <a href="https://github.com/Gamlilorien/got-hanged/" target="_blank" role="button" class="btn btn-dark" data-toggle="tooltip" data-placement="bottom" title="View Code on GitHub"><i class="fab fa-github-square"></i></a>
    <a href="https://gamlilorien.github.io/got-hanged/" target="_blank" role="button" class="btn btn-dark" data-toggle="tooltip" data-placement="bottom" title="View Demo"><i class="fas fa-external-link-square-alt"></i></a>
</div> */

//function to build buttonBar for portfolio items and dynamically add to modal card window
//this function will be called by an ON CLICK event trigger
var makeButtonBar = function(folderName, demo) {
    var readmeURL = "https://github.com/Gamlilorien/" +folderName +"/blob/master/README.md";
    var gitURL = "https://github.com/Gamlilorien/" +folderName +"/";
    var demoURL = genDemoURL(demo);

    //We need a way to conditionally trigger the demoURL as it will not allways be hosted on gitHub...
    //FIRST, ceck if there is a demo value (ie not null)
    function genDemoURL(demo) {
        if (demo) {
            //Now evaluate if the demo value is 'git'
            if (demo === "git") {
                demoURL = "https://gamlilorien.github.io/" +folderName +"/";
                return demoURL;
            } else {
                demoURL = demo;
                return demoURL;
            }
        //otherwise if NO DEMO VALUE, default to nothing
        } else {
            demoURL = "#";
            return demoURL;
        }
    };
    //var demoURL = "https://gamlilorien.github.io/" +folderName +"/";
    // console.log(readmeURL +"\n" +gitURL +"\n" +demoURL)

    //now build button bar
    // buttonBar = $("<div>").attr({"class": "btn-group myBtn-bar", "role": "group"})
    //         //button1
    //         .append(
    //             $("<a>").attr({"href": readmeURL, "target": "_blank", "role": "button", "class": "btn btn-dark", "data-toggle": "tooltip", "data-placement": "bottom", "title": "View Readme"}).html($("<i>").attr({"class": "fab fa-readme"}))
    //         ) 

    //         //button2
    //         .append(
    //             $("<a>").attr({"href": gitURL, "target": "_blank", "role": "button", "class": "btn btn-dark", "data-toggle": "tooltip", "data-placement": "bottom", "title": "View code on GitHub"}).html($("<i>").attr({"class": "fab fa-github-square"}))
    //         ) 

    //         //button3
    //         .append(
    //             $("<a>").attr({"href": demoURL, "target": "_blank", "role": "button", "class": "btn btn-dark", "data-toggle": "tooltip", "data-placement": "bottom", "title": "View Demo"}).html($("<i>").attr({"class": "fas fa-external-link-square-alt"}))
    //         );
    //had to update so it creates a string for easier use with ekko-lightbox.js
    //only want to include the demo button if relevent
    if (demoURL !== "#") {
        var viewDemo = '<a href="' +demoURL +'" target="_blank" role="button" class="btn btn-dark" data-toggle="tooltip" data-placement="bottom" title="View Demo"><i class="fas fa-external-link-square-alt"></i></a></div>'
    } else {
        //otherwise omit the button
        var viewDemo = "";
    }

    buttonBar = '<div class="btn-group portfolio-buttons" role="group"><a href="' + readmeURL +'" target="_blank" role="button" class="btn btn-dark" data-toggle="tooltip" data-placement="bottom" title="View Readme"><i class="fab fa-readme"></i></a><a href="' + gitURL +'" target="_blank" role="button" class="btn btn-dark" data-toggle="tooltip" data-placement="bottom" title="View Code on GitHub"><i class="fab fa-github-square"></i></a>' +viewDemo;

    //now place buttonBar in modal window
    //$("loaded.bs.modal").append(buttonBar);
    //$(".portfolio-buttons").html(buttonBar);
};

//EVENT triggers
//on page load...

//on click...
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
    //we need this to show tool tips for newly created buttons
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).on( "click", ".portfolio-link", function() {
    folder = $(this).attr("folder");
    var demo = $(this).attr("demo");
    console.log(folder);
    console.log(demo);
    makeButtonBar(folder, demo);
});