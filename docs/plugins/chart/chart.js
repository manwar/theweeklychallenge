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
