import * as React from 'react';
import MapContext from './mapContext';
import {Method} from './method';
import ol_map from 'ol/map';
import style from './Map.css';


/* Map remove controls, cnteractions, layers, overlays, target and view control properties.
Because those of properties had wrapped into react component. So user should use react component
to creat those of properties.*/

class Map extends React.Component{
	constructor(props){
		super(props);
		this.props.mapComponent.map = this;
		this.mapDiv ; 
		this._map = undefined ;
		this.layers = [];
		this.interactions = {};
		this.controls = {};
		this.overlays = {};
		this.view = {};
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

	// openlayer method wrapper 
	addLayer(layers) {
		if(this._map != undefined )
			this._map.addLayer(layers);
	}

	addControl(controls) {
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
		if(this._map != undefined)
			this._map.setView(view);
	}

	// react original method 
	componentDidMount() {
		console.log('map didMount')
		let options = Method.getOptions(Object.assign(this.options, this.props));

		options.layers = this.layers;
		options.view = this.view;
		this._map = new ol_map(options);

		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this._map.on(eventName, olEvents[eventName]);
		}
		this._map.setTarget(this.mapDiv);

	}

	render(){
		console.log('map render ')
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