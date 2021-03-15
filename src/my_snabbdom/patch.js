import vnode from './vnode';
import createElement from './createElement';
export default function patch(oldVnode, newVnode){
    if(!isVnode(oldVnode)){
        oldVnode = vnode(oldVnode.tagName.toLowerCase(),{},[],undefined, oldVnode);
    }

    if(sameVnode(oldVnode, newVnode)){
        console.log('精细比较')
    }else{
        console.log()
    }
}

function isVnode(vnode){
    if(vnode.sel != '' || vnode.sel == undefined){
        return false;
    }
    return true;
}

function sameVnode(v1, v2){
    return v1.key === v2.key && v1.sel === v2.sel;
}