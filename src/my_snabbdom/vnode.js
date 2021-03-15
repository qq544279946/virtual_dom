// 把函数传入的参数组合成vnode对象返回
export default function vnode(sel, data, children, text, elm){
    return {
        sel,
        data,
        children,
        text,
        elm
    }
}