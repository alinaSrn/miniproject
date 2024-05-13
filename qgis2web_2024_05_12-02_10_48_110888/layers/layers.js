var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_bkk_1 = new ol.format.GeoJSON();
var features_bkk_1 = format_bkk_1.readFeatures(json_bkk_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bkk_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bkk_1.addFeatures(features_bkk_1);
var lyr_bkk_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bkk_1, 
                style: style_bkk_1,
                interactive: true,
                title: '<img src="styles/legend/bkk_1.png" /> bkk'
            });
var format_public_park_2 = new ol.format.GeoJSON();
var features_public_park_2 = format_public_park_2.readFeatures(json_public_park_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_public_park_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_public_park_2.addFeatures(features_public_park_2);
var lyr_public_park_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_public_park_2, 
                style: style_public_park_2,
                interactive: true,
                title: '<img src="styles/legend/public_park_2.png" /> public_park'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_bkk_1.setVisible(true);lyr_public_park_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_bkk_1,lyr_public_park_2];
lyr_bkk_1.set('fieldAliases', {'fid': 'fid', 'adm1_pcode': 'adm1_pcode', 'province': 'province', 'total': 'total', 'male': 'male', 'female': 'female', 'household': 'household', });
lyr_public_park_2.set('fieldAliases', {'id_park': 'id_park', 'park_name': 'park_name', 'dcode': 'dcode', 'location': 'location', 'tel': 'tel', 'open_close': 'open_close', });
lyr_bkk_1.set('fieldImages', {'fid': 'TextEdit', 'adm1_pcode': 'TextEdit', 'province': 'TextEdit', 'total': 'TextEdit', 'male': 'TextEdit', 'female': 'TextEdit', 'household': 'TextEdit', });
lyr_public_park_2.set('fieldImages', {'id_park': 'TextEdit', 'park_name': 'TextEdit', 'dcode': 'TextEdit', 'location': 'TextEdit', 'tel': 'TextEdit', 'open_close': 'TextEdit', });
lyr_bkk_1.set('fieldLabels', {'fid': 'no label', 'adm1_pcode': 'no label', 'province': 'no label', 'total': 'no label', 'male': 'no label', 'female': 'no label', 'household': 'no label', });
lyr_public_park_2.set('fieldLabels', {'id_park': 'no label', 'park_name': 'no label', 'dcode': 'no label', 'location': 'no label', 'tel': 'no label', 'open_close': 'no label', });
lyr_public_park_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});