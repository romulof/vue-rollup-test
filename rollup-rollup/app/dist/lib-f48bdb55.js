var button = {
    render: function render() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
            'button',
            {
                attrs: {
                    type: 'button',
                },
                on: {
                    click: function click($event) {
                        return _vm.$emit('on-click');
                    },
                },
            },
            [_vm._t('default')],
            2
        );
    },
    staticRenderFns: [],
    stub: 1,
};
var _switch = {
    render: function render() {
        var _vm = this;
        var _h = _vm.$createElement;
        var _c = _vm._self._c || _h;
        return _c(
            'label',
            {
                staticClass: 'switch',
            },
            [
                _c('input', {
                    attrs: {
                        type: 'checkbox',
                    },
                }),
                _vm._v(' '),
                _c(
                    'span',
                    {
                        staticClass: 'slider round',
                    },
                    [_vm._t('default')],
                    2
                ),
            ]
        );
    },
    staticRenderFns: [],
    stub: 1,
};

export { _switch as _, button as b };
