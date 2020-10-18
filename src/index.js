import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Components/Message';

const Content = (prop) => {   
    if(prop.message && !prop.latitude) {
      return (    
        <div> 
            <Message header="Location Error">
                 <p>{prop.message}</p>       
            </Message>                
        </div>
        );  
    }

    if(!prop.message && prop.latitude) {
        return (
            <div> 
                <Message header="Location">
                    <p>Latitude: {prop.latitude}</p>
                    <p>Longitude: {prop.longitude}</p>      
                </Message>
            </div>
        );
    }
    return (
        <div> 
            <Message header="Location">
             <p>Loading....</p>           
            </Message>
        </div>
    );
};

class App extends React.Component {    

    constructor (props) {
        super(props);
        this.state = { lat: null , long: null, message: null };        
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude, 
                    long: position.coords.longitude                   
                });
            },
            err => {
                this.setState({message: err.message})
            }
        );
    }

    render () {             
        return Content({latitude: this.state.lat ,longitude: this.state.long, message: this.state.message });
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);