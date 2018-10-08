const m = require('mithril');

module.exports = {
    view: function () {
        return [
            m('h1','All Star 2018'),
            m('button',{href:'/addPlayer' ,oncreate: m.route.link},"+")
        ];

    }
};