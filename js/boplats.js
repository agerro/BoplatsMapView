window.onload = function () {
    var addresses = document.getElementById("objectlist").getElementsByClassName("address");
    for (var i = 0; i < addresses.length; i++) {

        var searchterm = encodeURI(addresses[i].innerHTML);

        var map = document.createElement('div');
        map.className = 'mapouter';
        map.innerHTML = '<div class="gmap_canvas"><iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=' + searchterm + '&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net"></a></div><style>.mapouter{text-align:right;height:200px;width:100%;margin:0 !important;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:100%;margin:0 !important;}</style>'

        document.getElementById("objectlist").getElementsByClassName("address")[i].parentNode.parentNode.parentNode.parentNode.appendChild(map);
    }
}