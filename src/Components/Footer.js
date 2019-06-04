import React from 'react';

const styleFooter = {
    background: "pink",
    textAlign: "center",
    fontFamily: 'Agency FB',
    fontSize: "3vw",
    display: "grid",
    gridTemplateRows: "auto auto"
}

const styleDiv = {
    padding: "5vw"
}

export class Footer extends React.Component {
    render () {
        return (
            <div style={styleFooter} >
            <div style={styleDiv} >
                    <h3>Contact Us!</h3>
                    <p>
                        Instagram: @crownszitacardin, or click an image in the feed above!
                    </p>
                    <p>
                        CardinCrowns@yahoo.com
                    </p>
                    <p>
                        We speak english and spanish!
                    </p>
                </div>
                <div style={styleDiv} >
                    <h3>About Us!</h3>
                    <p>
                        We make natural and silk flower crowns, props for 
                        photoshoots, and pareos. We are a home-based family 
                        business, and initially we established the business 
                        as a way to vent our creative nature never expecting 
                        to grow so quickly on Instagram. We want our clients 
                        and audience to enjoy our work, and we hope that our 
                        creations have made their special day that much more 
                        special and memorable!
                    </p>
                </div>
            </div>
        );
    }
}