import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

// hooks
import { useState, useEffect } from "react";
import { useAuthenticate } from "./hooks/useAuthenticate";

// pages
import Casa from "./pages/Home/Casa";
import About from "./pages/About/About";
import Post from "./pages/Post/Post";

// components
import NB from "./components/NavBar/NB";
import Footer from "./components/Footer/Footer";
import CreatePost from "./pages/CreatePost/CreatePost";
import Search from "./pages/Search/Search";
import Login from "./Login/Login";
import Reg from "./Register/Reg";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditPost from "./pages/EditPost/EditPost";

// context
import { AuthProvider } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthenticate();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NB />
          <div className="container">
            <Routes>
              <Route path="/" element={<Casa />} />
              <Route path="/about" element={<About />} />
              <Route
              path="/posts/create"
              element={user && user.email.includes("ifc") ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user && user.name ===("ifc") ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route path="/posts/:id" element={<Post />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Reg /> : <Navigate to="/" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard/> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;