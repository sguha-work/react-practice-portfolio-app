function Menu() {
    return (
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
                <ul>
                    <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                    <li><a href="#" data-nav-section="about">About</a></li>
                    <li><a href="#" data-nav-section="services">Services</a></li>
                    <li><a href="#" data-nav-section="skills">Skills</a></li>
                    <li><a href="#" data-nav-section="education">Education</a></li>
                    <li><a href="#" data-nav-section="experience">Experience</a></li>
                    <li><a href="#" data-nav-section="work">Work</a></li>
                    <li><a href="#" data-nav-section="blog">Blog</a></li>
                    <li><a href="#" data-nav-section="contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
export default Menu;