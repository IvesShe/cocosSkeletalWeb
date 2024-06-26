System.register("chunks:///_virtual/AnimCtrl.ts",["cc"],(function(t){"use strict";var e,n,r,i,o;return{setters:[function(t){e=t.cclegacy,n=t._decorator,r=t.SkeletalAnimation,i=t.log,o=t.Component}],execute:function(){var a;function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e._RF.push({},"22257OpJGZNIJp7ulAU4XEp","AnimCtrl",void 0);var l=n.ccclass;n.property,t("AnimCtrl",l("AnimCtrl")(a=function(t){var e,n;function o(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return c(u(e=t.call.apply(t,[this].concat(r))||this),"anim",null),e}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.start=function(){var t=this;this.anim=this.node.getComponent(r),this.anim.play("Armature|Idle_New"),setTimeout((function(){t.anim.play("Armature|Walk_New"),i("@@@Walk_New")}),2e3),setTimeout((function(){t.anim.play("Armature|Run_New"),i("@@@Run_New")}),4e3),setTimeout((function(){t.anim.play("Armature|Fly_New"),i("@@@Fly_New")}),6e3)},o}(o))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/main.ts",["cc"],(function(t){"use strict";var r,o,e;return{setters:[function(t){r=t.cclegacy,o=t._decorator,e=t.Component}],execute:function(){var n;r._RF.push({},"e9b89nCg55I4oZBMIl4fvBP","main",void 0);var c=o.ccclass;o.property,t("Main",c("Main")(n=function(t){var r,o;function e(){return t.apply(this,arguments)||this}return o=t,(r=e).prototype=Object.create(o.prototype),r.prototype.constructor=r,r.__proto__=o,e.prototype.start=function(){},e}(e))||n);r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./AnimCtrl.ts","./main.ts"],(function(){"use strict";return{setters:[function(){},function(){}],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});