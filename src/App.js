/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

function App() {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <a
          href="#"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i></i>
        </a>

        <Sidebar></Sidebar>

        <Main></Main>
      </div>
    </div>
  );
}

export default App;
