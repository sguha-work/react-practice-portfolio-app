import FireBaseService from "./FireBaseService";
class MenuService {
    instance = null;
    fb = null;
    constructor() {
        this.fb = FireBaseService.getInstance();
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = new MenuService();
        }
        return this.instance;
    }
    async getMenu() {
        try{
            const menuEntries = await this.fb.get('menus');
            return Promise.resolve(menuEntries);
        } catch(error) {
            return Promise.reject(error);
        }
    }
}
export default MenuService;