
//function to determine current year for copywrite etc
var currentYear = function () {
    var d = new Date();
    var y = d.getFullYear();

    $(".cYear").text(y);
}

//Constructors
/* <a href="images/myMeme.png" data-toggle="lightbox" data-gallery="hidden-images" data-title="myMeme" data-footer="A Memeilistic search tool and meme repository that's easy to use and has a cleaner, less busy UI. Using Firebase User Authentication, Node, Sequelize & MySQL, this web app allows users to find and save their own personal favorites for later retrevial or sharing.">
    <img class="card-img-top img-fluid portfolio-link" src="images/myMeme.png" folder="myMeme" demo="https://blooming-ravine-47072.herokuapp.com/">
    <div class="card-body">
        <h5 class="card-title portfolio-link" folder="myMeme" demo="https://blooming-ravine-47072.herokuapp.com/">myMeme</h5>
    </div>
</a>
<div class="card-body"></div>
*/

function portfolioEntry(imageURL, title, footer, folder, demo) {
    return $("<a>").attr({"href": imageURL, "data-toggle": "lightbox", "data-gallery": "hidden-images", "data-title": title, "data-footer": footer }).append(
        $("<img>").attr({"class": "card-img-top img-fluid portfolio-link", "src": imageURL, "folder": folder, "demo": demo })
    ).append(
        $("<div>").attr({"class": "card-body"}).html(
            $("<h5>").attr({"class": "card-title"}).text(title)
        )
    )
}

var test = portfolioEntry("images/at-memory.png", "React-Tube");

var reactTube = 
    $("<a>").attr({"href": "images/at-memory.png", "data-toggle": "lightbox", "data-gallery": "hidden-images", "data-title": "test"}).append(
        $("<img>").attr({"class": "card-img-top img-fluid portfolio-link", "src": "images/at-memory.png", "folder": "Memory-Game", "demo": "git" })
    )

// function portfolioEntry(imageURL, title, footer, folder, demo) {
//    imageURL & " | " & title & " | " & footer & " | " & folder & " | " & demo
// }


// var newItem = portfolioEntry("images/at-memory.png", "React-Tube", "Test footer", "Memory-Game", "git");



//EVENT triggers
//onload of page
$(document).ready(function() {
    //for copywrite year
    currentYear();
    $("#react-tube").html(test);
    
    //for bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();
});
