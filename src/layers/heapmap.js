import * as React from 'react';
import PropTypes from 'prop-types';
import {Method} from '../Method';
import MapContext from '../mapContext';
import ol_layer_Heapmap from 'ol/layer/heapmap'

class HeapMap extends React.Component{
    constructor(props){
        super(props);
        this._heapmap = undefined,
        this._name = props.name,
        this.options = {
            gradient : undefined,
            radius : undefined,
            blur : undefined,
            shadow : undefined,
            weight : undefined,
            extent : undefined,
            minResolution : undefined,
            maxResolution : undefined,
            opacity : undefined,
            source : undefined,
            visible : undefined,
            zIndex : undefined
        }
        this.events = {
            change : undefined,
            "change:blur" : undefined, 
            "change:extent" : undefined, 
            "change:gradient" : undefined, 
            "change:maxResolution" : undefined, 
            "change:minResolution" : undefined, 
            "change:opacity" : undefined, 
            "change:radius" : undefined, 
            "change:source" : undefined, 
            "change:visible" : undefined, 
            "change:zIndex" : undefined, 
            postcompose : undefined, 
            precompose : undefined, 
            propertychange : undefined, 
            render : undefined, 
        }
    }

    componentDidMount() {
		let options = Method.getOptions(Object.assign(this.options, this.props));

		this._heapmap = new ol_layer_Heapmap(options);
		if(this.props.zIndex){
      		this._vector.setZIndex(this.props.zIndex);
		}
		
		this.props.mapComponent.map.layers[this._name] = this;
		this.props.mapComponent.map.addLayer(this._heapmap);
		

		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this._heapmap.on(eventName, olEvents[eventName]);
		}
	}

	componentWillUnmount() {
		this.props.mapComponent.map._map.removeLayer(this._heapmap);
	}

	render() {
		return null;
	}
}

HeapMap.propTypes = {
	name : PropTypes.string.isRequired,
	source : PropTypes.object.isRequired
}

export default props => (
  <MapContext.Consumer>
    {mapComponent => {
      return (<HeapMap {...props} mapComponent={mapComponent} />)
    }}
  </MapContext.Consumer>
);