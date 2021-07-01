import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from 'components/input'
import Button from 'components/button'
import * as S from './styled'
import { fetchRepositories } from './actions'

const Home = () => {
  const dispatch = useDispatch()
  const [values, setRepository] = useState({ repository: ''})

  const inputChange = e => {
  }
  
  const submitForm = () => {
    dispatch(fetchRepositories('mayconbalves'))
  }

  const allRepositories = []

  return (
    <>
      <S.Container>
      <S.Form>
        <h1>Digite seu nome de usuário</h1>
        <Input
          onChange={inputChange}
          name="username"
          value={values.repository}
          placeholder="Digite o seu usuário"
        />
        <Button
          onClick={submitForm}
          type="button"
          backgroundColor="#03dac5"
        >
          Acessar
        </Button>
      </S.Form>
      <S.Table>
        <thead>
          <S.Tr>
            <th>
              Nome
            </th>
          </S.Tr>
        </thead>
        <tbody>
          <S.Tr>
            <td>React</td>
          </S.Tr>
        </tbody>
      </S.Table>
    </S.Container>
    </>
  )
}

export default Home
