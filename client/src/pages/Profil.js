import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfilContentMenu from "../components/ProfilContentMenu";
import ProfilResume from "../components/ProfilResume";
import RightBar from "../components/RightBar";

const Profil = () => {
  const users = useSelector(state => state.usersReducer);
  const userAt = useParams().id;
  const type = useParams().type;
  const [userData, setUserData] = useState(null)
  const [tweetData, setTweetData] = useState([]);
  
  useEffect(()=> {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/at/${userAt}`,
      withCredentials: true,
    })
      .then((res) => {
        setUserData(res.data[0])
      })
      .catch((err) => console.log(err));
  },[])

  return (
    <main className="main-container">
      <div className="main-wrapper">
        <div className="content-container">
            <div className="page-content-wrapper">
              <ProfilResume user={userData}/>
              <ProfilContentMenu userAt={userAt} type={type} />
              
            </div>
        </div>
        <RightBar />
      </div>
    </main>
  );
};

export default Profil;
