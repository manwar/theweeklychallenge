$(function() {
    $("#pwc_summary").click();
});

$("#pwc_summary").click(function() {
    $('#pwc-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-spinner').hide();
});

$("#pwc_current").click(function() {
    $('#pwc-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-current.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_current_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-spinner').hide();
});

$("#pwc_challenge_001").click(function() {
    $('#pwc-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-001.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_001_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-spinner').hide();
});
