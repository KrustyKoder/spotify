import logo from './logo.svg';
import './App.css';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Track from './components/Track';
import TrackList from './components/Tracklist';

function App() {


  const tracks = [
    { name: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', id: '1' },
    { name: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', id: '2' },
    { name: 'Watermelon Sugar', artist: 'Harry Styles', album: 'Fine Line', id: '3' },
    { name: 'Good 4 U', artist: 'Olivia Rodrigo', album: 'SOUR', id: '4' },
    { name: 'Montero (Call Me By Your Name)', artist: 'Lil Nas X', album: 'Montero', id: '5' },
    { name: 'Save Your Tears', artist: 'The Weeknd', album: 'After Hours', id: '6' },
    { name: 'Stay', artist: 'The Kid LAROI, Justin Bieber', album: 'F*ck Love 3: Over You', id: '7' },
    { name: 'Kiss Me More', artist: 'Doja Cat', album: 'Planet Her', id: '8' },
    { name: 'Industry Baby', artist: 'Lil Nas X, Jack Harlow', album: 'Montero', id: '9' },
    { name: 'Peaches', artist: 'Justin Bieber, Daniel Caesar, Giveon', album: 'Justice', id: '10' },
  ];

  
  
  

  return (
    <div className="App">
      <SearchBar/>
      <TrackList tracks={tracks}/>
    </div>
  );




}

export default App;
