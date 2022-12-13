import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { pages } from "./data/pages";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          {pages.map((page) => {
            return (
              <Route
                key={page.id}
                path={page.path}
                element={<page.element />}
              />
            );
          })}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
