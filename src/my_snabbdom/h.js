import vnode from './vnode';

export default function h(sel, data, c){
    // 检测参数个数
    if(arguments.length !== 3){
        throw new Error('参数个数不对')
    }
    if(typeof c == 'string' || typeof c == 'number'){
        return vnode(sel, data, undefined, c, undefined);
    }

    if(Array.isArray(c)){
        for(let i = 0; i < c.length; i++){
            let cvnode = c[i];
            if(!(typeof cvnode === 'object' && cvnode.hasOwnProperty('sel'))){
                throw new Error('传入的数组参数中有项不是h函数')
            }
        }
        return vnode(sel, data, c, undefined, undefined);
    }

    if(typeof c == 'object' && c.hasOwnProperty('sel')){
        let children = [c];
        return vnode(sel, data, children, undefined, undefined);
    }
}