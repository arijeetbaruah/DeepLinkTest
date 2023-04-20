import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';

const screens = [
    "Store",
    "MainMenuPanel",
    "MusicLibrary",
    "Leaderboard",
    "VenueScreen",
    "HubPanel",
    "ScreenControlPanel",
    "OptionsPanel",
    "SongSelectionPanel",
    "LoadingPanel",
    "BoxesPanel",
    "BoxDescriptionPanel",
    "ProfileUI",
    "JourneyScreen",
    "WishlistPanel",
    "CardCasePanel",
    "GenreUnlockedPanel",
    "SongDescriptionUI",
    "VenueInfoPanel",
    "SongLeaderboardPanel",
    "MLSpecialSongBox",
    "WishlistRewardPanel",
    "SongCollectionPanel",
    "SongUnlocked",
    "PopupPanel",
    "BragPopUp",
    "Tutorial",
    "Editprimarylanguage",
    "EditProfilePanel",
    "EventLeaderBoard"
]

class OpenScreen extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            screen: 0
        };
    }

    render() {
        var URL = "unitydl://SongBeat?screen=" + screens[this.state.screen];

        return (
            <Form>
                <Form.Select value={this.state.value} onChange={val => {
                    this.setState({
                        screen: val.target.value
                    });
                }}>
                    {
                        screens.map((screen, index) => {
                            return <option value={index}>{screen}</option>;
                        })
                    }
                </Form.Select>        
                <br/>
                <Button href={URL}>Launch with {screens[this.state.screen]}</Button>
            </Form>
        );
    }
}

export default OpenScreen;
