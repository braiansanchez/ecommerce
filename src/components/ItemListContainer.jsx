import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ItemListContainer = () => {
  return (
    <div>
      
      <Row xs={1} md={3} lg={5} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="src\assets\images\monitor.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>

    </div>
  )
}

export default ItemListContainer