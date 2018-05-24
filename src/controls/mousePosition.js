import * as React from 'react';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_control_MousePosition from 'ol/control/mouseposition';

export class MousePosition extends React.Component {
    constructor(props) { 
        super(props); 
        this._mousePosition = undefined;
        this.options = {
            className: undefined,
            coordinateFormat: undefined,
            projection: undefined,
            render: undefined,
            target: undefined,
            undefinedHTML: undefined,
        };
        this.events =  {
            'change': undefined,
            'change:coordinateFormat': undefined,
            'change:projection': undefined,
            'propertychange': undefined,
        };
    }

    render() { 
        return null; 
    }

    componentDidMount () {
        let options = Method.getOptions(Object.assign(this.options, this.props));
        this._mousePosition = new ol_control_MousePosition(options);
        var key = this._name | (Object.keys(this.props.mapComponent.map.controls).length+1);
        this.props.mapComponent.map.controls[key] = this;
        this.props.mapComponent.map.addControl(this._mousePosition);

        let olEvents = Method.getEvents(this.events, this.props);
        for(let eventName in olEvents) {
        this._mousePosition.on(eventName, olEvents[eventName]);
        }
    }
}

export default props => (
    <MapContext.Consumer>
      {mapComponent => {
        return (<MousePosition {...props} mapComponent={mapComponent} />)
      }}
    </MapContext.Consumer>
  );