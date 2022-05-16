import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./Components/AddItems/AddItems";
import Blogs from "./Components/Blogs/Blogs";
import Feedback from "./Components/Customer's Feedback/Feedback";
import Error from "./Components/ErrorPage/Error";
import Homepage from "./Components/Homepage/Homepage";
import Inventorie from "./Components/Inventories/Inventorie";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import ManageInventories from "./Components/ManageInventory/ManageInventories";
import Opening from "./Components/OpeningHours/Opening";
import Protected from "./Components/ProtectedRoute/Protected";
import Register from "./Components/Register/Register";
import Footer from "./SharedComponents/Footer/Footer";
import Header from "./SharedComponents/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/home" element={<Homepage></Homepage>}></Route>
        {/* <Route path="/inventory" element={<Inventorie></Inventorie>}></Route> */}
        <Route path="*" element={<Error></Error>}></Route>

        <Route
          path="/inventory/:id"
          element={
            <Protected>
              <Inventory></Inventory>
            </Protected>
          }
        ></Route>

        <Route
          path="/manageinventory"
          element={<ManageInventories></ManageInventories>}
        ></Route>

        <Route path="/openinghours" element={<Opening></Opening>}></Route>

        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/feedback" element={<Feedback></Feedback>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/additem" element={<AddItems></AddItems>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
