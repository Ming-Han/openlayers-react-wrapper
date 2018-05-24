import * as React from 'react';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_control_Rotate from 'ol/control/rotate';

export class Rotate extends React.Component {
    constructor(props) { 
        super(props); 
        this._rotate = undefined;
        this.options = {
            className: undefined,
            label: undefined,
            tipLabel: undefined,
            duration: undefined,
            autoHide: undefined,
            render: undefined,
            resetNorth: undefined,
            target: undefined,
        };
        this.events =  {
            'change': undefined,
            'propertychange': undefined,
        };
    }

    render() { 
        return null; 
    }

    componentDidMount () {
        let options = Method.getOptions(Object.assign(this.options, this.props));
        this._rotate = new ol_control_Rotate(options);
        var key = this._name | (Object.keys(this.props.mapComponent.map.controls).length+1);
        this.props.mapComponent.map.controls[key] = this;
        this.props.mapComponent.map.addControl(this._rotate);

        let olEvents = Method.getEvents(this.events, this.props);
        for(let eventName in olEvents) {
        this._rotate.on(eventName, olEvents[eventName]);
        }
    }
}

export default props => (
    <MapContext.Consumer>
      {mapComponent => {
        return (<Rotate {...props} mapComponent={mapComponent} />)
      }}
    </MapContext.Consumer>
  );