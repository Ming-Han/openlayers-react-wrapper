import * as React from 'react';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_control_ZoomToExtent from 'ol/control/zoomtoextent';

export class ZoomToExtent extends React.Component {
    constructor(props) { 
        super(props); 
        this._zoomToExtent = undefined;
        this.options = {
            className: undefined,
            target: undefined,
            label: undefined,
            tipLabel: undefined,
            extent: undefined,
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
        this._zoomToExtent = new ol_control_ZoomToExtent(options);
        var key = this._name | (Object.keys(this.props.mapComponent.map.controls).length+1);
        this.props.mapComponent.map.controls[key] = this;
        this.props.mapComponent.map.addControl(this._zoomToExtent);

        let olEvents = Method.getEvents(this.events, this.props);
        for(let eventName in olEvents) {
        this._zoomToExtent.on(eventName, olEvents[eventName]);
        }
    }
}

export default props => (
    <MapContext.Consumer>
      {mapComponent => {
        return (<ZoomToExtent {...props} mapComponent={mapComponent} />)
      }}
    </MapContext.Consumer>
  );