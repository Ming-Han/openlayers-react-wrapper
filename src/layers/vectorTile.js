import * as React from 'react';
import PropTypes from 'prop-types';
import {Method} from '../Method';
import MapContext from '../mapContext';
import ol_layer_VectorTile from 'ol/layer/vectortile';


class VectorTile extends React.Component{

	constructor(props){
		super(props);
		this._vectorTile;
		this._name = props.name;
		this.options = {
            renderBuffer : undefined,
            renderMode : undefined,
            renderOrder : undefined,
            map : undefined,
            extent : undefined,
            minResolution : undefined,
            maxResolution : undefined,
            opacity : undefined,
            preload : undefined,
            source : undefined,
            declutter : undefined,
            style : undefined,
            updateWhileAnimating : undefined,
            updateWhileInteracting : undefined,
            visible : undefined,
            zIndex : undefined
		};
		this.events = {
			"change": undefined,
		    "change:extent": undefined,
		    "change:maxResolution": undefined,
		    "change:minResolution": undefined,
		    "change:opacity" : undefined,
		    "change:preload" : undefined,
            "change:source": undefined,
            "change:useInterimTilesOnError" : undefined,
		    "change:visible": undefined,
		    "change:zIndex": undefined,
		    postcompose: undefined,
		    precompose: undefined,
		    propertychange: undefined,
		    render: undefined
		};
	}

	componentDidMount() {
		let options = Method.getOptions(Object.assign(this.options, this.props));

		this._vectorTile = new ol_layer_VectorTile(options);
		if(this.props.zIndex){
      		this._vectorTile.setZIndex(this.props.zIndex);
		}
		
		this.props.mapComponent.map.layers[this._name] = this;
		this.props.mapComponent.map.addLayer(this._vectorTile);
		

		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this._vectorTile.on(eventName, olEvents[eventName]);
		}
	}

	componentWillUnmount() {
		this.props.mapComponent.map._map.removeLayer(this._vectorTile);
	}

	render() {
		return null;
	}
}

VectorTile.propTypes = {
	name : PropTypes.string.isRequired,
	source : PropTypes.object.isRequired
}

export default props => (
  <MapContext.Consumer>
    {mapComponent => {
      return (<VectorTile {...props} mapComponent={mapComponent} />)
    }}
  </MapContext.Consumer>
);
