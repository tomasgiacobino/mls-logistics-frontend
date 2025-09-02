import { Container, Row } from 'react-bootstrap';
import BlogCard from '../components/BlogCard';

import blogImage1 from '../assets/images/camion1.jpg';
import blogImage2 from '../assets/images/camion2.jpg';
import blogImage3 from '../assets/images/camion3.jpg';

const blogPosts = [
    {
      image: blogImage1,
      title: "5 Claves para Importar desde China",
      excerpt: "Descubre los pasos esenciales para una importación exitosa, evitando errores comunes y optimizando costos."
    },
    {
      image: blogImage2,
      title: "Tendencias del Comercio Internacional 2025",
      excerpt: "Un vistazo a las innovaciones tecnológicas y los cambios en las regulaciones que afectarán al sector logístico."
    },
    {
      image: blogImage3,
      title: "Cómo Calcular los Costos de Aduana",
      excerpt: "Guía detallada para entender y estimar los aranceles e impuestos en tus operaciones de comercio exterior."
    }
  ];

  const Blog = () => {
    return (
      <section className="bg-light py-5" id="blog">
        <Container>
          <h2 className="text-center mb-5 text-primary">Últimas Noticias de Comercio Exterior</h2>
          <Row>
            {blogPosts.map((post, index) => (
              <BlogCard key={index} image={post.image} title={post.title} excerpt={post.excerpt} />
            ))}
          </Row>
        </Container>
      </section>
    );
  };

export default Blog;