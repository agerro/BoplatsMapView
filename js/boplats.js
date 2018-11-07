window.onload = function () {

    var addresses = document.getElementById("objectlist").getElementsByClassName("address");
    for (var i = 0; i < addresses.length; i++) {

        addresses[i].onmouseover = function () {
            var searchterm = encodeURI(this.innerHTML);

            var map = document.createElement('div');
            map.className = 'mapouter';
            map.innerHTML = '<div class="gmap_canvas"><iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=' + searchterm + '&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div><style>.mapouter{text-align:right;height:200px;width:100%;margin:0 !important;}.gmap_canvas {overflow:hidden;background:none!important;height:200px;width:100%;margin:0 !important;}</style>'

            this.parentNode.parentNode.parentNode.parentNode.appendChild(map);
        }
        addresses[i].onmouseout = function () {
            var map = document.getElementsByClassName('mapouter');
            while (map.length > 0) {
                this.parentNode.parentNode.parentNode.parentNode.removeChild(map[0])
            }
        }
    }
}