import ScriptTag from 'react-script-tag';
import React from 'react';


const SCOOS = () => {
    <div>
        <ScriptTag type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyCTQYa2pAOWsGBunl-lBj5nQuxtH4nb8ko&v=3&sensor=false" />
        <ScriptTag type="text/javascript" src="http://cordc.ucsd.edu/js/RTV/RTVMapType.js"></ScriptTag>
    </div>

    const mapOptions = {
        center: new google.maps.LatLng(38.0, -98.0),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

    const map = new google.maps.Map(
    document.getElementById("map_canvas"), mapOptions
    );

    /**
     * Adding HFRADAR-derived surface currents to the map
     */
    const rtv = new RTVMapType(map);
    map.overlayMapTypes.push(rtv);

    return (
        <div id="map_canvas" style="width: 500px; height: 300px;"></div>
    );
};

export default SCOOS;