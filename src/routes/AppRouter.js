import {BrowserRouter, Routes, Route} from "react-router-dom";
import './appRouter.scss'
import Screen1 from "../components/Screen1";
import Screen2 from "../components/Screen2";
import Michis from "../components/Michis/Michis";
import Love from "../components/Love/Love"
export const AppRouter = () => {
  return (
      <BrowserRouter>
          <div style={{textAlign: 'center'}}>
              {/*<h1 className="animate__animated animate__zoomInDown animate__slow" >By MR for you!</h1>*/}
              <Routes>
                  <Route path="/" element={<Screen1 />} />
                  <Route path="/screen2" element={<Screen2 />} />
                  <Route path="/love" element={<Love />} />
                  <Route path="/michis" element={<Michis />} />
              </Routes>
          </div>

      </BrowserRouter>
  );
}

export default AppRouter