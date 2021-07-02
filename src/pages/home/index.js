import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Input from 'components/input'
import Button from 'components/button'
import * as S from './styled'
import { fetchRepositories } from './actions'

const Home = () => {
  const dispatch = useDispatch()
  const repositories = useSelector(state => state.repositoryReducers.repositories)
  const [values, setRepository] = useState({ repository: ''})

  const inputChange = e => {
    const { name, value } = e.target

    setRepository({
      ...values,
      [name]: value
    })
  }
  
  const submitForm = () => {
    const { repository } = values
    dispatch(fetchRepositories(repository))
  }

  const allRepositories = repositories || []
  return (
    <>
      <S.Container>
      <S.Form>
        <h1>Digite seu nome de usuário</h1>
        <Input
          onChange={inputChange}
          name="repository"
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
          {
            allRepositories.map(repo => {
              console.log(repo, 'repo')
              return (
                <S.Tr key={repo.id}>
                <td>{repo.name}</td>
              </S.Tr>
              )
            })
          }
        </tbody>
      </S.Table>
    </S.Container>
    </>
  )
}

export default Home
