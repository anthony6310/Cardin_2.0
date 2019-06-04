import React from 'react';

const styleHeader = {
    boxSizing: "border-box",
    minHeight: "100vh",
    padding: "30vw 0 0",
    position: "relative",
    transformStyle: "inherit",
    width: "100vw",
    fontFamily: "Brush Script MT"
}

export class Header extends React.Component {
    render () {
        return (
            <div style={styleHeader} className="header" id="header" >
                <h1>Welcome to Crowns Zita Cardin</h1>
            </div>
        );
    }
}