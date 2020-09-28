import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext, CustomerContext } from "./contexts/BusinessContext";
import UserKit from "./data/UserKit";
import AddCustomerPage from "./pages/AddCustomerPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import FrontPage from "./pages/FrontPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/NavBar";

function App() {
  const userKit = new UserKit();
  const [currentUser, setCurrentUser] = useState(null);
  const [customers, setCustomers] = useState();
  const [token, setToken] = useState(userKit.getToken());

  useEffect(() => {
    if (userKit.getToken()) {
      userKit
        .getCurrentUser()
        .then((res) => res.json())
        .then((data) => {
          setCurrentUser(data);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div>
      <UserContext.Provider value={{ currentUser, setCurrentUser, setToken }}>
        <CustomerContext.Provider value={{ customers, setCustomers }}>
          <NavBar>
            <Switch>
              <Route path="/customer/:id" component={CustomerDetailPage} />
              <Route path="/addcustomer" component={AddCustomerPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              {token ? <Route path="/" component={HomePage} /> : <Route path="/" component={FrontPage} />}
            </Switch>
          </NavBar>
        </CustomerContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
