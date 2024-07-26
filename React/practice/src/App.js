import {HashRouter, Routes, Route, Link} from "react-router-dom"
import Myuser from "./basic/page1";
import MyBook from "./basic/page2";
import MyCustomer from "./basic/page3";
import MyItem from "./basic/page4";
import Hook1 from "./Hooks/page6";
import Hook2 from "./Hooks/page7.js";
import Hook3 from "./Hooks/page8.js";
import Hook4 from "./Hooks/page9.js";
import Hook5 from "./Hooks/page10.js";
import Myapi1 from "./api/api1.js";

function App() {
  return (
    <HashRouter>
      <header>
        <Link to="/" className="toplink">Manage User</Link>
        <Link to="/book" className="toplink">Manage Book</Link>
        <Link to="/customer" className="toplink">Manage Customer</Link>
        <Link to="/item" className="toplink">Manage Item</Link>
        <Link to="/hook1" className="toplink">Hook1</Link>
        <Link to="/hook2" className="toplink">Hook2</Link>
        <Link to="/hook3" className="toplink"> Hook3 </Link>
        <Link to="/hook4" className="toplink"> Hook4 </Link>
        <Link to="/hook5" className="toplink"> Hook5 </Link>
        <Link to="/api1" className="toplink"> API1 </Link>
      </header>

      <Routes>
        <Route exact path="/" element={<Myuser />} />
        <Route exact path="/book" element={<MyBook />} />
        <Route exact path="/customer" element={<MyCustomer />} />
        <Route exact path="/item" element={<MyItem />} />
        <Route exact path="/hook1" element={<Hook1/>}/>
        <Route exact path="/hook2" element={<Hook2/>}/>
        <Route exact path="/hook3" element={<Hook3 />}/>
        <Route exact path="/api1" element={<Myapi1 />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
