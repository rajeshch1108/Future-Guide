
var str = "";
$("#course").on('click', function () {
    if ($('input[id=web]:checked', '#mcq').val() == "web") {
        document.getElementById("check").setAttribute("href", "web.html");
    }
    if ($('input[id=app]:checked', '#mcq').val() == "app") {
        document.getElementById("check").setAttribute("href", "app.html");
    }
    if ($('input[id=iot]:checked', '#mcq').val() == "iot") {
        document.getElementById("check").setAttribute("href", "iot.html");
    }
    if ($('input[id=ml]:checked', '#mcq').val() == "ml") {
        document.getElementById("check").setAttribute("href", "ml.html");
    }
    if ($('input[id=cloud]:checked', '#mcq').val() == "cloud") {
        document.getElementById("check").setAttribute("href", "cloud.html");
    }
    if ($('input[id=cyber]:checked', '#mcq').val() == "cyber") {
        document.getElementById("check").setAttribute("href", "cyber.html");
    }
});



