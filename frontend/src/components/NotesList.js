import React, { Component } from 'react';
import axios from 'axios';
import {format} from 'timeago.js';
import { Link } from 'react-router-dom';

export default class NoteList extends Component {
    state={
        notes: []
    }

    async getNotes(){
        const response = await axios.get('http://localhost:4000/api/notes');
        console.log(response);
        this.setState({notes: response.data})
    }

    componentDidMount(){
        this.getNotes();
    }

    deleteNote = async (id) =>{
        await axios.delete('http://localhost:4000/api/notes/' + id);
        this.getNotes();
    }

    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header">
                                    <h3>{note.title}</h3>
                                </div>

                                <div className="card-body">
                                    <p className="card-text">{note.content}</p>
                                    <b>{note.author}</b>
                                    <p>{format(note.created_at)}</p>
                                </div>

                                <div className="card-footer d-flex justify-content-between">
                                    <button className="btn btn-danger" onClick={() => this.deleteNote(note._id)}>Delete</button>
                                    <Link to={"/edit/" + note._id} className="btn btn-success">Edit</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
