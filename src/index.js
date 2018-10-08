const m = require("mithril");

let Team = require('./views/team.js');

m.route(document.body,"/home",{
    "/home": Team,
});