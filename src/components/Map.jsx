import React from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'
import '../App.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends React.Component{

    

    async getCoordinates() {
        const answer = await axios.get("http://127.0.0.1:8000/api/restaurants");
        const data = await answer.data.restaurants 

        
        
    }

    render() { 
        
        return(
             
                <div className="map">
                <div className="google-map">
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY}}
                    defaultCenter={{ lat: 39.710117443535886, lng: -75.11916101566422 }}
                    defaultZoom={15}
                    >
                        <AnyReactComponent
                            lat={39.710117443535886}
                            lng={-75.11916101566422}
                            text="Rowan University"
                        />
                    </GoogleMapReact>
                </div> 
                
                </div>
                
            
        )
    }

}
