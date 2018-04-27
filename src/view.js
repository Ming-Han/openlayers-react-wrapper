import * as React from 'react';
import MapContext from './mapContext';
import {Method} from './Method';
import ol_view from 'ol/view';

class View extends React.Component {

	constructor(props){
		super(props);
		this.options = {
			center : undefined,
			constrainRotation : undefined,
			enableRotation : undefined,
			extent : undefined,
			maxResolution : undefined,
			minResolution : undefined,
			maxZoom : undefined,
			minZoom : undefined,
			projection : undefined,
			resolution : undefined,
			resolutions : undefined,
			rotation : undefined,
			zoom : undefined,
			zoomFactor : undefined
		}
		this.evets = {
			"change" : undefined,
			"change:center" : undefined,
			"change:resolution" : undefined,
			"change:rotation" : undefined,
			"propertychange" : undefined,
		}
	}

	componentDidMount() {
		let options = Method.getOptions(Object.assign(this.options, this.props));
		this.view = new ol_view (options);
		this.props.mapComponent.map.setView(this.view);

		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      		this.layer.on(eventName, olEvents[eventName]);
    	}
	}

	render() {
		return null;
	}

}


export default props => (
  <MapContext.Consumer>
    {mapComponent => {
      return (<View {...props} mapComponent={mapComponent} />)
    }}
  </MapContext.Consumer>
);