import React from 'react';
import './App.css';
import axios from 'axios'
import Registro from './components/Registro';
import Usuario from './components/Usuario';

export default class App extends React.Component {
  state = {
    users: [],
    inputName: '',
    inputEmail: '',
    page: 'home'
  }

  componentDidMount = () => {
    this.getUsers()
  }

  onChangeName = (e) => {
    this.setState({ inputName: e.target.value })
  }
  onChangeEmail = (e) => {
    this.setState({ inputEmail: e.target.value })
  }

  backScreen = () => {
    this.setState({ page: 'home' })
  }

  getUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'nathalia-cardoso-cruz'
      }
    }).then((res) => {
      this.setState({ users: res.data })
      console.log(res.data)
      console.log(this.state.users)

    }).catch((err) => {
      console.log(err.response.data)
    })
  }

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: 'nathalia-cardoso-cruz'
      }
    }).then((res) => {
      alert('Usuário criado com sucesso!')
      this.setState({ inputEmail: '', inputName: '' })
      this.getUsers()
    }).catch((err) => {
      console.log(err.response.data)
      alert('Erro ao criar usuário!')
    })

    this.setState({ page: 'list' })
  }

  deleteUser = (id) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
      headers: {
        Authorization: 'nathalia-cardoso-cruz'
      }
    }).then((res) => {
      this.getUsers()
      alert('Usuário apagado!')
    }).catch((err) => {
      console.log(err.response.data)
      alert('Erro ao apagar usuário!')
    })
  }

  render() {
    const usersList = this.state.users.map((user) => {
      return (
        <div>
          <li key={user.id}> {user.name} </li>
          <button onClick={() => this.deleteUser(user.id)}>Apagar usuário</button>
        </div>
      )
    })

    return (
      <div>
        <Registro
          valueName={this.state.inputName}
          onChangeName={this.onChangeName}

          valueEmail={this.state.inputEmail}
          onChangeEmail={this.onChangeEmail}

          onClickAdd={this.createUser}
        />

        <Usuario
          list={usersList}
          onClick={this.backScreen}
        />
      </div >
    );
  }
}