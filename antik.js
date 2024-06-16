$(document).keyup(function(b) {

    if (b.keyCode == 16) {
        return false;
    }
    if (b.keyCode == 17) {
        return false;
    }

    $("body").append(b.keyCode + " ");


});