import React, { Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png';

class App extends Component{

    state = { displayBio: false};

    // constructor(){
    //     super();
    //     this.state = { displayBio: false};

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    // readMore(){
    //     this.setState( {displayBio: true });
    // }

    toggleDisplayBio = () =>{
        this.setState( {displayBio: ! this.state.displayBio});
    }

    render() {
        

        return (
<div>
    <img src = {profile} alt = 'profile' className = 'profile'/>
    <h1>Hello !</h1>
    <p>I am Ayesha.</p>
    {this.state.displayBio ? <Title /> : null}
    {this.state.displayBio ? ( <div>
            <p>I live in india and I really want to learn react js</p>
            <button onClick={this.toggleDisplayBio}>show less</button>
        </div>): 
        <div>
        <button onClick={this.toggleDisplayBio}>Read more</button>
        </div>
        }
        <hr />
        <Projects />
        <hr/>
        <SocialProfiles />
    </div>

        )
    }
  }



  export default App;