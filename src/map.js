import * as React from 'react';
import MapContext from './mapContext';
import ol_source_OSM from 'ol/source/osm';
import ol_layer_Tile from 'ol/layer/Tile';
import style from './Map.css';


/* Map remove controls, cnteractions, layers, overlays, target and view control properties.
Because those of properties had wrapped into react component. So user should use react component
to creat those of properties.*/

class Map extends React.Component{
	constructor(props){
		super(props);
		this.mapDiv ; 
		this.map = {} ;
		this.option = {
			pixelRatio : undefined,
			keyboardEventTarget : undefined,
			loadTilesWhileAnimating : undefined,
			loadTilesWhileInteracting : undefined,
			logo : undefined,
			moveTolerance : undefined,
			renderer : undefined,
		};
		this.events = {
			"change:" : undefined,
			"change:layerGroup" : undefined,
			"change:size" : undefined,
			"change:target" : undefined,
			"change:view" : undefined,
			"click" : undefined,
			"dblclick" : undefined,
			"moveend" : undefined, 
			"movestart" : undefined,
			"pointerdrag" : undefined,
			"pointermove" : undefined,
			"postcompose" : undefined,
			"postrender" : undefined,
			"precompose" : undefined,
			"propertychange" : undefined,
			"singleclick" : undefined
		}
	}

	componentDidMount() {
		this.map.setTarget(this.mapDiv);
	}

	render(){
		let options = Method.getOptions(Object.assign(this.options, this.props));
		this.map = new ol_map(options);
		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this.map.on(eventName, olEvents[eventName]);
    	}
		const mapComponent = {
			component : this,
			map : this.map
		}
		return (
			<div>
				<div className = {style["openlayers-map"]} ref={(el) => {this.mapDiv = el ;}} >
					<MapContext.Provider value={mapComponent}>
	          			{this.props.children}
	        		</MapContext.Provider>
				</div>
			</div>
		)
	}
}

export default Map;