/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainApp from "./../../09-useContext/Main";

describe("pruebas en el main app", () => {
  test("debe de mostrar el home page ", () => {
    //memory router simula el browser router
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("HomePage App")).toBeTruthy();
  });

  test('debe de mostrar el login page ', () => {
      //memory router simula el browser router
      render(
      <MemoryRouter initialEntries={['/login']}>
          <MainApp/>
      </MemoryRouter>
      )

      expect(screen.getByText("LoginPage App")).toBeTruthy();
    });
  
});
