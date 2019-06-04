import React from 'react';

const styleSmall = {
}; 

const styleLarge = {
    gridColumn: "1 / 4",
    gridRow: "1 / 4"
}

const styleImage = {
    width: "100%",
    borderRadius: "15%",
    border: "2px pink solid"
}

const styleHidden = {
    display: "none"
}

var style = styleSmall;

export class GridImage extends React.Component{
    
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    checkZoom() {
        if (!this.props.zoomState) {
            style = styleSmall;
        } else if (this.props.index === this.props.zoomIndex) {
            style = styleLarge;
        } else {
            style = styleHidden;
        }
    }

    handleClick () {
        this.props.onClick(this.props.index);
    }

    render () {
        this.checkZoom();
        return (
            <div style={style} onClick={this.handleClick}> 
                <img style={styleImage} className="gridImage" src={this.props.source} />
            </div>
          );
    }
}