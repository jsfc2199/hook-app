import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";
import NavBar from './NavLink';
import UserProvider from "./context/UserProvider";

const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>
      <NavBar/>
      <hr />

      

      {/* routes es un arreglo de rutas de route */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* para rutas que no existan podemos redirigirlo a donde queramos o mostrar una pagina de error */}
        {/* <Route path="/*" element={<LoginPage />} /> */}

        {/* la forma comun es usar navigate de ract router dom */}
        <Route path="/*" element={<Navigate to={"/about"}/>} />

      </Routes>
    </UserProvider>
  );
};

export default MainApp;
