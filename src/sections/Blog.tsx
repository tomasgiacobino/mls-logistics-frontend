import { Container, Row } from 'react-bootstrap';
import BlogCard from '../components/BlogCard';

import blogImage1 from '../assets/images/Noticias/n1.jpg';
import blogImage2 from '../assets/images/Noticias/n2.jpg';
import blogImage3 from '../assets/images/Noticias/n3.jpg';

const blogPosts = [
    {
      image: blogImage1,
      title: "Novedades COMEX",
      excerpt: "Entérate de las ultimas noticias relacionadas al comercio exterior.",
      link: 'https://www.vuce.gob.ar/novedades'
    },
    {
      image: blogImage2,
      title: "Tendencias del Comercio Internacional 2025 - Aduana News",
      excerpt: "Un vistazo a las innovaciones tecnológicas y los cambios en las regulaciones que afectarán al sector logístico.",
      link: 'https://aduananews.com/category/comercio/',
    },
    {
      image: blogImage3,
      title: "Comercio exterior en Argentina",
      excerpt: "Ultimas noticias del comercio exterior en Argentina.",
      link: 'https://www.infobae.com/tag/comercio-exterior-argentina/'
    }
  ];

  const Blog = () => {
    return (
      <section className="bg-light py-5" id="blog">
        <Container>
          <h2 className="text-center mb-5 text-primary">Últimas Noticias de Comercio Exterior</h2>
          <Row>
            {blogPosts.map((post, index) => (
              <BlogCard key={index} image={post.image} title={post.title} excerpt={post.excerpt} link={post.link} />
            ))}
          </Row>
        </Container>
      </section>
    );
  };

export default Blog;