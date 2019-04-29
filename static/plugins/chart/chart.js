$(function() {
    $("#pwc_summary_1_30").click();
    $("#pwc_leaders").click();
    $("#pwc_current").click();
    $("#pwc_language_breakdown").click();
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

$("#pwc_summary_1_30").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-1-30.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_1_30_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-members-spinner').hide();
});

$("#pwc_summary_31_60").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-31-60.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_31_60_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-members-spinner').hide();
});

$("#pwc_summary_61_90").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-61-90.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_61_90_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-members-spinner').hide();
});

$("#pwc_leaders").click(function() {
    $('#pwc-leaders-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-leaders.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_leaders_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-leaders-spinner').hide();
});

$("#pwc_current").click(function() {
    $('#pwc-challenges-spinner').show();

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

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_005").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-005.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_005_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_004").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-004.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_004_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_003").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-003.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_003_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_002").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-002.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_002_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_001").click(function() {
    $('#pwc-challenges-spinner').show();

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

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_language_breakdown").click(function() {
    $('#pwc-language-breakdown-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-language-breakdown.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_language_breakdown_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-language-breakdown-spinner').hide();
});
