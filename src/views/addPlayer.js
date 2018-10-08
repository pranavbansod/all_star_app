const m = require('mithril');

module.exports = {
    view:function () {
        return m("form", [
            m("label.label", "Name"),
            m("input.input[type=text][placeholder=Name]"),
            m("label.label", "Position"),
            m("input.input[placeholder=Position]"),
            m("button.button[type=button]", "Save"),
        ])
    }
};