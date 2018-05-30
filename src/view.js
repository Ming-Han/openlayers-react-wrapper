import * as React from 'react';
import MapContext from './mapContext';
import {Method} from './method';
import ol_view from 'ol/view';

class View extends React.Component {

	constructor(props){
		super(props);
		this._view = {};
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
		this._view = new ol_view (options);
		this.props.mapComponent.map.setView(this._view);
		this.props.mapComponent.map.view = this._view;
		console.log('view didmount')
		let olEvents = Method.getEvents(this.events, this.props);
		for(let eventName in olEvents) {
      this._view.on(eventName, olEvents[eventName]);
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