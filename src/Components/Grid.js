import React from 'react';
import { GridImage } from './GridImage';

const styleGrid = {
  margin: "0 auto",
  marginTop: 25,
  display: 'grid',
  gridTemplateColumns: "auto auto auto",
  gridTemplateRows: "auto auto auto",
  gridGap: 10,
  padding: 0,
  width: "30%"
};

const styleTitle = {
  fontFamily: "Brush Script MT",
  fontSize: "8vw"
};

const styleDescription = {
  fontFamily: 'Agency FB',
  fontSize: "3vw"
};

const styleContainer = {
  textAlign: "center"
};

export class Grid extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      zoom: false,
      index: -1
    };
    this.zoomImage = this.zoomImage.bind(this);
  }

  zoomImage (index) {
    this.setState({
      index: index,
      zoom: !this.state.zoom
    });
  }

  render() {
    return (
      <div className="container" style={styleContainer}>
        <div style={styleTitle}><span id={this.props.title}>{this.props.title}</span></div>
        <div style={styleDescription}><span>{this.props.description}</span></div>
        <div style={styleGrid}>
          <GridImage onClick={this.zoomImage} source={this.props.images[0]} index={0} zoomIndex={this.state.index} zoomState={this.state.zoom} />
          <GridImage onClick={this.zoomImage} source={this.props.images[1]} index={1} zoomIndex={this.state.index} zoomState={this.state.zoom} />
          <GridImage onClick={this.zoomImage} source={this.props.images[2]} index={2} zoomIndex={this.state.index} zoomState={this.state.zoom} />
          <GridImage onClick={this.zoomImage} source={this.props.images[3]} index={3} zoomIndex={this.state.index} zoomState={this.state.zoom} />
          <GridImage onClick={this.zoomImage} source={this.props.images[4]} index={4} zoomIndex={this.state.index} zoomState={this.state.zoom} />
          <GridImage onClick={this.zoomImage} source={this.props.images[5]} index={5} zoomIndex={this.state.index} zoomState={this.state.zoom} />
          <GridImage onClick={this.zoomImage} source={this.props.images[6]} index={6} zoomIndex={this.state.index} zoomState={this.state.zoom} />
          <GridImage onClick={this.zoomImage} source={this.props.images[7]} index={7} zoomIndex={this.state.index} zoomState={this.state.zoom} />
          <GridImage onClick={this.zoomImage} source={this.props.images[8]} index={8} zoomIndex={this.state.index} zoomState={this.state.zoom} />
        </div>
      </div>
    );
  }
}