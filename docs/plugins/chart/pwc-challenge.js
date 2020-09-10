$(function() {
    $("#pwc_current").click();
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

document.addEventListener('click', function (e) {
  var target = e.target;
  if (target.tagName && target.tagName.toLowerCase() == "a") {
    var objectId = target.id;
    if (objectId.startsWith('pwc_challenge_')) {
        var file = objectId.replace(/_/g, "-");
        file = file + ".json";
        var stat = "#" + objectId + "_stats";

        $('#pwc-challenges-spinner').show();

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

        $('#pwc-challenges-spinner').hide();
    }
  }
});
