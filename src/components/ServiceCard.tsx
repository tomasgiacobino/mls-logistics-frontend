import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

interface ServiceCardProps { 
    title: string;
    description: string;
    icon: string;
    buttonText: string;
    to: string;
}

const ServiceCard = ({title, description, icon, buttonText, to} : ServiceCardProps) => {
    return(
        <Col md={6} lg={4} className="mb-4">
        <Card className="h-100 p-3 shadow-sm border-0 card-hover">
          <Card.Body className="d-flex flex-column text-center">
            <div className="my-3">
                <i className={`bi ${icon} h1 text-info`}></i>
            </div>
            <Card.Title className="fw-bold mb-3">{title}</Card.Title>
            <Card.Text className=''>{description}</Card.Text>
            <div className="mt-auto">
                <Link to={to}>
                    <Button variant="info" className="fw-bold">
                        {buttonText}
                    </Button>
                </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ServiceCard;