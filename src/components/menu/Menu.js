import { useState, useEffect } from "react";
import MenuData from "../../data/menu";
import MenuService from "../../services/MenuService";
import CommonService from "../../services/CommonService";
function Menu() {
    const [menus, setMenus] = useState([]);
    const common = CommonService.getInstance();
    useEffect(() => {
        (async () => {
            const menuService = MenuService.getInstance();
            let menu = await menuService.getMenu();
            console.log('menu', menu);
            setMenus(menu);
            window.setTimeout(()=>{
                
            },1000);
            
        })();
    }, []);
    useEffect(()=>{
        common.runGlobalScript();
    });
    return (
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
                <ul>
                    {
                        menus.map((data, index) => {
                            if (index === 0) {
                                return (
                                    <li key={data.id} className="active"><a href="#" data-nav-section={data.dataNavSection}>{data.name}</a></li>
                                );
                            } else {
                                return (
                                    <li key={data.id}><a href="#" data-nav-section={data.dataNavSection}>{data.name}</a></li>
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