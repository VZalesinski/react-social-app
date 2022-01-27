import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs dialogsPage={props.state.dialogsPage} />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  addPostToState={props.addPostToState}
                  updateNewText={props.updateNewText}
                />
              }
            />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
