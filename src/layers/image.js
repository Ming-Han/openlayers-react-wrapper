import * as React from 'react';
import PropTypes from 'prop-types';
import {Method} from '../Method';
import MapContext from '../mapContext';
import ol_layer_Image from 'ol/layer/image';

class Image extends React.Component{
    constructor(props) {
        super(props);
        this._name = props.name;
        this._image = undefined
        this.options = {
            opacity : undefined,
            source : undefined,
            map : undefined,
            visible : undefined,
            extent : undefined,
            minResolution : undefined,
            maxResolution : undefined,
            zIndex : undefined
        }
        this.events = {
            change : undefined,
            "change:extent" : undefined, 
            "change:maxResolution" : undefined, 
            "change:minResolution" : undefined, 
            "change:opacity" : undefined, 
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

		this._image = new ol_layer_Image(options);
		if(this.props.zIndex){
      		this._image.setZIndex(this.props.zIndex);
		}
		
		this.props.mapComponent.map.layers[this._name] = this;
		this.props.mapComponent.map.addLayer(this._image);
		

		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this._image.on(eventName, olEvents[eventName]);
		}
	}

	componentWillUnmount() {
		this.props.mapComponent.map._map.removeLayer(this._image);
	}

	render() {
		return null;
	}
}

Image.propTypes = {
	name : PropTypes.string.isRequired,
	source : PropTypes.object.isRequired
}

export default props => (
  <MapContext.Consumer>
    {mapComponent => {
      return (<Image {...props} mapComponent={mapComponent} />)
    }}
  </MapContext.Consumer>
);
