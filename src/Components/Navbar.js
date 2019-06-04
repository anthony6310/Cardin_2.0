import React from 'react';

const styleUl = {
    width: "100%",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "white",
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto auto",
    gridGap: 0
}

const styleLi = {
    fontFamily: 'Agency FB',
    fontWeight: "bold",
    fontSize: "2vw",
    borderBottom: "2px solid pink"
}

const styleLogoA = {
    background: "pink"
}

const styleA = {
    display: "block",
    textAlign: "center",
    textDecoration: "none",
    padding: "15px 15px"
}

const styleContainer = {
    position: "sticky",
    top: 0, 
    textAlign: "center"
}

const styleLogo = {
    width: "4vw",
    background: "white",
    borderRadius: "50%",
    display: "inline-block",
    marginTop: 10
}

export class Nav extends React.Component {
    render() {
        return (
            <div style={styleContainer} >
                <ul style={styleUl} >
                    <a href="#header" style={styleLogoA}>
                    <img style={styleLogo} 
                    src="https://raw.githubusercontent.com/anthony6310/cardin/master/Website/Logo1.png"/>
                    </a>
                    {this.props.links.map((link, index) => (
                        <li key={index} style={styleLi} className="nav" ><a style={styleA} href={"#" + link} >{link}</a></li>
                    ))}
                </ul>
            </div>
        );
    }
}