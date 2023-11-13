
import {describe,test,expect} from 'vitest'
import { Material, PageElement } from '../src'
describe('page.element',()=>{
    test('PageElement.create',()=>{
        const ma = Material.create({type:'input'});
        const pm = PageElement.createPageElement('test',ma);
        expect(pm.name).toBeDefined();
    })
})