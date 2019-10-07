import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

test('renders without crashing', () => {
  const div = document.createElement('div')
  expect(() => {
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  }).not.toThrow()
})
