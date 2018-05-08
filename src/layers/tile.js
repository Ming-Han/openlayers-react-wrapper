import * as React from 'react';
import PropTypes from 'prop-types';
import {Method} from '../Method';
import MapContext from '../mapContext';
import ol_layer_Tile from 'ol/layer/Tile';


class Tile extends React.Component{
	constructor(props){
		super(props);
		this._name = props.name;
		this._tile = {};
		this.options = {
			opacity : undefined,
			preload : undefined,
			source : undefined,
			map : undefined,
			visible : undefined,
			extent : undefined,
			minResolution : undefined,
			maxResolution : undefined,
			useInterimTilesOnError : undefined,
			zIndex : undefined
		}
		this.events = {
			change : undefined,
			"change:extent" : undefined,
			"change:maxResolution" : undefined,
			"change:minResolution" : undefined,
			"change:opacity" : undefined,
			"change:preload" : undefined,
			"change:source" : undefined,
			"change:useInterimTilesOnError" : undefined,
			"change:visible" : undefined,
			"change:zIndex" : undefined,
			"postcompose" : undefined,
			"precompose" : undefined,
			"propertychange" : undefined,
			"render" : undefined
		}
	}

	componentDidMount() {

		let options = Method.getOptions(Object.assign(this.options, this.props));

		this._tile = new ol_layer_Tile(options);
		if(this.props.zIndex){
      		this.vector.setZIndex(this.props.zIndex);
		}
		
		this.props.mapComponent.map.layers[this._name] = this;
		this.props.mapComponent.map.addLayer(this._tile);
		

		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this._tile.on(eventName, olEvents[eventName]);
		}
	}

	componentWillUnmount() {
		this.props.mapComponent.map._map.removeLayer(this.tile);
	}

	render() {
		return null;
	}
}

Tile.propTypes = {
	name : PropTypes.string.isRequired,
	source : PropTypes.object.isRequired
}

export default props => (
  <MapContext.Consumer>
    {mapComponent => {
      return (<Tile {...props} mapComponent={mapComponent} />)
    }}
  </MapContext.Consumer>
);
