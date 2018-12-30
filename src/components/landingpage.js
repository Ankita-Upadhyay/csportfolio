import React, { Component } from 'react';
import {Cell, Grid} from 'react-mdl';

class LandingPage extends Component{
    render() {
        return(
            <div style= {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src="https://res.cloudinary.com/dkcjqlakt/image/upload/v1545539571/ankitagimp.png"
                    alt="avatar"
                    className="avatar-img"
                    />
                    <div className="banner-text">
                        <center><h1>Ankita Upadhyay</h1>
                        <hr/></center>
                        
                        <center><p>HTML/CSS | JavaScript | Bootstrap | React | Python | Django </p></center>

                        <div className="social-links">
                         {/* LinkedIn */}
                         <a href="https://www.linkedin.com/in/ankita-upadhyay-35a929104/" rel="noopener noreferrer" target="_blank"> 
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                         </a>

                         {/* Github */}
                         <a href="https://github.com/Ankita-Upadhyay" rel="noopener noreferrer" target="_blank"> 
                            <i className="fa fa-github-square" aria-hidden="true"/>
                         </a>

                        {/* YouTube */}
                        <a href="http://youtube.com/c/AnkitaKatGreenflower" rel="noopener noreferrer" target="_blank"> 
                            <i className="fa fa-youtube-square" aria-hidden="true"/>
                         </a>
                        
                        {/* Instagram */}
                        <a href="https://www.instagram.com/ankitakat97/?hl=en" rel="noopener noreferrer" target="_blank"> 
                            <i className="fa fa-instagram" aria-hidden="true"/>
                         </a>

                        {/* Twitter */}
                        <a href="https://twitter.com/Ankitau6" rel="noopener noreferrer" target="_blank"> 
                            <i className="fa fa-twitter-square" aria-hidden="true"/>
                         </a>

                        </div>

                     </div>
                    </Cell>
                </Grid>
            </div>
        )

        
    }
}

export default LandingPage;