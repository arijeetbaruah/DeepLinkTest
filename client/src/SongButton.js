import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';

class SongButton extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            songID: props.songID
        };
    }

    render() {
        var URL = "unitydl://SongBeat?screen=SongSelectionPanel&songID=" + this.state.songID;

        return (
            <Form>
                <Form.Control type='text' value={this.state.songID} onChange={val => {
                    this.setState({
                        songID: val.target.value
                    });
                }} />
                <Form.Text>444 is owned and 468 is unowned</Form.Text>
                <br/>
                <Button href={URL}>Launch with SongID {this.state.songID}</Button>
            </Form>
        );
    }
}

export default SongButton;
