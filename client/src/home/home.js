import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage
} from 'mdb-react-ui-kit';
import './home.css'
import Homecard from "./home.json"


export default function App() {
    return (

        <div>
            <MDBCarousel showIndicators showControls fade>
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                    alt='...'
                >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                    alt='...'
                >
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselItem>

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                    alt='...'
                >
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselItem>
            </MDBCarousel>
            <br/>



           
            <div>
            {
            Homecard.map(homecard =>{
                return(
                    <div className='cardc'  key={homecard.id}>
                    <MDBCard background={homecard.bg} className='text-white mb-3 m-5'  style={{ maxWidth: "15rem" }}  >
           
                    <MDBCardHeader>{homecard.header}</MDBCardHeader>
                    <MDBCardBody >
                        <MDBCardTitle>{homecard.title}</MDBCardTitle>
                        <MDBCardText>
                            {homecard.text}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
              </div>

                )
            })
        }
            
           

         </div>
         </div>
    );
}