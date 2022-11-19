/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";

function Sidebar() {
  return (
    <aside
      id="colorlib-aside"
      role="complementary"
      className="border js-fullheight"
    >
      <div className="text-center">
        <div
          className="author-img"
          style={{ backgroundImage: 'url("images/about.jpg")' }}
        ></div>
        <h1 id="colorlib-logo">
          <a href="index.html">Tanmoy Adhikary</a>
        </h1>
        <span className="position">
          <a href="#">UI/UX/Designer</a> in India
        </span>
      </div>

      <Menu></Menu>
      <Footer></Footer>
    </aside>
  );
}

export default Sidebar;
