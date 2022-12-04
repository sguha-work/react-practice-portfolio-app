import { useState, useEffect } from "react";
import MenuData from "../../data/menu";
import MenuService from "../../services/MenuService";
import CommonService from "../../services/CommonService";
function Menu() {
    const initialData = [
        {id: '1', dataNavSection: 'menu1', name: 'Menu1'},
        {id: '2', dataNavSection: 'menu2', name: 'Menu2'},
    ];
    //'menus' variable will hold the menu data, setMenus method will be called to update menu data
    const [menus, setMenus] = useState(initialData);
    const common = CommonService.getInstance();
    const menuServiceInstance = MenuService.getInstance();
    useEffect(()=>{
        menuServiceInstance.getMenusFromFB().then((data) => {
            console.log('menu data', data);
            setMenus(data);
            
        }).catch((error) => {
            console.log('menu data error', error);
        });
    },[]);

    // this section is required to run the bootstrap menu initialization method after the data is received from Firebase and menu repopulated
    useEffect(()=>{console.log('menu initialized')
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