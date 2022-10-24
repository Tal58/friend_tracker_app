import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function AddFollower({addFollower}) {
  console.log(addFollower);
  const navigate = useNavigate()



  return (addFollower &&
    <div className="connection ">
    <h2>Following List</h2>
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
      {addFollower.map((person, i) =>{
         const {Name , Surname, Age, Phone, Country, Img2, Arm, Img} = person
         return (
        <tr typeof="button"onClick={()=>navigate(`/${Name}`, {state:person})} key={i}>
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

export default AddFollower