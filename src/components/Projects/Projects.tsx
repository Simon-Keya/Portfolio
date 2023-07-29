import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Projects.scss';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/path/to/project1-image.jpg" />
          <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/path/to/project2-image.jpg" />
          <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/path/to/project3-image.jpg" />
          <Card.Body>
            <Card.Title>Project 3</Card.Title>
            <Card.Text>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/path/to/project4-image.jpg" />
          <Card.Body>
            <Card.Title>Project 4</Card.Title>
            <Card.Text>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/path/to/project4-image.jpg" />
          <Card.Body>
            <Card.Title>Project 5</Card.Title>
            <Card.Text>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="project-item">
        <Card>
          <Card.Img variant="top" src="/path/to/project5-image.jpg" />
          <Card.Body>
            <Card.Title>Project 6</Card.Title>
            <Card.Text>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
              Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
              cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
              de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
