import React from 'react';

const styleWidget = {
    border: 0,
    overflow: "hidden",
    height: "100%",
    width: "100%",
    padding: "2vw",
    borderRadius: "15%",
    background: "white"    
}

const styleIG = {
    textAlign: "center"
}

const styleTitle = {
    fontFamily: "Brush Script MT",
    fontSize: "8vw"
}

const styleFeedBorder = {
    width: "40%",
    height: "40vw",
    padding: "2vw",
    borderRadius: "20%",
    background: "rgb(252,176,69)",
    background: "linear-gradient(318deg, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 50%, rgba(131,58,180,1) 100%)",
    display: "inline-block"
}

export class Instagram extends React.Component {
    render () {
        return (
            <div style={styleIG} >
                <div style={styleTitle}>
                    <span id={this.props.title}>{this.props.title}</span>
                </div>
                <div style={styleFeedBorder} >
                    <iframe style={styleWidget}
                    src="https://cdn.lightwidget.com/widgets/fd5f7d72ad4c53b385a56aebab7b905e.html" 
                    scrolling="no"></iframe>
                </div>
            </div>
        );
    }
}