import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Project = ({ project }) => {
  const { name, url, description } = project // this is the object destructuring of the project object

  return (

    <Card style={{ width: '33rem', margin: 7 }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">check this out</Button>
      </Card.Body>
    </Card>

  )
}

export default Project
