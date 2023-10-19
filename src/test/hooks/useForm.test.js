/* eslint-disable no-undef */
import { act, renderHook } from "@testing-library/react";
import { useForm } from "./../../hooks/useForm";


describe("pruebas en use form", () => {
  const initialForm = {
    name: "JUAN",
    email: "juan@juan.com",
  };
  test("debe de regresar los valores por defecto ", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
        name: initialForm.name,
        email: initialForm.email,
        formsState: initialForm,
        onInpuntChange: expect.any(Function),
        onResetForm: expect.any(Function),
    });
  });

  test('debe de cambiar el nombre del formulario', () => {

    const expected = 'richi'
    const { result } = renderHook(() => useForm(initialForm));
    const {onInpuntChange} =  result.current

    act(()=> {
        //apuntamos del targer al name y le damos el valor
       onInpuntChange({target: {name:'name', value:expected}})
    })

    expect(result.current.name).toBe(expected)
    expect(result.current.formsState.name).toBe(expected)
  })

  test('debe de resetear el formulario', () => {

    const expected = 'richi'
    const { result } = renderHook(() => useForm(initialForm));
    const {onInpuntChange, onResetForm} =  result.current

    act(()=> {
        //apuntamos del targer al name y le damos el valor
       onInpuntChange({target: {name:'name', value:expected}})
       onResetForm()
    })

    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formsState.name).toBe(initialForm.name)
  });
  
});
