
//function to determine current year for copywrite etc
var currentYear = function () {
    var d = new Date();
    var y = d.getFullYear();

    $(".cYear").text(y);
}


//EVENT triggers
//onload of page
$(document).ready(function() {
    //for copywrite year
    currentYear();
    //for bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();
});
