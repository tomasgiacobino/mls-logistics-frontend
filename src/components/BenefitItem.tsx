import { Col } from 'react-bootstrap';
import type { IconType } from 'react-icons';

interface BenefitItemProps {
  icon: IconType;
  description: string;
}

const BenefitItem = ({ icon: Icon, description }: BenefitItemProps) => {
  return (
    <Col md={6} className="text-center mb-4">
      <Icon className="h2 text-primary mb-3" />
      <p className="lead fw-bold">{description}</p>
    </Col>
  );
};

export default BenefitItem;