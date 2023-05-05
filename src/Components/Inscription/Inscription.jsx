import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Photo4 from '../../image/logo.png';


function BasicExample() {
  return (
    <Form className=' w-25 mx-auto'>
        <img src={Photo4} alt="" />
        
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Veillez saisir votre nom" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Veillez entrez mot de passe votre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Veillez confirmez votre mot de passe" />
      </Form.Group>
     
      <Button variant="success" type="s'inscrire">
        S'inscrire
      </Button>
      <p className='mt-4'>Vous avez pas encore de compte?<Link to="/connexion" className='text-decoration-none text-primary'>Se connecter</Link></p> 
    </Form>
  );
}

export default BasicExample;