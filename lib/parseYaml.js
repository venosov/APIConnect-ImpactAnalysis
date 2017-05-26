"use strict";

function parseYaml(e, i) {
    var n = yaml.safeLoad(fs.readFileSync(e, "utf8"));

    if(typeof n !== 'object') {
        return;
    }

    var r, o, s, t = null,
        a = n.info["x-ibm-name"],
        u = n.info.title,
        p = n.info.version,
        f = {
            apis: void 0,
            products: {}
        };
    if (void 0 == n.apis && (n.apis = {}), n.product) return f.products = {
        name: n.info.name,
        title: n.info.title,
        version: n.info.version,
        plans: n.plans,
        apis: n.apis
    }, i(t, f);
    if (o = {
            apiname: a,
            version: p,
            title: u,
            service: [],
            qm: []
        }, f.apis = o, !n["x-ibm-configuration"].assembly) return i(t, f);
    r = n["x-ibm-configuration"].assembly.execute;
    try {
        r.forEach(function(e) {
            if (void 0 !== e.mqinvoke) {
                var r = {
                    queuemanager: e.mqinvoke.queuemanager,
                    requestqueue: e.mqinvoke.queue,
                    replyqueue: e.mqinvoke.replyqueue,
                    backoutqueue: e.mqinvoke.backoutq
                };
                f.apis.qm.push(r)
            }
            void 0 !== e.invoke && (s = e.invoke["target-url"], /^(?:f|ht)tps?\:\/\//.test(s) || (s = "http://" + s), f.apis.service.push(s)), void 0 !== e.proxy && (s = e.proxy["target-url"], /^(?:f|ht)tps?\:\/\//.test(s) || (s = "http://" + s), f.apis.service.push(s)), i()
        })
    } catch (l) {
        throw t = l, console.error(l), l
    } finally {
        return config.debug && console.error("ParseYAML.js returns: " + JSON.stringify(f, {}, 2)), i(t, f)
    }
}
var fs = require("fs"),
    yaml = require("js-yaml"),
    config = require("./config.js");
module.exports = parseYaml;
