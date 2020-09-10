$(function() {
    $("#gc_current").click();
});

document.addEventListener('click', function (e) {
  var target = e.target;
  if (target.tagName && target.tagName.toLowerCase() == "a") {
    var objectId = target.id;
    if (objectId.startsWith('gc_challenge_')) {
        var file = objectId.replace(/_/g, "-");
        file = file + ".json";
        var stat = "#" + objectId + "_stats";

        $('#gc-challenges-spinner').show();

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', file, true);
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                var response = JSON.parse(xobj.responseText);
                $(stat).highcharts(response);
            }
        };
        xobj.send(null);

        $('#gc-challenges-spinner').hide();
    }
  }
});

$("#gc_current").click(function() {
    $('#gc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'gc-current.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#gc_current_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#gc-challenges-spinner').hide();
});
/*
$("#gc_challenge_076").click(function() {
    $('#gc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'guest-contributions-076.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#gc_challenge_076_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#gc-challenges-spinner').hide();
});

$("#gc_challenge_075").click(function() {
    $('#gc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'guest-contributions-075.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#gc_challenge_075_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#gc-challenges-spinner').hide();
});
*/
