import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Project = ({ project }) => {
  const { name, url, description,githubProject } = project // this is the object destructuring of the project object
  
 
 

  return (

    <Card style={{ width: '35rem', padding:'5px',  }} className='card'>
      <Card.Img variant="top" src={url}  className='img'/>

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button href={githubProject} target='blank' variant="primary">Check this out</Button>
        
      </Card.Body>
    </Card>
    
    

  )
}

export default Project
