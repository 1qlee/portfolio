import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, n as decodeKey } from './chunks/astro/server_CaNEdUqK.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/wonkyu/Documents/portfolio/","cacheDir":"file:///Users/wonkyu/Documents/portfolio/node_modules/.astro/","outDir":"file:///Users/wonkyu/Documents/portfolio/dist/","srcDir":"file:///Users/wonkyu/Documents/portfolio/src/","publicDir":"file:///Users/wonkyu/Documents/portfolio/public/","buildClientDir":"file:///Users/wonkyu/Documents/portfolio/dist/","buildServerDir":"file:///Users/wonkyu/Documents/portfolio/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/wonkyu/Documents/portfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/wonkyu/Documents/portfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/wonkyu/Documents/portfolio/src/pages/work/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/wonkyu/Documents/portfolio/src/layouts/Work.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/work/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/wonkyu/Documents/portfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/wonkyu/Documents/portfolio/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/work/[...slug]@_@astro":"pages/work/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BRPiCSoK.mjs","/Users/wonkyu/Documents/portfolio/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/wonkyu/Documents/portfolio/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/wonkyu/Documents/portfolio/.astro/content-modules.mjs":"chunks/content-modules_B1jQTyqh.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D-N35lBS.mjs","/Users/wonkyu/Documents/portfolio/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CuSAHhvn.mjs","/Users/wonkyu/Documents/portfolio/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_On97arA1.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/domahub.mdx?astroPropagatedAssets":"chunks/domahub_y8atrLq4.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/notesmith.mdx?astroPropagatedAssets":"chunks/notesmith_Cf7sc2EE.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/officehours.mdx?astroPropagatedAssets":"chunks/officehours_1O7V9uZ_.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/spatialprints.mdx?astroPropagatedAssets":"chunks/spatialprints_Ckdk3n1X.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/sqnces.mdx?astroPropagatedAssets":"chunks/sqnces_BTNsT1sj.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/unicorngraphics.mdx?astroPropagatedAssets":"chunks/unicorngraphics_Bhb_A-55.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/unicornline.mdx?astroPropagatedAssets":"chunks/unicornline_CWRkNBJk.mjs","/Users/wonkyu/Documents/portfolio/src/content/blog/using-mdx.mdx":"chunks/using-mdx_CtJ3veRf.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/domahub.mdx":"chunks/domahub_Btd59ywD.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/notesmith.mdx":"chunks/notesmith_Cm2RsJC1.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/officehours.mdx":"chunks/officehours_BG6ZGqbZ.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/spatialprints.mdx":"chunks/spatialprints_V2mQvWLg.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/sqnces.mdx":"chunks/sqnces_B-UjCMkv.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/unicorngraphics.mdx":"chunks/unicorngraphics_BZxWnqoy.mjs","/Users/wonkyu/Documents/portfolio/src/content/work/unicornline.mdx":"chunks/unicornline_DT-jOftn.mjs","/Users/wonkyu/Documents/portfolio/src/components/Background.tsx":"_astro/Background.V--w9sMH.js","/Users/wonkyu/Documents/portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.r9EoUwFA.js","@astrojs/react/client.js":"_astro/client.BO3Rm8ny.js","/Users/wonkyu/Documents/portfolio/src/components/Main":"_astro/Main.Bu4plCeR.js","/Users/wonkyu/Documents/portfolio/src/components/WorkImg.tsx":"_astro/WorkImg.KAx3ZzIo.js","/Users/wonkyu/Documents/portfolio/src/components/Header":"_astro/Header.CF48JULm.js","/Users/wonkyu/Documents/portfolio/src/components/Header.tsx":"_astro/Header.D4wU6RGN.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/avatar.CjC3aN5k.webp","/_astro/notesmith-320.B4prBPkh.webp","/_astro/notesmith-640.B1Dv2cHV.webp","/_astro/domahub-1024.CehW0UQ3.webp","/_astro/domahub.MDiUrsWn.webp","/_astro/domahub-640.DGJNsTCc.webp","/_astro/domahub-320.CVgwn1qg.webp","/_astro/notesmith.yOmMzhfu.webp","/_astro/officehours-1024.BF_c_K7b.webp","/_astro/notesmith-1024.DvvsrE39.webp","/_astro/sqnces.DzF1V0ur.webp","/_astro/officehours.DJiA6hLF.webp","/_astro/sqnces-320.CbcI2Ar7.webp","/_astro/sqnces-640.3QjRXOJ2.webp","/_astro/officehours-640.DG7hC2WS.webp","/_astro/officehours-320.BzzyXVew.webp","/_astro/unicorngraphics-1024.BFdVtYNv.webp","/_astro/unicorngraphics-640.BF-MWK_w.webp","/_astro/unicorngraphics-320.HiIZ6dY6.webp","/_astro/unicorngraphics.1p2Bm31_.webp","/_astro/sqnces-1024.C6w8KDsm.webp","/_astro/unicornline.Bi_jDmIQ.webp","/_astro/unicornline-320.BFlUN223.webp","/_astro/spatialprints.D6d2ZIrG.webp","/_astro/unicornline-1024.DZ-pw6pB.webp","/_astro/spatialprints-1024.BxAUsZlq.webp","/_astro/spatialprints-320.DB0gnHZT.webp","/_astro/spatialprints-640.DZgvaHFN.webp","/_astro/unicornline-640.C2J2FFrU.webp","/_astro/_slug_.BA_peNOk.css","/WonkyuLee_Resume_2025.pdf","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.svg","/_astro/Background.V--w9sMH.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.r9EoUwFA.js","/_astro/Header.CF48JULm.js","/_astro/Header.D4wU6RGN.js","/_astro/Main.Bu4plCeR.js","/_astro/WorkImg.KAx3ZzIo.js","/_astro/client.BO3Rm8ny.js","/_astro/data_styles.CIgXvzDa.js","/_astro/index.CtckbgdI.js","/_astro/index.Dy6lLLXr.js","/_astro/proxy.BPN2OA6C.js","/_astro/router.DnZMHVsn.js","/fonts/satoshi.woff2","/images/avatar.webp","/images/domahub-1024.webp","/images/domahub-320.webp","/images/domahub-640.webp","/images/domahub.webp","/images/notesmith-1024.webp","/images/notesmith-320.webp","/images/notesmith-640.webp","/images/notesmith.webp","/images/officehours-1024.webp","/images/officehours-320.webp","/images/officehours-640.webp","/images/officehours.webp","/images/shadow.png","/images/spatialprints-1024.webp","/images/spatialprints-320.webp","/images/spatialprints-640.webp","/images/spatialprints.webp","/images/sqnces-1024.webp","/images/sqnces-320.webp","/images/sqnces-640.webp","/images/sqnces.webp","/images/unicorngraphics-1024.webp","/images/unicorngraphics-320.webp","/images/unicorngraphics-640.webp","/images/unicorngraphics.webp","/images/unicornline-1024.webp","/images/unicornline-320.webp","/images/unicornline-640.webp","/images/unicornline.webp","/images/wonkyu.png","/sounds/sound_name.m4a","/blog/index.html","/rss.xml","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Gn4rPoCO0biI9W7m/iO1TgLu2YyEoc3EpmNIKIldv7s=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/wonkyu/Documents/portfolio/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
