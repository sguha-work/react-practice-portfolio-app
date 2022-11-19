import SocialMenu from "../socialMenu/SocialMenu";

function Footer() {
  return (
    <div className="colorlib-footer">
      <p>
        <small>
          &copy; Copyright &copy;
          <script>document.write(new Date().getFullYear());</script> All rights
          reserved | This template is made with{" "}
          <i className="icon-heart" aria-hidden="true"></i> by{" "}
          <a href="https://colorlib.com" target="_blank" rel="noreferrer">
            Colorlib
          </a>
          <span>
            Demo Images:{" "}
            <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
              Unsplash.com
            </a>
          </span>
        </small>
      </p>
      <SocialMenu></SocialMenu>
    </div>
  );
}

export default Footer;
