import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';


function AddConnection({addPerson}) {
  console.log(addPerson);
  const navigate = useNavigate()
  return (addPerson &&
    <div className="connection ">
    <h2>Connection List</h2>
    <div className="table">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Photo</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
      {addPerson.map((person, i) =>{
        const {Name , Surname, Age, Phone, Country, Img2, Arm, Img} = person
        return(
        <tr typeof="button" onClick={()=>navigate(`/friend_tracker_app/${Name}`, {state:person})} key={i}>
          <td>{i+1}</td>
          <td>{Name}</td>
          <td>{Surname}</td>
          <td>{Age}</td>
          <td>  <img
                  src={Img}
                  className="d-block img-thumbnai face"
                  alt="..."
                /></td>
          <td>  <img
                  src={Img2}
                  className="d-block img-thumbnai"
                  alt="..."
                /></td>
        </tr>
)})}
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default AddConnection