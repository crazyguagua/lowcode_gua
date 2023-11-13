import { Material } from "../material";
import { uuid } from "../utils";

export interface IElement {
    /**物料id */
    id: string;
    /**名称 */
    name: string;
    /** 物料id */
    mId: string;
    /** 物料版本 */
    mVersion: string;
}

export class PageElement implements IElement{
    public id :string;
    public name:string;
    public mId:string;
    public mVersion:string;

    static createPageElement(name:string,material:Material){
        let ele = new PageElement();
        ele.id = uuid();
        ele.name = name;
        ele.mId = material.id;

        return ele;
    }
}
