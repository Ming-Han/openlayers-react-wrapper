import * as React from 'react';

export class Layers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>{this.props.children}</div>);
  }
}