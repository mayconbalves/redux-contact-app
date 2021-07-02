import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Input from 'components/input'
import Button from 'components/button'
import * as S from './styled'

const Login = () => {
  const [values, setValues] = useState({ username: '' })
  
  const history = useHistory()

  const inputChange = e => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const submitForm = async () => {
    history.push('/home')
  }

  return (
    <S.Container>
      <S.Form>
        <h1>Repositorios do github</h1>
        <Input
          onChange={inputChange}
          name="username"
          value={values.username}
          placeholder="Digite o seu usuário"
        />
        <Button
          disabled={values.username.length < 1}
          onClick={submitForm}
          type="button"
          backgroundColor="#03dac5"
        >
          Acessar
        </Button>
      </S.Form>
    </S.Container>
  )
}

export default Login