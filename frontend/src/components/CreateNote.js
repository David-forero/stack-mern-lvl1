import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {   

    state={
        users:[],
        userSelected: '',
        title: 'sos',
        content: '',
        editing: false,
        _id: ''
    }

    async componentDidMount(){
        console.log(this.props.match.params.id); //con esto puedo obtener los valores de la url
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: response.data.map(user => user.username),
            userSelected: response.data[0].username
        })

        if (this.props.match.params.id) {
            const response = await axios.get('http://localhost:4000/api/notes/' + this.props.match.params.id);

            this.setState({
                userSelected: response.data.author,
                title: response.data.title,
                content: response.data.content,
                editing: true, 
                _id: this.props.match.params.id
            })

        }
    }

    onInputChange = e =>{
        this.setState({
            [e.target.name]: e.target.value //target.name recibe el atributo del input y se da al estado exactamente
        })
        //console.log([e.target.name], e.target.value)
    }

    onSubmitForm = async (e) =>{
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.userSelected
        }
        if (this.state.editing) {
            await axios.put('http://localhost:4000/api/notes/' + this.state._id, newNote);
        } else {
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
        window.location.href = '/'
    }

    render() {
        return (
            <div>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body">
                        <h4 className="card-title">
                            Create Note
                        </h4>

                        {/* SELECT USER */}
                        <div className="form-group">
                            <select className="form-control" name="userSelected" onChange={this.onInputChange} value={this.state.userSelected}>
                                {
                                    this.state.users.map(user => 
                                    <option value={user} key={user}>{user}</option>
                                    )
                                }
                            </select>
                        </div>

                        <form onSubmit={this.onSubmitForm}>
                            <div className="form-group">
                                <input type="text" name="title" onChange={this.onInputChange} placeholder="Title" className="form-control" value={this.state.title} />
                            </div>
                            
                            <div className="form-group">
                            <textarea name="content" onChange={this.onInputChange} placeholder="Content" rows="10" className="form-control" value={this.state.content}></textarea>
                            </div>
                            
                            
                            <div className="form-group">
                                <button className="btn btn-primary btn-block">Save</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
