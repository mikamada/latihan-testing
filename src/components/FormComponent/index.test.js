import { render, screen, fireEvent, getByTestId } from '@testing-library/react'
import NameForm from './FormCoding'



// test('NameForm', () => {
//   render(<NameForm/>)
//   expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument()
// })

// test('input text for Nama Lengkap', () => {
//   render(<NameForm/>)
//   fireEvent.input(screen.getByRole('textbox', { name: /nama/i }), {target: {value: 'Mika Mada'}})
//   expect(screen.getByRole('textbox', {name: /nama/i}).value).toBe('Mika Mada')
// })

// test('check error value nama lengkap', () => {
//   render(<NameForm/>)
//   fireEvent.input(screen.getByRole('textbox', { name: /nama/i }), {target: {value: 'Mika30'}})
//   expect(screen.getByLabelText(/Nama Lengkap/i,'Nama lengkap harus berupa huruf'))
// })

// test('input email', () => {
//   render(<NameForm/>)
//   fireEvent.input(screen.getByRole('textbox', {name: /email/i}), {target: {value: 'mikamada'}})
//   expect(screen.getByRole('textbox', {name: /email/i}).value).toBe('mikamada')
// })

// test('check error value email', () => {
//   render(<NameForm/>)
//   fireEvent.input(screen.getByRole('textbox', {name: /email/i}), {target: {value: 'mika mada'}})
//   expect(screen.getByLabelText(/Email/i, 'Email tidak valid'))
// })

function inputEl(name){
  const util =  render(<NameForm/>)
  // expect(util.findAllByLabelText())
  const input = util.container.querySelector(`input[name="${name}"]`)
  return input
}

describe("testing form Coding",() =>{
  test('input noHandphone', () => {
    const value = '090988880088'
    const input = inputEl("noHandphone")
    
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: {value}})
    expect(input.value).toBe(value)
  })

  test('input email', () => {
    const value = 'mika@gmail.com'
    const input = inputEl("email")
    
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: {value}})
    expect(input.value).toBe(value)
  })
})



