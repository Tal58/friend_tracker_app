import {useLocation, useNavigate} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Pages() {
  //ın order to get all info from navigate hook, useLocation hook is used
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
      <Card.Title><b>Name:</b>{person.Name} <b>Surname:</b> {person.Surname}</Card.Title>
      <Card.Title>
      <b> Phone Number:</b>{person.Phone}
      </Card.Title>
      <Card.Title>
        <b>E-mail:</b>{person.Mail}
      </Card.Title>
      <Button onClick={()=> navigate("/friend_tracker_app/")} variant="success">Home Page</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default Pages