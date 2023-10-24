import { render, screen } from "@testing-library/react"
import MultipleCustomHooks from './../../../03-Examples/MultipleCustomHooks';

/* eslint-disable no-undef */
describe('Pruebas en multiple custom hook', () => {
  test('debe de mostrar el componente por defecto ', () => {
    render(<MultipleCustomHooks/>)
    expect(screen.getByText('Loading...'))
    expect(screen.getByText('Rick and Morty Api'))

    const nextButton = screen.getByRole('button', {name:'Next character'});

    expect(nextButton.disabled).toBeTruthy(); 
    screen.debug()
  })

  //pruebas sobre el useFeatch de la api
  test('debe de mostrar un quote', () => {
    
  })
  
  
})
