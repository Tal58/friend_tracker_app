import axios from "axios";
import { useState, useEffect } from "react";


function Countries({ country }) {
  const [countries, setCountries] = useState();
  const [flag, setFlag] = useState([]);
  const [arm, setArm] = useState([]);
  const [loading, setLoading] = useState(true)
  const fetchAllCountry = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    await axios(url)
      .then((res) => {
        setCountries(res.data);
      })
      .then(() => flagList())
      .catch((err) => console.log(err));
      setTimeout(setLoading(false),1000)
  };

  const flagList = async () => {
    countries?.some((item) => {
      if (item.name.common === country) {
        setFlag(item.flags.png);
        setArm(item.coatOfArms.png);
      }
    });
  };
  useEffect(() => {
    fetchAllCountry();
    flagList();
  });
  setTimeout(flagList, 0);
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
