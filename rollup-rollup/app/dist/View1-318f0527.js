import { b as button } from './lib-f48bdb55.js';

/*import { multi } from '@drivera/funcs'*/

var View1 = {
    render: function () {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c('div', [
            _vm._m(0),
            _vm._v(' '),
            _c(
                'article',
                [
                    _c('ds-button', { on: { click: _vm.clickedButtonAction } }, [_vm._v('Increment')]),
                    _vm._v(' '),
                    _c('span', [_vm._v(_vm._s(_vm.count))]),
                ],
                1
            ),
        ]);
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
        DsButton: button,
    },
    data() {
        return {
            count: 0,
        };
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

export { View1 as default };
