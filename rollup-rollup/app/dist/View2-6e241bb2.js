import { _ as _switch } from './lib-f48bdb55.js';

var View2 = {
    render: function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('div', [_vm._m(0), _vm._v(' '), _c('article', [_c('ds-switch')], 1)]);
    },
    staticRenderFns: [
        function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c('head', [_c('h1', [_vm._v('ADL Test project')])]);
        },
    ],
    name: 'App',
    components: {
        DsSwitch: _switch,
    },
    methods: {
        clickedButtonAction() {
            /*const numbers = multi(2*4);*/
            /*console.log(this, { numbers })*/
            console.log(this);
            // this.count += 1;
        },
    },
};

export { View2 as default };
