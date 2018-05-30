import * as React from 'react';
import PropTypes from 'prop-types';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_layer_Vector from 'ol/layer/vector';


class Vector extends React.Component{

	constructor(props){
		super(props);
		this._vector;
		this.options = {
			renderMode : undefined,
			renderOrder : undefined,
			map: undefined,
			extent: undefined,
			minResolution: undefined,
			maxResolution: undefined,
			opacity: undefined,
			renderBuffer: undefined,
			source: undefined,
			declutter: undefined,
			style: undefined,
			updateWhileAnimating: undefined,
			updateWhileInteracting: undefined,
			visible: undefined,
			zIndex: undefined,
		};
		this.events = {
			'change': undefined,
		    'change:extent': undefined,
		    'change:maxResolution': undefined,
		    'change:minResolution': undefined,
		    'change:opacity': undefined,
		    'change:preload': undefined,
		    'change:source': undefined,
		    'change:visible': undefined,
		    'change:zIndex': undefined,
		    'postcompose': undefined,
		    'precompose': undefined,
		    'propertychange': undefined,
		    'render': undefined
		};
	}

	componentDidMount() {
		let options = Method.getOptions(Object.assign(this.options, this.props));

		this._vector = new ol_layer_Vector(options);
		if(this.props.zIndex){
      		this._vector.setZIndex(this.props.zIndex);
		}
		
		this.props.mapComponent.map.layers.push(this._vector);
		
		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this._vector.on(eventName, olEvents[eventName]);
		}
		this.props.mapComponent.map.addLayer(this._vector);
	}

	componentWillUnmount() {
		this.props.mapComponent.map.removeLayer(this._vector);
	}

	render() {
		return null;
	}
}

Vector.propTypes = {
	source : PropTypes.object.isRequired
}

export default props => (
  <MapContext.Consumer>
    {mapComponent => {
      return (<Vector {...props} mapComponent={mapComponent} />)
    }}
  </MapContext.Consumer>
);
