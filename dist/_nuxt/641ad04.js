(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{460:function(t,e,n){"use strict";n.r(e);var r=n(19),l=(n(62),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("blog").fetch();case 3:return r=e.sent,e.next=6,n("gallery").fetch();case 6:return l=e.sent,e.abrupt("return",{posts:r,galleries:l});case 8:case"end":return e.stop()}}),e)})))()}}),c=n(63),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("nav",[n("h2",[t._v("Articles")]),t._v(" "),n("ul",t._l(t.posts,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{attrs:{to:"blog/"+e.slug}},[t._v(t._s(e.title))])],1)})),0),t._v(" "),n("h2",[t._v("Gallery")]),t._v(" "),n("ul",t._l(t.galleries,(function(e){return n("li",{key:e.slug},[n("NuxtLink",{attrs:{to:"gallery/"+e.slug}},[t._v(t._s(e.title))])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);