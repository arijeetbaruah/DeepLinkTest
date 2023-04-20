import './App.css';
import SongButton from './SongButton';
import EventButton from './EventButton';
import OpenScreen from './OpenScreen';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
        <h1>My Deep Link Test page</h1>
        <SongButton songID="444"/>
        <EventButton eventID="Event47"/>
        <OpenScreen />
    </Container>
  );
}

export default App;
