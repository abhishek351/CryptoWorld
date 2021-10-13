import React from "react";
import {Switch,Route} from 'react-router-dom'
import {Layout} from 'antd'
import {Navbar,Homepage,Cryptocurrencies,Cryptodetails,News} from './components'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="header">
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>
             
              <Route exact path="/Cryptocurrencies">
                <Cryptocurrencies/>
              </Route>
              <Route exact path="/crypto/:coinId">
                <Cryptodetails/>
              </Route>
              <Route exact path="/News">
                <News/>
              </Route>
              

            </Switch>
          </div>
        </Layout>

      </div>
      
    </div>
    
  );
}

export default App;
