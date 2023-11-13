export interface IMaterial  extends IMaterialData{

    type:string;
    data:IMaterialData[];
    id:string;

    category:ICategory;
}

export interface ICategory{
    name:string;
}

export interface IMaterialData{
    /**
     * 版本
     */
    version:string;
    /**
     * 物料源
     */
    url:string;
}

/**
 * 物料源如何加载   
    vue 加载远程组件   组件打包 umd  window.XXX = function(){}
    vue 中使用  <component :is="currentView">   
    如何导入  vue2 {components:{xxx:'xxx}}
    vue3 
 */
export interface IMaterialLoader{
    type:string;
    load(material:IMaterial):Promise<any>;

}

export class Catergory implements ICategory{
    public name:string;
}

export class Material implements IMaterial{
    public type:string;
    public version:string;
    public url:string;
    public id:string;
    
    public data :IMaterialData[];

    public category :ICategory;

    static create({url,type} :{url?:string,type?:string}){
        const m = new Material();
        m.type = type;
        m.url = url;
        m.data=[];
        m.category = new Catergory();
        return m;
    }

}