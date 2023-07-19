import React, {useState,onChange} from 'react'
import Reg from '../registration/reg'
import {   MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox } from 'mdb-react-ui-kit';
    import 'mdb-react-ui-kit/dist/css/mdb.min.css';

 function Login() {

    const [user, setUser] = useState({
      userId:"",
      password:"",
      

    })

    const handleChange = e => {
       const { name,value} = e.target
       setUser({
        ...user,
        [name] : value

       })
      };
  return (
    <MDBContainer fluid>
      {console.log('user',user)}
<MDBCard className='text-black m-5  ' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex flex-column align-items-center'>

              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label= 'User Id' id='form1' type='text' className='w-100' name='userId' value={user.userId} onChange={ handleChange } />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput label='Password' id='form3' type='password' className='w-100' name='password' value={user.password} onChange={ handleChange }/>
              </div>
              <a className='btn btn-primary' href='/Login' role='button'>
          Login
        </a>
        <a className='mb-4 m-4' href='#'>Forget Password</a>
        <br/>
        <h5>Not a Member?</h5> <a href='/Reg'>Register</a>
              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>
              
              </MDBRow>
        </MDBCardBody>
              </MDBCard>
    </MDBContainer>
  )
}
export default Login;