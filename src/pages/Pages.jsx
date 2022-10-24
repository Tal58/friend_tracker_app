import {useParams, useLocation, useNavigate} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Pages() {
    const {state:person} = useLocation()
    const navigate = useNavigate()
    console.log(person)
  return (
    <div className="pages">
     <div className="newpageflag d-flex">
      <Card.Img variant="top img-thumbnai" src={person.Img2} />
    <Card.Img variant="top img-thumbnai" src={person.Arm} />
   
      </div>
   
    <Card style={{ width: '18rem' }}>
      <p>{person.Country}</p>
 
      <Card.Img variant="img-thumbnai" src={person.Img} />
   
    <Card.Body>
      <Card.Title>Name: {person.name} Surname: {person.Surname}</Card.Title>
      <Card.Title>
      Phone Number: {person.Phone}
      </Card.Title>
      <Card.Title>
      E-mail: {person.Mail}
      </Card.Title>
      <Button onClick={()=> navigate("/")} variant="success">Home Page</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default Pages