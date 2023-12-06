
var str = "";
$("#submit").on('click', function () {
    str += $('input[id=project]:checked', '#mcq').val();
    str += $('input[id=research]:checked', '#mcq').val();
    str += $('input[id=long]:checked', '#mcq').val();
    str += $('input[id=short]:checked', '#mcq').val();
    str += $('input[id=software]:checked', '#mcq').val();
    str += $('input[id=hardware]:checked', '#mcq').val();

    if (str == "projectundefinedundefinedshortsoftundefined") {
        document.getElementById("decide").setAttribute("href", "web.html");
    }
    if (str == "projectundefinedlongundefinedundefinedhard" || str == "projectundefinedundefinedshortundefinedhard") {
        document.getElementById("decide").setAttribute("href", "iot.html");
    }
    if (str == "projectundefinedlongundefinedsoftundefined") {
        document.getElementById("decide").setAttribute("href", "app.html");
    }
    if (str == "undefinedresearchlongundefinedundefinedhard" || str == "undefinedresearchundefinedshortundefinedhard") {
        document.getElementById("decide").setAttribute("href", "cyber.html");
    }
    if (str == "undefinedresearchlongundefinedsoftundefined") {
        document.getElementById("decide").setAttribute("href", "cloud.html");
    }
    if (str == "undefinedresearchundefinedshortsoftundefined") {
        document.getElementById("decide").setAttribute("href", "ml.html");
    }
    if (str.length > 50) {
        document.getElementById("final").innerHTML = "Please refresh the page";
    }
});
//Dont worry about the refresh thing just create the html files and then setAttribute




