import {HashRouter, Routes, Route, Link} from "react-router-dom"
import Myuser from "./basic/page1";
import MyBook from "./basic/page2";
import MyCustomer from "./basic/page3";
import MyItem from "./basic/page4";

function App() {
  return (
    <HashRouter>
      <header>
        <Link to="/" className="toplink">Manage User</Link>
        <Link to="/book" className="toplink">Manage Book</Link>
        <Link to="/customer" className="toplink">Manage Customer</Link>
        <Link to="/item" className="toplink">Manage Item</Link>
      </header>

      <Routes>
        <Route exact path="/" element={<Myuser />} />
        <Route exact path="/book" element={<MyBook />} />
        <Route exact path="/customer" element={<MyCustomer />} />
        <Route exact path="/item" element={<MyItem />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
