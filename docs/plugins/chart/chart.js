$(function() {
    $("#pwc_summary_1_30").click();
    $("#pwc_leaders").click();
    $("#pwc_current").click();
    $("#pwc_language_breakdown_summary").click();
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

$("#pwc_summary_91_120").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-91-120.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_91_120_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-members-spinner').hide();
});

$("#pwc_summary_121_150").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-121-150.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_121_150_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-members-spinner').hide();
});

$("#pwc_summary_151_180").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-151-180.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_151_180_stats').highcharts(response);
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

$("#pwc_challenge_054").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-054.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_054_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_053").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-053.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_053_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_052").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-052.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_052_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_051").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-051.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_051_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_050").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-050.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_050_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_049").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-049.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_049_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_048").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-048.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_048_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_047").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-047.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_047_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_046").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-046.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_046_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_045").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-045.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_045_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_044").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-044.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_044_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_043").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-043.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_043_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_042").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-042.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_042_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_041").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-041.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_041_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_040").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-040.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_040_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_039").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-039.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_039_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_038").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-038.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_038_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_037").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-037.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_037_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_036").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-036.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_036_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_035").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-035.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_035_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_034").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-034.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_034_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_033").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-033.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_033_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_032").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-032.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_032_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_031").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-031.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_031_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_030").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-030.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_030_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_029").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-029.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_029_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_028").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-028.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_028_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_027").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-027.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_027_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_026").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-026.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_026_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_025").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-025.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_025_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_024").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-024.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_024_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_023").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-023.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_023_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_022").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-022.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_022_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_021").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-021.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_021_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_020").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-020.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_020_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_019").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-019.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_019_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_018").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-018.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_018_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_017").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-017.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_017_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_016").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-016.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_016_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_015").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-015.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_015_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_014").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-014.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_014_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_013").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-013.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_013_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_012").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-012.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_012_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_011").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-011.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_011_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_010").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-010.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_010_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_009").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-009.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_009_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_008").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-008.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_008_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_007").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-007.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_007_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-challenges-spinner').hide();
});

$("#pwc_challenge_006").click(function() {
    $('#pwc-challenges-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-challenge-006.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_challenge_006_stats').highcharts(response);
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

$("#pwc_language_breakdown_summary").click(function() {
    $('#pwc-language-breakdown-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-language-breakdown-summary.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_language_breakdown_summary_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-language-breakdown-spinner').hide();
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
