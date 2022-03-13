import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import TenantsTable from "./components/TenantsTable";
import TenantDetails from "./components/TenantDetails";

function App() {
  const [responseData, setData] = useState([]);
  const [errorMsg, setErrMsg] = useState("");
  useEffect(async () => {
    try {
      await axios
        .get("https://hungry-skinny-cappelletti.glitch.me/tenants")
        .then((res) => {
          const { data = [] } = res;
          const updatedData = [];
          data.map((query) => {
            if (!query.query) {
              updatedData.push(query);
            }
          });
          setData(updatedData);
          setErrMsg("");
        })
        .catch((error) => {
          const { message = "" } = error;
          setErrMsg(message);
        });
    } catch (error) {
      const { message = "" } = error;
      setErrMsg(message);
    }
  }, []);

  return (
    <div className="App">
      {!errorMsg ? (
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <TenantsTable responseData={responseData} />
                </Fragment>
              }
            />
            <Route
              path="/details"
              element={
                <Fragment>
                  <TenantDetails />
                </Fragment>
              }
            />
          </Routes>
        </Router>
      ) : (
        // <TenantsTable />
        // { routes }
        <div>{errorMsg}</div>
      )}
    </div>
  );
}

export default App;
