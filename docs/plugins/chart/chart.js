$(function() {
    $("#pwc_summary_1_30").click();
    $("#pwc_leaders").click();
    $("#guest_leaders").click();
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

$("#pwc_summary_181_210").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-181-210.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_181_210_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-members-spinner').hide();
});

$("#pwc_summary_211_240").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-211-240.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_211_240_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-members-spinner').hide();
});

$("#pwc_summary_241_270").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-241-270.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_241_270_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-members-spinner').hide();
});

$("#pwc_summary_271_300").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-271-300.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_271_300_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-members-spinner').hide();
});

$("#pwc_summary_301_330").click(function() {
    $('#pwc-members-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-summary-301-330.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_summary_301_330_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-members-spinner').hide();
});

$("#guest_leaders").click(function() {
    $('#guest-leaders-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'guest-leaders.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#guest_leaders_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#guest-leaders-spinner').hide();
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

$("#pwc_yearly_language_summary").click(function() {
    $('#pwc-language-breakdown-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-yearly-language-summary.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_yearly_language_summary_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-language-breakdown-spinner').hide();
});

$("#pwc_language_breakdown_2019").click(function() {
    $('#pwc-language-breakdown-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-language-breakdown-2019.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_language_breakdown_stats_2019').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-language-breakdown-spinner').hide();
});

$("#pwc_language_breakdown_2020").click(function() {
    $('#pwc-language-breakdown-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-language-breakdown-2020.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_language_breakdown_stats_2020').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-language-breakdown-spinner').hide();
});

$("#pwc_language_breakdown_2021").click(function() {
    $('#pwc-language-breakdown-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-language-breakdown-2021.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_language_breakdown_stats_2021').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-language-breakdown-spinner').hide();
});

$("#pwc_language_breakdown_2022").click(function() {
    $('#pwc-language-breakdown-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-language-breakdown-2022.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_language_breakdown_stats_2022').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-language-breakdown-spinner').hide();
});

$("#pwc_language_breakdown_2023").click(function() {
    $('#pwc-language-breakdown-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-language-breakdown-2023.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_language_breakdown_stats_2023').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-language-breakdown-spinner').hide();
});

$("#pwc_language_breakdown_2024").click(function() {
    $('#pwc-language-breakdown-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-language-breakdown-2024.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_language_breakdown_stats_2024').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-language-breakdown-spinner').hide();
});

$("#pwc_language_breakdown_2025").click(function() {
    $('#pwc-language-breakdown-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pwc-language-breakdown-2025.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#pwc_language_breakdown_stats_2025').highcharts(response);
        }
    };
    xobj.send(null);

    $('#pwc-language-breakdown-spinner').hide();
});

$("#guest_lang_breakdown").click(function() {
    $('#guest-leaders-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'guest-language-breakdown.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#guest_lang_breakdown_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#guest-leaders-spinner').hide();
});

$("#yearly_guest_lang_summary").click(function() {
    $('#guest-leaders-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'yearly-guest-language-summary.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#yearly_guest_lang_summary_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#guest-leaders-spinner').hide();
});

$("#yearly_guest_lang_breakdown_2019").click(function() {
    $('#guest-leaders-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'guest-language-breakdown-2019.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#yearly_guest_lang_breakdown_2019_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#guest-leaders-spinner').hide();
});

$("#yearly_guest_lang_breakdown_2020").click(function() {
    $('#guest-leaders-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'guest-language-breakdown-2020.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#yearly_guest_lang_breakdown_2020_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#guest-leaders-spinner').hide();
});

$("#yearly_guest_lang_breakdown_2021").click(function() {
    $('#guest-leaders-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'guest-language-breakdown-2021.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#yearly_guest_lang_breakdown_2021_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#guest-leaders-spinner').hide();
});

$("#yearly_guest_lang_breakdown_2022").click(function() {
    $('#guest-leaders-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'guest-language-breakdown-2022.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#yearly_guest_lang_breakdown_2022_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#guest-leaders-spinner').hide();
});

$("#yearly_guest_lang_breakdown_2023").click(function() {
    $('#guest-leaders-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'guest-language-breakdown-2023.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#yearly_guest_lang_breakdown_2023_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#guest-leaders-spinner').hide();
});

$("#yearly_guest_lang_breakdown_2024").click(function() {
    $('#guest-leaders-spinner').show();

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'guest-language-breakdown-2024.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var response = JSON.parse(xobj.responseText);
            $('#yearly_guest_lang_breakdown_2024_stats').highcharts(response);
        }
    };
    xobj.send(null);

    $('#guest-leaders-spinner').hide();
});
