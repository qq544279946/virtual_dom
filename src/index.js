import h from './my_snabbdom/h';
import patch from './my_snabbdom/patch';

const container = document.getElementById('container');

const myVnode = h('h1', {}, '你好');

patch(container, myVnode);