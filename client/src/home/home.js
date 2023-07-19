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



           <center>
            
            <MDBCard background='primary' className='text-white mb-3 cardc m-5' style={{ maxWidth: "15rem" }}  >
           
                <MDBCardHeader>Header</MDBCardHeader>
                <MDBCardBody >
                    <MDBCardTitle>Primary card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
          

            <MDBCard background='secondary' className='text-white mb-3 cardc m-5' style={{ maxWidth: "15rem" }}>
                <MDBCardHeader>Header</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Secondary card </MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>

            <MDBCard background='success' className='text-white mb-3 cardc m-5' style={{ maxWidth: "15rem" }}>
                <MDBCardHeader>Header</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Success card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            </center>
            <MDBCard background='danger' className='text-white mb-3 cardc m-5' style={{ maxWidth: "15rem" }}>
                <MDBCardHeader>Header</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Danger card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>

            <MDBCard background='warning' className='mb-3 cardc m-4' style={{ maxWidth: "15rem" }}>
                <MDBCardHeader>Header</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Warning card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>

            <MDBCard background='info' className='text-body mb-3 cardc m-4' style={{ maxWidth: "15rem" }}>
                <MDBCardHeader>Header</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Info card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>

            <MDBCard background='light' className='mb-3 cardc m-4' style={{ maxWidth: "15rem" }}>
                <MDBCardHeader>Header</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Light card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
<center>
            <MDBCard background='dark' className='text-white cardc m-4' style={{ maxWidth: "15rem" }}>
                <MDBCardHeader>Header</MDBCardHeader>
                <MDBCardBody>
                    <MDBCardTitle>Dark card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            </center>
        </div>

    );
}