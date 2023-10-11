import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/form.js";
import Menu from "./components/menu.js";
import PrivateRoute from "./components/auth.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function App() {

  const storedAuthenticated = sessionStorage.getItem('authenticated');
  const [authenticated, setAuthenticated] = useState(storedAuthenticated);

  const handleLogin = () => {
    setAuthenticated(true);
  }


  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Form onLogin={handleLogin} />} />
          <Route
            path="/menu"
            element={<PrivateRoute element={<Menu />} authenticated={authenticated} />}
          />
        </Routes>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </BrowserRouter>

  );
}

export default App;
