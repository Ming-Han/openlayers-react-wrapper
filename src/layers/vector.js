import * as React from 'react';
import {Method} from '../Method';
import MapContext from '../mapContext';
import ol_layer_Vector from 'ol/layer/vector';


class Vector extends React.Component{

	constructor(props){
		super(props);
		this.vector;
		this.name = props.name;
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
		if(this.vector != undefined)
			this.props.mapComponent.map.removeLayer(this.vector);
		let options = Method.getOptions(Object.assign(this.options, this.props));

		this.vector = new ol_layer_Vector(options);
		if(this.props.zIndex){
      		this.vector.setZIndex(this.props.zIndex);
		}
		
		this.props.mapComponent.map.layers[this.name] = this;
		this.props.mapComponent.map.addLayer(this.vector);
		

		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this.vector.on(eventName, olEvents[eventName]);
		}
	}

	render() {
		return null;
	}
}

export default props => (
  <MapContext.Consumer>
    {mapComponent => {
      return (<Vector {...props} mapComponent={mapComponent} />)
    }}
  </MapContext.Consumer>
);
