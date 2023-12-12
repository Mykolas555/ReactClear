// Article.js
import { Card, Button } from "react-bootstrap";

const Article = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">Go Somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Article;
