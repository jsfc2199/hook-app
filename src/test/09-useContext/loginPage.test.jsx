/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import LoginPage from "../../09-useContext/LoginPage";

describe("Pruebas en el loing", () => {
  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe de llamar al set user cuando se hace click en el boton", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user:null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalledWith({ 
      id: "123", 
      nombre: "juan", 
      email: "juan@juan.com" 
    });
  });
});
