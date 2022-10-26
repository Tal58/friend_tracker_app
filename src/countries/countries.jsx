import axios from "axios";
import { useState, useEffect } from "react";


function Countries({ country }) {
  const [countries, setCountries] = useState();
  const [flag, setFlag] = useState([]);
  const [arm, setArm] = useState([]);
  const [loading, setLoading] = useState(true)
  const fetchAllCountry = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    //receive all data via axios
    await axios(url)
      .then((res) => {
        setCountries(res.data);
      })
      .then(() => flagList())
      .catch((err) => console.log(err));
      //setTimeout is used to prevent loading image backgorund defects
      setTimeout(setLoading(false),1000)
  };
//initialize the countries flag and its coat of arms
  const flagList = async () => {
    countries?.some((item) => {
      if (item.name.common === country) {
        setFlag(item.flags.png);
        setArm(item.coatOfArms.png);
      }
    });
  };
  //to catch the side effects of functions
  useEffect(() => {
    fetchAllCountry();
    flagList();
  });

  return (
    loading === true ? (
      <div className="loading">
        <p>Loading...</p>
      </div>
    ) :
    !loading && (
      <div className="country">
        <img src={flag} className="img-thumbnail country" alt=""></img>
        <img src={arm} className="img-thumbnail country" alt=""></img>
        <p className="flag">{flag}</p>
        <p className="arm">{arm}</p>
      </div>
    
    )
  );
}

export default Countries;
