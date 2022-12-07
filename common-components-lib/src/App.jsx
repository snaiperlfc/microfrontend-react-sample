import React from "react";
import ReactDOM from "react-dom";
import Footer from './Footer';
import Header from './Header';

import "./index.css";

const App = () => (
  <>
    <Header />
    <Footer />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
