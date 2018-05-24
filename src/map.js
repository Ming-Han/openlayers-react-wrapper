import * as React from 'react';
import MapContext from './mapContext';
import {Method} from './Method';
import ol_map from 'ol/map';
import style from './Map.css';


/* Map remove controls, cnteractions, layers, overlays, target and view control properties.
Because those of properties had wrapped into react component. So user should use react component
to creat those of properties.*/

class Map extends React.Component{
	constructor(props){
		super(props);
		this.mapDiv ; 
		this._map = {} ;
		this.layers = {};
		this.interactions = {};
		this.controls = {};
		this.overlays = {};
		this.options = {
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
		this.methods = {
			"forEachFeatureAtPixel" : undefined,
			"forEachLayerAtPixel" : undefined,
		}
	}

	componentDidMount() {
		this._map.setTarget(this.mapDiv);
	}

	addLayer(layers) {
		this._map.addLayer(layers);
	}

	addControl(controls) {
		console.log(controls)
		this._map.addControl(controls);	
	}

	forEachFeatureAtPixel(pixel,callback,options) {
		(options) ? null : options = {};
		this.props.mapComponent.map._map.forEachFeatureAtPixel(pixel,callback,options);
	}

	forEachLayerAtPixel() {
		console.log('forEachFeatureAtPixel !');
	}

	getControls() {
		return this._map.getControls();
	}

	removeLayer(layer) {
		this._map.removeLayer(layer)
	}

	setView(view) {
		this._map.setView(view);
	}

	render(){
		let options = Method.getOptions(Object.assign(this.options, this.props));
		this._map = new ol_map(options);
		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this._map.on(eventName, olEvents[eventName]);
		}
		this.props.mapComponent.map = this;

		return (
			<div>
				<div className = {style["openlayers-map"]} ref={(el) => {this.mapDiv = el ;}} >
	          		{this.props.children}
				</div>
			</div>
		)
	}
}

export default props => (
	<MapContext.Consumer>
	  {mapComponent => {
		return (<Map {...props} mapComponent={mapComponent} />)
	  }}
	</MapContext.Consumer>
  );