import React from 'react'
import ReactDOM from 'react-dom'
import store from 'store/store'
import { createGlobalStyle } from 'styled-components'
import Routers from './Routers'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body {
    background-color: rgb(31, 27, 36);
    height: 100%;
  }
  body {
    font-family:
      --apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Routers store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)


