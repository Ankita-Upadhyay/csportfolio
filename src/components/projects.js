import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab: 0};    
        
    }

    toggleCategories(){

        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '210px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1545639808/Screen_Shot_2018-12-24_at_12.22.49_AM.png) center / cover'}}></CardTitle>
                    <CardText>This is a super simple weather app that fetches data from a weather API and 
                    updates the weather based on your current location. It displays the city name,
                     weather in celsius, and the corresponding weather icon.</CardText>
                     <CardActions border className="button-bootstrap">
                     <a href="https://github.com/Ankita-Upadhyay/WeatherAPIFromFCC" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                     <a href="https://codepen.io/ankita-upadhyay/pen/LBBpbz" rel="noopener noreferrer" target="_blank"><Button colored>Codepen</Button></a>
                     <a href="https://ankita-upadhyay.github.io/WeatherAPIFromFCC/weather-app/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a> 
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                     </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '452', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '245px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1545639460/Screen_Shot_2018-12-24_at_12.17.19_AM.png) center / cover'}}></CardTitle>
                <CardText>This is an Instagram-like image gallery
                 created using Bootstrap. I call it "Manifestation of my Vanity".</CardText>
                 <CardActions border className="button-bootstrap">
                 <a href="https://github.com/Ankita-Upadhyay/Image-Gallery" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                 <a href="https://ankita-upadhyay.github.io/Image-Gallery/ImageGallery/gallery.html"rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                 </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '210px', width: '350px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1546034290/Screen_Shot_2018-12-28_at_2.02.30_AM.png) center / cover'}}></CardTitle>
                    <CardText>This is a web app that allows citizens to adopt trees in their name.
                    Users can collect badges as they complete certain tasks like adopting, naming,
                    and tending to their trees. This project won second place at SCU's Hack for Humanity!</CardText>
                     <CardActions border className="button-bootstrap">
                     <a href="https://github.com/Ankita-Upadhyay/HackForHumanity2017" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                     <a href="https://ankita-upadhyay.github.io/HackForHumanity2017/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a> 
                     </CardActions>
                     <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                     </CardMenu>
                </Card>
            </div>
                
                
            )
        } else if(this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '170px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1545644020/Screen_Shot_2018-12-24_at_1.03.01_AM.png) center / cover'}}></CardTitle>
                <CardText>This random quote generator uses HTML, CSS, JavaScript, and jQuery to generate random Disney quotes.
                jQuery is used to store the quotes in a quote array and uses the math.random() function to randomly select a quote.
                Click on the button for a magical Disney quote!</CardText>
                 <CardActions border className="button-bootstrap">
                 <a href="https://github.com/Ankita-Upadhyay/Disney-Random-Quote-Generator" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                 <a href="https://ankita-upadhyay.github.io/Disney-Random-Quote-Generator/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a> 
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                 </CardMenu>
            </Card>
            )
        }else if(this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '170px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1546036757/Screen_Shot_2018-12-28_at_2.33.53_PM.png) center / cover'}}></CardTitle>
                <CardText>This random quote generator uses HTML, CSS, JavaScript, and jQuery to generate random Disney quotes.
                jQuery is used to store the quotes in a quote array and uses the math.random() function to randomly select a quote.
                Click on the button for a magical Disney quote!</CardText>
                 <CardActions border className="button-bootstrap">
                 <a href="https://github.com/Ankita-Upadhyay/Okinawa-Initiative" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                 <a href="http://afternoon-peak-37346.herokuapp.com/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a> 
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                 </CardMenu>
            </Card>
            )
        }else if(this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height: '170px', background: 'url(https://res.cloudinary.com/dkcjqlakt/image/upload/v1546070048/diatsch.png) center / cover'}}></CardTitle>
                <CardText>A few projects I've written in LaTeX include a LaTeX manual, an abstract criticism of 
                published journals, a patent, and a 10-paged research paper on "Dependable Interference-Aware Time
                Slotted Channel Hopping for Wireless Sensor Networks" for my technical writing class at UCSC.</CardText>
                 <CardActions border className="button-bootstrap">
                 <a href="https://github.com/Ankita-Upadhyay/Technical-Writing-in-LaTeX" rel="noopener noreferrer" target="_blank"><Button colored className="latex-button">
                 Github</Button></a> 
                 </CardActions>
                 <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                 </CardMenu>
            </Card>
            )
        }

    }




    render() {
        return(
            <div>
              <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>API/Bootstrap</Tab>
                <Tab>jQuery</Tab>
                <Tab>React</Tab>
                <Tab>LaTeX</Tab>
              </Tabs>

            
                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                
            

            </div>
        )

        
    }
}

export default Projects;