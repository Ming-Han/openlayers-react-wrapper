import * as React from 'react';
import MapContext from '../mapContext';
import ol_layer_Tile from 'ol/layer/Tile';
import ol_source_OSM from 'ol/source/osm';

class Tile extends React.Component{
	constructor(props){
		super(props);
		this.name = props.name;
	}

	componentDidMount() {

		let options = {}; 
		options.source = new ol_source_OSM();
		this.tile = new ol_layer_Tile(options);
		this.props.mapComponent.map.layers[this.name] = this;
		this.props.mapComponent.map.addLayer(this.tile);
	}

	componentWillUnmount() {
		this.props.mapComponent.map.removeLayer(this.tile);
	}

	render() {
		return null;
	}
}

export default props => (
  <MapContext.Consumer>
    {mapComponent => {
      return (<Tile {...props} mapComponent={mapComponent} />)
    }}
  </MapContext.Consumer>
);
