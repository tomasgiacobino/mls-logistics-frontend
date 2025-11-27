import {Card, Col, Button} from 'react-bootstrap';

interface BlogCardProps {
    image: string;
    title: string;
    excerpt: string;
    link: string;
}


const BlogCard = ({image, title, excerpt, link}: BlogCardProps) => {
    return(
        <Col md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0 card-hover">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="fw-bold">{title}</Card.Title>
                <Card.Text>{excerpt}</Card.Text>
                <Button variant="primary" href={link} target='_blank' className="mt-auto">Leer más</Button>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default BlogCard;