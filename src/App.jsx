import { Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Categorie from "./pages/Category.jsx";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="categorie/:category" element={<Categorie />} />
      </Route>
    </Routes>
  );
}
export default App;
