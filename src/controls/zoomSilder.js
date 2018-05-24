import * as React from 'react';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_control_ZoomSlider from 'ol/control/zoomslider';

export class ZoomSlider extends React.Component {
    constructor(props) { 
        super(props); 
        this._zoomSlider = undefined;
        this.options = {
            className: undefined,
            duration: undefined,
            maxResolution: undefined,
            minResolution: undefined,
            render: undefined,
        };
        this.events =  {
            'change': undefined,
            'propertychange': undefined
        };
    }

    render() { 
        return null; 
    }

    componentDidMount () {
        let options = Method.getOptions(Object.assign(this.options, this.props));
        this._zoomSlider = new ol_control_ZoomSlider(options);
        var key = this._name | (Object.keys(this.props.mapComponent.map.controls).length+1);
        this.props.mapComponent.map.controls[key] = this;
        this.props.mapComponent.map.addControl(this._zoomSlider);

        let olEvents = Method.getEvents(this.events, this.props);
        for(let eventName in olEvents) {
        this._zoomSlider.on(eventName, olEvents[eventName]);
        }
    }
}

export default props => (
    <MapContext.Consumer>
      {mapComponent => {
        return (<ZoomSlider {...props} mapComponent={mapComponent} />)
      }}
    </MapContext.Consumer>
  );