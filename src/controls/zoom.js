import * as React from 'react';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_control_zoom from 'ol/control/zoom';

export class Zoom extends React.Component {
    constructor(props) { 
        super(props); 
        this._zoom = undefined;
        this.options = {
            duration: undefined,
            className: undefined,
            zoomInLabel: undefined,
            zoomOutLabel: undefined,
            zoomInTipLabel: undefined,
            zoomOutTipLabel: undefined,
            delta: undefined,
            target : undefined
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
        this._zoom = new ol_control_zoom(options);
        var key = this._name | (Object.keys(this.props.mapComponent.map.controls).length+1);
        this.props.mapComponent.map.controls[key] = this;
        this.props.mapComponent.map.addControl(this._zoom);

        let olEvents = Method.getEvents(this.events, this.props);
        for(let eventName in olEvents) {
        this._zoom.on(eventName, olEvents[eventName]);
        }
    }
}

export default props => (
    <MapContext.Consumer>
      {mapComponent => {
        return (<Zoom {...props} mapComponent={mapComponent} />)
      }}
    </MapContext.Consumer>
  );