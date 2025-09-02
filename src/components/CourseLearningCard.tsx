import { Col, Card } from 'react-bootstrap';
import type { IconType } from 'react-icons';

interface CourseLearningCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const CourseLearningCard = ({ icon: Icon, title, description }: CourseLearningCardProps) => {
  return (
    <Col md={6} lg={4}>
      <Card className="h-100 shadow-sm border-0">
        <Card.Body className="text-center">
        <div className='course-card-content'>
            <Icon className="h1 text-info mb-3" />
            <Card.Title className="fw-bold">{title}</Card.Title>
        </div>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseLearningCard;