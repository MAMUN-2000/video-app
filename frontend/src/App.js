
import { Route, Routes } from 'react-router-dom';
import Footer from "./component/Footer";
import Navbar from './component/Navbar';
import Home from "./page/Home";
import Video from "./page/Video";


function App() {
  return (
    <>
      <Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/video/:videoId' element={<Video />} />
      </Routes>
      <Footer />
		</>
	);
}

export default App;