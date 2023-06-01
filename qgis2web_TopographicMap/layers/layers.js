ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2326").setExtent([777535.005099, 793097.559312, 890371.879733, 858909.284839]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BDRYLINE_1 = new ol.format.GeoJSON();
var features_BDRYLINE_1 = format_BDRYLINE_1.readFeatures(json_BDRYLINE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_BDRYLINE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BDRYLINE_1.addFeatures(features_BDRYLINE_1);
var lyr_BDRYLINE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BDRYLINE_1, 
                style: style_BDRYLINE_1,
                interactive: true,
    title: 'BDRYLINE<br />\
    <img src="styles/legend/BDRYLINE_1_0.png" /> HKSAR Boundary<br />'
        });
var format_HYDRPOLY_2 = new ol.format.GeoJSON();
var features_HYDRPOLY_2 = format_HYDRPOLY_2.readFeatures(json_HYDRPOLY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_HYDRPOLY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HYDRPOLY_2.addFeatures(features_HYDRPOLY_2);
var lyr_HYDRPOLY_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HYDRPOLY_2, 
                style: style_HYDRPOLY_2,
                interactive: true,
    title: 'HYDRPOLY<br />\
    <img src="styles/legend/HYDRPOLY_2_0.png" /> Breakwater <br />\
    <img src="styles/legend/HYDRPOLY_2_1.png" /> Pond / Moat <br />\
    <img src="styles/legend/HYDRPOLY_2_2.png" /> Reservoir <br />\
    <img src="styles/legend/HYDRPOLY_2_3.png" /> Stream Course (open) <br />'
        });
var format_LANDPOLY_3 = new ol.format.GeoJSON();
var features_LANDPOLY_3 = format_LANDPOLY_3.readFeatures(json_LANDPOLY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_LANDPOLY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LANDPOLY_3.addFeatures(features_LANDPOLY_3);
var lyr_LANDPOLY_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LANDPOLY_3, 
                style: style_LANDPOLY_3,
                interactive: true,
    title: 'LANDPOLY<br />\
    <img src="styles/legend/LANDPOLY_3_0.png" /> Mud Flat <br />\
    <img src="styles/legend/LANDPOLY_3_1.png" /> Sand <br />\
    <img src="styles/legend/LANDPOLY_3_2.png" /> Cultivation <br />\
    <img src="styles/legend/LANDPOLY_3_3.png" /> Mangrove <br />\
    <img src="styles/legend/LANDPOLY_3_4.png" /> Swamp / Marsh <br />\
    <img src="styles/legend/LANDPOLY_3_5.png" /> Woodland <br />'
        });
var format_ELEVLINE_4 = new ol.format.GeoJSON();
var features_ELEVLINE_4 = format_ELEVLINE_4.readFeatures(json_ELEVLINE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_ELEVLINE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEVLINE_4.addFeatures(features_ELEVLINE_4);
var lyr_ELEVLINE_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ELEVLINE_4, 
                style: style_ELEVLINE_4,
                interactive: true,
    title: 'ELEVLINE<br />\
    <img src="styles/legend/ELEVLINE_4_0.png" /> 50m - 100m <br />\
    <img src="styles/legend/ELEVLINE_4_1.png" /> 100m - 200m <br />\
    <img src="styles/legend/ELEVLINE_4_2.png" /> 200m - 300m <br />\
    <img src="styles/legend/ELEVLINE_4_3.png" /> 300m - 500m <br />\
    <img src="styles/legend/ELEVLINE_4_4.png" /> 500m - 950m <br />'
        });
var format_HYDRLINE_5 = new ol.format.GeoJSON();
var features_HYDRLINE_5 = format_HYDRLINE_5.readFeatures(json_HYDRLINE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_HYDRLINE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HYDRLINE_5.addFeatures(features_HYDRLINE_5);
var lyr_HYDRLINE_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HYDRLINE_5, 
                style: style_HYDRLINE_5,
                interactive: true,
    title: 'HYDRLINE<br />\
    <img src="styles/legend/HYDRLINE_5_0.png" /> Coastline <br />\
    <img src="styles/legend/HYDRLINE_5_1.png" /> Stream Course (major) <br />\
    <img src="styles/legend/HYDRLINE_5_2.png" /> Stream Course (open) <br />'
        });
var format_BLDGPOLY_6 = new ol.format.GeoJSON();
var features_BLDGPOLY_6 = format_BLDGPOLY_6.readFeatures(json_BLDGPOLY_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2326'});
var jsonSource_BLDGPOLY_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BLDGPOLY_6.addFeatures(features_BLDGPOLY_6);
var lyr_BLDGPOLY_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BLDGPOLY_6, 
                style: style_BLDGPOLY_6,
                interactive: true,
    title: 'BLDGPOLY<br />\
    <img src="styles/legend/BLDGPOLY_6_0.png" /> Building (Built-up)<br />\
    <img src="styles/legend/BLDGPOLY_6_1.png" /> Cottage Area / Temporary Structure<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_BDRYLINE_1.setVisible(true);lyr_HYDRPOLY_2.setVisible(true);lyr_LANDPOLY_3.setVisible(true);lyr_ELEVLINE_4.setVisible(true);lyr_HYDRLINE_5.setVisible(true);lyr_BLDGPOLY_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BDRYLINE_1,lyr_HYDRPOLY_2,lyr_LANDPOLY_3,lyr_ELEVLINE_4,lyr_HYDRLINE_5,lyr_BLDGPOLY_6];
lyr_BDRYLINE_1.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_HYDRPOLY_2.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_LANDPOLY_3.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_ELEVLINE_4.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'HEIGHT': 'HEIGHT', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_HYDRLINE_5.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_BLDGPOLY_6.set('fieldAliases', {'gml_id': 'gml_id', 'GRAPHICID': 'GRAPHICID', 'GRAPHICDATASET': 'GRAPHICDATASET', 'EASTING': 'EASTING', 'NORTHING': 'NORTHING', 'CLASS': 'CLASS', 'TYPE': 'TYPE', 'SUBCAT': 'SUBCAT', 'PRIORITY': 'PRIORITY', 'PHYSICALSTATUS': 'PHYSICALSTATUS', 'SOURCE': 'SOURCE', 'LASTUPDATEDATE': 'LASTUPDATEDATE', });
lyr_BDRYLINE_1.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_HYDRPOLY_2.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_LANDPOLY_3.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_ELEVLINE_4.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'Hidden', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'HEIGHT': 'Range', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_HYDRLINE_5.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_BLDGPOLY_6.set('fieldImages', {'gml_id': 'Hidden', 'GRAPHICID': 'Hidden', 'GRAPHICDATASET': 'Hidden', 'EASTING': 'Hidden', 'NORTHING': 'Hidden', 'CLASS': 'Hidden', 'TYPE': 'TextEdit', 'SUBCAT': 'Hidden', 'PRIORITY': 'Hidden', 'PHYSICALSTATUS': 'Hidden', 'SOURCE': 'Hidden', 'LASTUPDATEDATE': 'Hidden', });
lyr_BDRYLINE_1.set('fieldLabels', {'TYPE': 'inline label', });
lyr_HYDRPOLY_2.set('fieldLabels', {'TYPE': 'inline label', });
lyr_LANDPOLY_3.set('fieldLabels', {'TYPE': 'inline label', });
lyr_ELEVLINE_4.set('fieldLabels', {'HEIGHT': 'inline label', });
lyr_HYDRLINE_5.set('fieldLabels', {'TYPE': 'inline label', });
lyr_BLDGPOLY_6.set('fieldLabels', {'TYPE': 'inline label', });
lyr_BLDGPOLY_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});