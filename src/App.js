import { ThemeProvider } from "@mui/material";
// import Login from "./admin/Login";
import theme from "./reusablecompo/Theme";
import "./App.css";
import Sidebar from "../src/reusablecompo/Sidebar";
import Mainstepper from "./employee/Mainstepper";
import { Route, Routes } from "react-router-dom";
import EmpSidebar from "./employee/EmpSidebar";
import ReturnNavbar from "./employee/ReturnNavbar";
import Login from "./admin/Login";
import InfoCard from "./employee/InfoCard";
import Charts from "./employee/Charts";
import Select from "./muy/Select";
import Test from "./muy/Test";
import Todo from "./components/Todo";
import Usereducer from "./reducers/Usereducer";
import Fetch from "./Hooks/Fetch";
import { useFetch } from "./Hooks/useFetch";
import Table from "./Hooks/Table";
function App() {
  const data = useFetch("https://swapi.dev/api/planets");
  console.log(data);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <Todo /> */}
        {/* <Table/> */}
        {/* <Fetch /> */}
        {/* <Usereducer/> */}
        {/* <InfoCard /> */}
        {/* <Login /> */}
        {/* <Sidebar /> */}
        {/* <Charts /> */}
        {/* <Select /> */}
        {/* <Test /> */}
        <Routes>
          <Route path="/" element={<Sidebar />} />
          <Route path="/Mainstepper" element={<Mainstepper />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Empsidebar" element={<EmpSidebar />} />
          <Route path="/ReturnNavbar" element={<ReturnNavbar />} />
          <Route path="/Infocard" element={<InfoCard />} />
          <Route path="/Charts" element={<Charts />} />
        </Routes>
        {/* <Home /> */}
        {/* <Axiosinstances /> */},/ +{/* <Sidebar /> */}
        {/* <Navbar /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
