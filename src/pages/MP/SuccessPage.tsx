import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Interfaz para la respuesta del backend
interface PaymentVerificationResponse {
    verified: boolean;
    status: string;
    amount?: number;
    payer_email?: string;
}

const SuccessPage = () => {
    const [paymentStatus, setPaymentStatus] = useState<'loading' | 'approved' | 'rejected' | 'error'>('loading');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const verifyPayment = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const paymentId = urlParams.get('payment_id');

            if (!paymentId) {
                setError('ID de pago no encontrado');
                setPaymentStatus('error');
                return;
            }

            try {
                const response = await axios.get<PaymentVerificationResponse>
                (`https://mls-logistics-backend.onrender.com/api/verify-payment/${paymentId}`, {
                    headers: {
                        'ngrok-skip-browser-warning': 'true'
                    }
                });

                if (response.data.verified) {
                    setPaymentStatus('approved');
                } else {
                    setPaymentStatus('rejected');
                }
            } catch (err) {
                console.error('Error al verificar pago:', err);
                setPaymentStatus('error');
            }
        };

        verifyPayment();
    }, []);

    return (
        <Container className="py-5 text-center">
            <Row className="justify-content-md-center">
                <Col md={8}>
                    {paymentStatus === 'loading' && (
                        <>
                            <div className="mb-4">
                                <i className="bi bi-hourglass-split text-warning" style={{ fontSize: '4rem' }}></i>
                            </div>
                            <h1 className="display-5 fw-bold">Verificando pago...</h1>
                            <p className="lead mt-3">
                                Por favor, espera unos segundos.
                            </p>
                        </>
                    )}

                    {paymentStatus === 'approved' && (
                        <>
                            <div className="mb-4">
                                <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '4rem' }}></i>
                            </div>
                            <h1 className="display-5 fw-bold">¡Pago realizado con éxito!</h1>
                            <p className="lead mt-3">
                                Gracias por tu compra!.
                            </p>
                            <div className="mt-4">
                                <Button variant="primary" href="/" size="lg">
                                    Volver al inicio
                                </Button>
                            </div>
                        </>
                    )}

                    {paymentStatus === 'rejected' && (
                        <>
                            <div className="mb-4">
                                <i className="bi bi-x-circle-fill text-danger" style={{ fontSize: '4rem' }}></i>
                            </div>
                            <h1 className="display-5 fw-bold">Pago no aprobado</h1>
                            <p className="lead mt-3">
                                Tu pago no fue aprobado. Por favor, inténtalo nuevamente.
                            </p>
                            <div className="mt-4">
                                <Button variant="danger" href="/" size="lg">
                                    Volver al inicio
                                </Button>
                            </div>
                        </>
                    )}

                    {paymentStatus === 'error' && (
                        <>
                            <div className="mb-4">
                                <i className="bi bi-exclamation-circle-fill text-danger" style={{ fontSize: '4rem' }}></i>
                            </div>
                            <h1 className="display-5 fw-bold">Error al verificar el pago</h1>
                            <p className="lead mt-3">
                                {error || 'Ocurrió un error inesperado. Por favor, inténtalo nuevamente.'}
                            </p>
                            <div className="mt-4">
                                <Button variant="danger" href="/" size="lg">
                                    Volver al inicio
                                </Button>
                            </div>
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default SuccessPage;