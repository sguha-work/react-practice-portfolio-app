import MenuData from "../../data/menu";
function Menu() {
    console.log(MenuData);
    return (
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
                <ul>
                    {
                        MenuData.map((data, index) => {
                            if (index === 0) {
                                return (
                                    <li className="active"><a href="#" data-nav-section={data.dataNavSection}>{data.name}</a></li>
                                );
                            } else {
                                return (
                                    <li><a href="#" data-nav-section={data.dataNavSection}>{data.name}</a></li>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}
export default Menu;