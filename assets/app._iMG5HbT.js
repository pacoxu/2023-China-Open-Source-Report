import{j as o,cY as p,cZ as u,c_ as c,c$ as d,d0 as l,d1 as f,d2 as m,d3 as h,d4 as A,d5 as g,X as v,d as P,u as y,l as C,z as _,d6 as w,d7 as E,d8 as R,d9 as b}from"./chunks/framework.SrqJXW5h.js";import{t as D}from"./chunks/theme.oG-or_0h.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(D),j=P({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=y();return C(()=>{_(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&w(),E(),R(),s.setup&&s.setup(),()=>b(s.Layout)}});async function L(){const e=S(),t=O();t.provide(u,e);const a=c(e.route);return t.provide(d,a),t.component("Content",l),t.component("ClientOnly",f),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function O(){return h(j)}function S(){let e=o,t;return A(a=>{let n=g(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=v(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&L().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{L as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}