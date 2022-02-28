import {BrowserRouter, Routes, Route} from "react-router-dom";
import Screen1 from "../../../kamg/src/components/Screen1";
import Screen2 from "../../../kamg/src/components/Screen2";
import Love from "../../../kamg/src/components/Love/Love";
import './appRouter.scss'
import Michis from "../../../kamg/src/components/Michis/Michis";

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