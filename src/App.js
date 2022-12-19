import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ChannelDetail from './components/ChannelDetail';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import PlayListDetail from './components/PlayListDetail';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';


function App() {
  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>} />
        <Route path="/video/:id" exact element={<VideoDetail/>} />
        <Route path="/channel/:id" exact element={<ChannelDetail/>} />
        <Route path="/search/:query" exact element={<SearchFeed/>} />
        <Route path="/playlist/:id" exact element={<PlayListDetail/>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
