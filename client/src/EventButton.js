import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';

class EventButton extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            eventID: props.eventID
        };
    }

    render() {
        var URL = "unitydl://SongBeat?screen=HubPanel";

        if (this.state.eventID !== "")
        {
            URL += "&eventID=" + this.state.eventID;
        }

        return (
            <Form>
                <Form.Control type='text' value={this.state.eventID} onChange={val => {
                    this.setState({
                        eventID: val.target.value
                    });
                }} />
                <br/>
                <Button href={URL}>Launch with event {this.state.eventID}</Button>
            </Form>
        );
    }
}

export default EventButton;
