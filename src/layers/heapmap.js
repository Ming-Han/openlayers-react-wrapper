import * as React from 'react';
import PropTypes from 'prop-types';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_layer_Heatmap from 'ol/layer/heatmap'

class HeatMap extends React.Component{
    constructor(props){
        super(props);
        this._heatmap = undefined,
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

		this._heatmap = new ol_layer_Heatmap(options);
		if(this.props.zIndex){
      		this._vector.setZIndex(this.props.zIndex);
		}
		
		this.props.mapComponent.map.layers(this._heatmap);
		this.props.mapComponent.map.addLayer(this._heatmap);
		

		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this._heatmap.on(eventName, olEvents[eventName]);
		}
	}

	componentWillUnmount() {
		this.props.mapComponent.map.removeLayer(this._heapmap);
	}

	render() {
		return null;
	}
}

HeatMap.propTypes = {
	source : PropTypes.object.isRequired
}

export default props => (
  <MapContext.Consumer>
    {mapComponent => {
      return (<HeatMap {...props} mapComponent={mapComponent} />)
    }}
  </MapContext.Consumer>
);