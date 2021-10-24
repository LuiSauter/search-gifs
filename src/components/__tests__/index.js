import { fireEvent, render, screen } from '@testing-library/react'
import App from '../App/App'

test('home work as expected', async () => {
  render(<App />)
  const gifLink = await screen.findByRole('img', { name: 'giff' })
  expect(gifLink).toBeVisible()
})

test.only('search form could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'Matrix' } })
  fireEvent.click(button)

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible()
})
