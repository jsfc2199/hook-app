/* eslint-disable no-undef */
const { render, screen } = require("@testing-library/react");
import { UserContext } from "../../09-useContext/context/UserContext";
import HomePage from "../../09-useContext/HomePage";

describe("Pruebas en el home page", () => {
  const user = {
    id:1,
    nombre:'juan'
  }
  test("debe de mostrar el componente sin el usuario ", () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe('')
  });

  test("debe de mostrar el componente con el usuario ", () => {
    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe('juan')
  });
});
