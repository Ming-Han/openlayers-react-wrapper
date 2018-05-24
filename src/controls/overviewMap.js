import * as React from 'react';
import {Method} from '../method';
import MapContext from '../mapContext';
import ol_control_OverviewMap from 'ol/control/overviewmap';

export class OverviewMap extends React.Component {
    constructor(props) { 
        super(props); 
        this._overviewMap = undefined;
        this.options = {
            collapsed: undefined,
            collapseLabel: undefined,
            collapsible: undefined,
            label: undefined,
            layers: undefined,
            render: undefined,
            target: undefined,
            tipLabel: undefined,
            view: undefined,
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
        this._overviewMap = new ol_control_OverviewMap(options);
        var key = this._name | (Object.keys(this.props.mapComponent.map.controls).length+1);
        this.props.mapComponent.map.controls[key] = this;
        this.props.mapComponent.map.addControl(this._overviewMap);

        let olEvents = Method.getEvents(this.events, this.props);
        for(let eventName in olEvents) {
        this._overviewMap.on(eventName, olEvents[eventName]);
        }
    }
}

export default props => (
    <MapContext.Consumer>
      {mapComponent => {
        return (<OverviewMap {...props} mapComponent={mapComponent} />)
      }}
    </MapContext.Consumer>
  );