import Log from "./pages/Log";
import Routes from "./components/Routes";
import "./styles/index.scss";
import { UidContext } from "./components/AppContext";
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [uid, setUid] = useState();

  useEffect(async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true
      })
      .then((res) => setUid(res.data))
      .catch((err) => console.log(err))
  }, [uid])

  return (
    <UidContext.Provider value={uid}>
      {uid ? <Routes /> : <Log />}
    </UidContext.Provider>
  );
}

export default App;
