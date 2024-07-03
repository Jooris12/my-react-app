import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formes() {
  return (
    <Form className='for'>
      <Form.Group className="mb-3" controlId="formB">
        <Form.Control type="first name" placeholder="Nom" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="form">
        <Form.Control type="second name" placeholder="Prénom" />
      </Form.Group>

     <Form.Select aria-label="Default select example">
              <option>Formation</option>
      <option value="1">Devellopeur Web</option>
      <option value="2">Refferent Digital</option>
    </Form.Select>

      <Button className='bouton' variant="primary" type="submit">
        Envoyer
      </Button>
    </Form>
  );
}

export default Formes;