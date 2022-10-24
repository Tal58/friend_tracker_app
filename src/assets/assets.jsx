import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GrMapLocation } from "react-icons/gr";
import { BsCalendar2Date } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import Countries from "../countries/countries";
import Carousel from "react-bootstrap/Carousel";
import AddConnection from "../addConnection/AddConnection";
import AddFollower from "../addFollower/AddFollower";

const Assets = () => {
  const [person, setPerson] = useState();
  const [addPerson, setAddPerson] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("addPerson");
    console.log(saved);
    //check local storage
    if (saved === "undefined") {
      return undefined;
    } else {
      const initialValue = JSON.parse(saved);
      return initialValue;
    }
  });

  const [addFollower, setAddFollower] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("addFollower");
    //check local storage
    if (saved === "undefined") {
      return undefined;
    } else {
      const initialValue = JSON.parse(saved);
      return initialValue;
    }
  });
  const [loading, setLoading] = useState(true);
  const url = "https://randomuser.me/api/";
  const getData = async () => {
    try {
      const { data } = await axios(url);
      setPerson(data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(setLoading(false), 1000);
  };
//ın order to prevent rerendering 
  useEffect(() => {
    getData();
  }, []);
  //in order to keep side effects of the variables named addPerson and addFollower
  useEffect(() => {
    setAddFollower(addFollower);
    setAddPerson(addPerson);
    localStorage.setItem("addPerson", JSON.stringify(addPerson));
    localStorage.setItem("addFollower", JSON.stringify(addFollower));
  }, [addFollower, addPerson]);
  const add = () => {
    if (addPerson) {
      let counter = 0;
      addPerson.map((item) => {
        //to check the list if it has already added it will neglect
        if (item["Name"] === person?.results[0]["name"]["first"]) {
          counter++;
        }
      });
      if (counter > 0) {
      } else {
        setAddPerson([
          ...addPerson,
          {
            Img: person?.results[0]["picture"]["large"],
            Name: person?.results[0]["name"]["first"],
            Surname: person?.results[0]["name"]["last"],
            Age: person?.results[0]["dob"]["age"],
            Phone: person?.results[0]["phone"],
            Mail: person?.results[0]["email"],
            Country: person?.results[0]["location"]["country"],
            Img2: document.querySelector(".flag").textContent,
            Arm: document.querySelector(".arm").textContent,
          },
        ]);
      }
    } else {
      setAddPerson([
        {
          Img: person?.results[0]["picture"]["large"],
          Name: person?.results[0]["name"]["first"],
          Surname: person?.results[0]["name"]["last"],
          Age: person?.results[0]["dob"]["age"],
          Phone: person?.results[0]["phone"],
          Mail: person?.results[0]["email"],
          Country: person?.results[0]["location"]["country"],
          Img2: document.querySelector(".flag").textContent,
          Arm: document.querySelector(".arm").textContent,
        },
      ]);
    }
    localStorage.setItem("addPerson", JSON.stringify(addPerson));
  };
  const deleteConnection = () => {
    setAddPerson();
    localStorage.setItem("addPerson", JSON.stringify(addPerson));
  };

  //reset all info about following list
  const deleteFollowing = () => {
    setAddFollower();
    localStorage.setItem("addFollower", JSON.stringify(addFollower));
  };
  const follow = () => {
    if (addFollower) {
      let counter = 0;
      addFollower.map((item) => {
            //to check the list if it has already added it will neglect
        if (item["Name"] === person?.results[0]["name"]["first"]) {
          counter++;
        }
      });
      if (counter > 0) {
      } else {
        setAddFollower([
          ...addFollower,
          {
            Img: person?.results[0]["picture"]["large"],
            Name: person?.results[0]["name"]["first"],
            Surname: person?.results[0]["name"]["last"],
            Age: person?.results[0]["dob"]["age"],
            Phone: person?.results[0]["phone"],
            Mail: person?.results[0]["email"],
            Country: person?.results[0]["location"]["country"],
            Img2: document.querySelector(".flag").textContent,
            Arm: document.querySelector(".arm").textContent,
          },
        ]);
      }
    } else {
      setAddFollower([
        {
          Img: person?.results[0]["picture"]["large"],
          Name: person?.results[0]["name"]["first"],
          Surname: person?.results[0]["name"]["last"],
          Age: person?.results[0]["dob"]["age"],
          Phone: person?.results[0]["phone"],
          Mail: person?.results[0]["email"],
          Country: person?.results[0]["location"]["country"],
          Img2: document.querySelector(".flag").textContent,
          Arm: document.querySelector(".arm").textContent,
        },
      ]);
    }
    localStorage.setItem("addFollower", JSON.stringify(addFollower));
  };
  localStorage.setItem("addFollower", JSON.stringify(addFollower));
  localStorage.setItem("addPerson", JSON.stringify(addPerson));
  console.log(addPerson);
  console.log(addFollower);
  return (
    <div className="container row">
      <div className="card-body col-md-5">
        {loading === true ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          !loading && (
            <div className="up">
              <p>Country: {person?.results[0]["location"]["country"]}</p>
              <Countries country={person?.results[0]["location"]["country"]} />
              <div className="top">
                <img
                  src={person?.results[0]["picture"]["large"]}
                  className="d-block img-thumbnai"
                  alt="..."
                />
              </div>
            </div>
          )
        )}

        <Carousel variant="dark" className="slider">
          <Carousel.Item>
            <img
              src={person?.results[0]["picture"]["large"]}
              className="d-block img-thumbnai"
              alt="..."
            />
            <Carousel.Caption>
              <p>
                {" "}
                {person?.results[0]["name"]["title"]}{" "}
                {person?.results[0]["name"]["first"]}{" "}
                {person?.results[0]["name"]["last"]}
              </p>

              <BsPerson size={40} />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={person?.results[0]["picture"]["large"]}
              className="d-block img-thumbnai"
              alt="..."
            />
            <Carousel.Caption>
              <p>Age: {person?.results[0]["dob"]["age"]}</p>
              <BsPersonFill size={40} />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={person?.results[0]["picture"]["large"]}
              className="d-block img-thumbnai"
              alt="..."
            />
            <Carousel.Caption>
              <p>{person?.results[0]["email"]}</p>
              <AiOutlineMail size={40} />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={person?.results[0]["picture"]["large"]}
              className="d-block img-thumbnai"
              alt="..."
            />
            <Carousel.Caption>
              <p>Phone Number: {person?.results[0]["phone"]}</p>
              <FiPhoneCall size={40} />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={person?.results[0]["picture"]["large"]}
              className="d-block img-thumbnai"
              alt="..."
            />
            <Carousel.Caption>
              <p>City: {person?.results[0]["location"]["city"]}</p>
              <GrMapLocation size={40} />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={person?.results[0]["picture"]["large"]}
              className="d-block img-thumbnai"
              alt="..."
            />
            <Carousel.Caption>
              <p>Registration Date:</p>
              <p>
                {new Date(
                  person?.results[0]["registered"]["date"]
                ).toLocaleDateString()}
              </p>
              <BsCalendar2Date size={40} />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="add">
          <button onClick={getData} type="button" className="btn btn-primary">
            New User
          </button>
          <button onClick={add} type="button" className="btn btn-success">
            Add to your connection
          </button>
          <button type="button" onClick={follow} className="btn btn-success">
            Follow
          </button>
        </div>

        <div className="deletes">
          <button
            type="button"
            onClick={deleteConnection}
            className="btn btn-danger"
          >
            Delete Connection List
          </button>
          <button
            type="button"
            onClick={deleteFollowing}
            className="btn btn-danger"
          >
            Delete Following List
          </button>
        </div>
      </div>
      <div className="right col-md-5">
        <AddConnection addPerson={addPerson} />
        <AddFollower addFollower={addFollower} />
      </div>
    </div>
  );
};

export default Assets;
