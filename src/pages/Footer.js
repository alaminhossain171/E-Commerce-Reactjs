import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ShopIcon from '@material-ui/icons/Shop';
import AppleIcon from '@material-ui/icons/Apple';
import { ButtonGroup,Button } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className="page-footer font-small footer-bg  pt-5">


  <div className="container-fluid text-center text-md-left">


    <div className="row">


      <div className="col-md-6 mt-md-0 mt-3">

 
        <h5 className="text-uppercase">About us !</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, dolorum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit dolor sed minus quia earum itaque ex autem facilis quaerat. Eos?</p>

      </div>
 

      <hr className="clearfix w-100 d-md-none pb-3" />

 
      <div className="col-md-3 mb-md-0 mb-3">

    
        <h5 className="text-uppercase">Follow us !</h5>

        <ButtonGroup aria-label="Basic example">
  <Button variant="outline-primary"><FacebookIcon /></Button>
  <Button variant="outline-primary"><TwitterIcon /></Button>
  <Button variant="outline-primary"><MailIcon /></Button>
  <Button variant="outline-primary"><YouTubeIcon /></Button>
</ButtonGroup>

      </div>
 


      <div className="col-md-3 mb-md-0 mb-3">


        <h5 className="text-uppercase">Download App</h5>

        <ul className="list-unstyled">
          <li className="d-inline">
            <a href="/" onClick={ (event) => event.preventDefault() }><ShopIcon /></a>
          </li>
          <li className="d-inline">
            <a href="/" onClick={ (event) => event.preventDefault() }><AppleIcon /></a>
          </li>
    
        </ul>

      </div>
  

    </div>


  </div>
  
<div className='d-flex justify-content-center'>
<hr className='hrtag' />
</div>

  <div className="footer-copyright text-center py-3"> <b className='text-danger'> © Created by Md. Al Amin</b>
  </div>
 

</div>
    )
}

export default Footer