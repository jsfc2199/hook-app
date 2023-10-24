import { fireEvent, render, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../03-Examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch"; //apuntamos directamente a lo que queremos mockear
import { useCounter } from "../../hooks/useCounter";
//porque al importarlo normlamente será ../../../hooks

/* eslint-disable no-undef */

//mock del fetch
jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("Pruebas en multiple custom hook", () => {

  //se mockea como un jest function, lo hacemos a nivel global (describe) porque se usa en todos los test
  //sin embargo solo se implementa para el ultimo test
  const mockRandomNumber = jest.fn();
  //mockeamos el useCounter
  useCounter.mockReturnValue({
    counter: 1,
    randomNumber: mockRandomNumber,
  });

  //podemos limpiar los mocks tambien
  beforeEach(()=> {
    jest.clearAllMocks()
  })

  test("debe de mostrar el componente por defecto ", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Rick and Morty Api"));

    const nextButton = screen.getByRole("button", { name: "Next character" });

    expect(nextButton.disabled).toBeTruthy();
    //screen.debug()
  });

  //pruebas sobre el useFeatch de la api
  test("debe de mostrar un estado", () => {
    useFetch.mockReturnValue({
      data: { name: "JUAN", status: "Cansado" },
      isLoading: false,
      error: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("JUAN")).toBeTruthy();
    expect(screen.getByText("Cansado")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next character" });

    expect(nextButton.disabled).toBeFalsy();
    //screen.debug()
  });

  test("debe de llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: { name: "JUAN", status: "Cansado" },
      isLoading: false,
      error: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next character" });

    fireEvent.click(nextButton);

    //evaluamos que se llame el random number
    expect(mockRandomNumber).toHaveBeenCalled();
  });
});
