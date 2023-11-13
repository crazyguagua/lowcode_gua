import { IElement, PageElement } from "../element";
import { IMaterial } from "../material";

export interface IProject {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目类型 h5,pc项目（先不考虑）
     */
    type: string;
    /**
     * 项目描述
     */
    description: string;
    pages: IPage[];
}

export interface IPage {
    /**
     * 名称
     */
    name: string;
    /**
     * 描述
     */
    description: string;
    /**
     * 页面元素
     */
    elements: IElement[];

}




export class Project implements IProject {
    public name: string;
    public description: string;
    public pages: IPage[];
    public type: string;
    public static create(){
        const project = new Project()
        const page = Page.create();
        project.addPage(page);
    }

    public addPage(page:Page){
        this.pages.push(page)
    }

    public removePage(page:Page){
        let index = this.pages.indexOf(page);
        this.pages.splice(index,1)
    }
    /**
     * 在某个位置插入页面
     * @param index 
     * @param page 
     */
    public insertPage(index:number,page:Page){
        this.pages.splice(index,0,page);
    }
}

export class Page implements IPage{
    public name:string;
    public description:string;
    public elements:PageElement[];
    static  create():Page{
        return new Page();
    }

}


