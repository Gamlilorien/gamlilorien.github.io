
//function to determine current year for copywrite etc
var currentYear = function () {
    var d = new Date();
    var y = d.getFullYear();

    $(".cYear").text(y);
}

//Constructors
/* <div class="col-lg-4">
<a href="images/at-memory.png" data-toggle="lightbox" data-gallery="hidden-images" data-title="Adventure Time Memory Game" data-footer="A simple REACTjs appliction that uses onClick event triggers to track appliction state and test a users memory in this simple game.">
    <img class="card-img-top img-fluid portfolio-link" src="images/at-memory.png" folder="Memory-Game" demo="git">
    <div class="card-body">
    <h5 class="card-title portfolio-link" folder="Memory-Game" demo="git">Memory Game</h5>
    </div>
</a>
</div> */

function portfolioEntry(imageURL, title, footer, folder, demo) {
    return $("<div>").attr({"class": "col-lg-4"}).html(
    $("<a>").attr({"href": imageURL, "data-toggle": "lightbox", "data-gallery": "hidden-images", "data-title": title, "data-footer": footer }).append(
        $("<img>").attr({"class": "card-img-top img-fluid portfolio-link", "src": imageURL, "folder": folder, "demo": demo })
    ).append(
        $("<div>").attr({"class": "card-body"}).html(
            $("<h5>").attr({"class": "card-title portfolio-link", "folder": folder, "demo": demo}).text(title)
        )
      )
    )
}

var test = portfolioEntry("images/at-memory.png", "React-Tube", "footer text", "Memory-Game", "git");


//EVENT triggers
//onload of page
$(document).ready(function() {
    //for copywrite year
    currentYear();
    $(".portfolioRow").append(test);
    
    //for bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();
});
