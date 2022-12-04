import FireBaseService from "./FireBaseService";// this service is also created following singleton pattern
class MenuService{
    instance = null;// this member variable will hold the instance of the class
    #fb = null;// this is a private variable as the name starts with '#'
    constructor() {
        this.#fb = FireBaseService.getInstance();
    }
    // this public static method will be used to create the instance of MenuService class
    // it assures that only one instance is created of MenuService
    // hence following the singleton pattern
    static getInstance() {
        if(this.instance == null) {// if the instance is null then only creating an instance
            this.instance = new MenuService();
        }
        return this.instance;
    }

    getMenusFromFB() {
        const myPromise = new Promise(async(resolve, reject)=>{
            try{
                const menus = await this.#fb.get('menus');
                resolve(menus);
            } catch(error) {
                reject(error);
            }
        });
        return myPromise;
    }
}
export default MenuService;