import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Technology from './Technology';
import Sports from './Sports';
import IntroductionH from './IntroductionH';
function MyRouter() {
    return (
    <Router>
       <div>
         <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
           <Route path="/news">
          <Route path="/news/technology" element={<Technology />} />
          <Route path="/news/sports" element={<Sports />} />
          <Route index element={<IntroductionH />} />
        </Route>
         </Routes>
       </div>
     </Router>
    );
}
export default MyRouter;