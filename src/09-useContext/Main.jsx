import { Navigate, Route, Routes,Link } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import AboutPage from "./AboutPage";

const MainApp = () => {
  return (
    <>
      <h1>Main App</h1>
      <Link to = "/">Home</Link>
      <Link to = "/about">About</Link>
      <Link to = "/login">Login</Link>
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
    </>
  );
};

export default MainApp;
