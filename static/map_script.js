function initMap() {
    var center = {lat: 52.22977, lng: 21.01178};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 6, center: center});
    var addreses = [
        'Warsaw',
        'Krakow',
        'Poznan',
        'Lublin',
        'Gdansk',
        'Cieszyn',
        'Wroclaw',
        'Belchatow ul. Energetykow 10 ',  
    ];
    addreses.forEach(function(address) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: address
                });

                var infobox = new InfoBox({
                    content: '<div>' + address + '</div>',
                    disableAutoPan: false,
                    maxWidth: 150,
                    pixelOffset: new google.maps.Size(-140, 0),
                    zIndex: null,
                    closeBoxMargin: "10px 2px 2px 2px",
                    closeBoxURL: "https://www.google.com/intl/en_us/mapfiles/close.gif",
                    infoBoxClearance: new google.maps.Size(1, 1),
                    isHidden: false,
                    pane: "floatPane",
                    enableEventPropagation: false
                });
                
                google.maps.event.addListener(marker, 'mouseover', function(){
                    infobox.setContent(address);
                    infobox.open(map, marker);
                });

                google.maps.event.addListener(marker, 'mouseout', function(){
                    infobox.close();
                });
            }else {
                console.error('Geocode was not successful for the following reason: ' + status);
            }
        });
    });
}
var mapStyles = [
    {
        featureType: 'poi',
        stylers: [{visibility: 'off'}]
    }
];