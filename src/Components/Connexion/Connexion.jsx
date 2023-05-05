import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Photo4 from '../../image/logo.png';
import { Link } from 'react-router-dom';


function BasicExample() {
  return (
    <Form className='mt-5 w-25 mx-auto'>
        <img src={Photo4} alt="" />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Email address" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="success" type="connexion">
        Connexion
      </Button>
     <br/><br /><Link to="/Password" className='text-decoration-none text-primary'><a href="#" className='text-dark'>Mot de passe oublié</a></Link>
     
      <p className='mt-4'>Vous avez pas encore de compte?<Link to="/inscription" className='text-decoration-none text-primary'>S'inscrire</Link></p> 
    </Form>
  );
}

export default BasicExample;