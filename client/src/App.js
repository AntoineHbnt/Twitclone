import Log from "./pages/Log";
import Routes from "./components/Routes";
import "./styles/index.scss";
import { UidContext } from "./components/AppContext";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";

function App() {
  const [uid, setUid] = useState();

  useEffect(async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}jwtid`,
      withCredentials: true,
    })
      .then((res) => setUid(res.data))
      .catch((err) => console.log(err));
  }, [uid]);

  return (
    <UidContext.Provider value={uid}>
      {!uid ? (
        <Log />
      ) : (
        <div className="page-container">
          <Router>
            <NavBar />
            <Routes />
          </Router>
        </div>
      )}
    </UidContext.Provider>
  );
}

export default App;
