import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfilContentMenu from "../components/ProfilContentMenu";
import ProfilResume from "../components/ProfilResume";
import RightBar from "../components/RightBar";
import Thread from "../components/Thread";

const Profil = () => {
  const userAt = useParams().id;
  const type = useParams().type;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(null)
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/at/${userAt}`,
      withCredentials: true,
    })
      .then((res) => {
        setUserData(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [userAt]);

  return (
    <main className="main-container">
      <div className="main-wrapper">
        <div className="content-container">
          <div className="page-content-wrapper">
            <ProfilResume user={userData} />
            <ProfilContentMenu userAt={userAt} type={type} />
            {userData && <Thread type="profil" uid={userData._id} filter={type ? type : "tweets"}/>}
          </div>
        </div>
        <RightBar />
      </div>
    </main>
  );
};

export default Profil;
