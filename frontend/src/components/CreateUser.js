import React, { Component } from 'react';
//Axios me permite hacer peticiones http
import axios from 'axios';

export default class CreateUser extends Component {

    state = {
        users: [],
        username: ''
    }

    getUsers = async () =>{
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({users: response.data})
    }

    onChangeUsername = (e) =>{
        this.setState({
            username: e.target.value
        })
        console.log(e.target.value);
    }

    deleteUsers = async (id) =>{
        await axios.delete('http://localhost:4000/api/users/' + id);
        this.getUsers();
    }

    onSubmitUsername = async (e) =>{
        e.preventDefault();
        const response = await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });
        console.log(response);
        this.setState({username: ''});
        this.getUsers();
    }

    async componentDidMount(){ //aca consumire mi api apenas recargue la pagina
          this.getUsers();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3 className="card-title">Create new User</h3>
                        <form onSubmit={this.onSubmitUsername}>
                            <div className="form-group">
                                <input type="text" value={this.state.username} placeholder="Insert an Username" className="form-control" onChange={this.onChangeUsername} />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block">
                                    Create User
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user => 
                            <li className="list-group-item list-group-item-action" onDoubleClick={() => this.deleteUsers(user._id)} key={user._id}>
                                {user.username}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
