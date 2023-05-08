import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Photo4 from '../../image/logo.png';
import { Link } from 'react-router-dom';

const Password = () => {
  return (
    <div>
          <Form className='mt-5 w-25 mx-auto'>
        <img src={Photo4} alt="" />
    <p>Saisissez votre addresse email pour réinitialiser votre mot de passe</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Email address" />
      </Form.Group>
      

      
      <Button variant="success" type="connexion">
        Reinitialiser
      </Button>
      <p className='mt-4'>Souvenez-vous de votre mot de passe?<Link to="/connexion" className='text-decoration-none text-primary'>Se connecter</Link></p> 
    </Form>
    </div>
  )
}

export default Password

