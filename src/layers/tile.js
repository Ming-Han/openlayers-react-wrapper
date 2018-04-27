import * as React from 'react';
import MapContext from '../mapContext';
import ol_layer_Tile from 'ol/layer/Tile';
import ol_source_OSM from 'ol/source/osm';

class Tile extends React.Component{
	constructor(props){
		super(props);
	}

	componentDidMount() {

		let options = {}; 
		options.source = new ol_source_OSM();
		this.layer = new ol_layer_Tile(options);
		this.props.mapComponent.map.addLayer(this.layer);
	}

	componentWillUnmount() {
		this.props.mapComponent.map.removeLayer(this.layer);
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
