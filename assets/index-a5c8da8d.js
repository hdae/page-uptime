(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function T(){}function re(t){return t()}function G(){return Object.create(null)}function A(t){t.forEach(re)}function ne(t){return typeof t=="function"}function se(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _e(t){return Object.keys(t).length===0}function oe(t,e){t.appendChild(e)}function ae(t,e,r){t.insertBefore(e,r||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function I(t){return document.createElement(t)}function we(t){return document.createTextNode(t)}function j(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function ve(t){return Array.from(t.childNodes)}function Te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t,e,r){t.classList[r?"add":"remove"](e)}let R;function S(t){R=t}function Me(){if(!R)throw new Error("Function called outside component initialization");return R}function Se(t){Me().$$.on_mount.push(t)}const _=[],J=[];let w=[];const W=[],Re=Promise.resolve();let P=!1;function De(){P||(P=!0,Re.then(ie))}function L(t){w.push(t)}const q=new Set;let b=0;function ie(){if(b!==0)return;const t=R;do{try{for(;b<_.length;){const e=_[b];b++,S(e),Ne(e.$$)}}catch(e){throw _.length=0,b=0,e}for(S(null),_.length=0,b=0;J.length;)J.pop()();for(let e=0;e<w.length;e+=1){const r=w[e];q.has(r)||(q.add(r),r())}w.length=0}while(_.length);for(;W.length;)W.pop()();P=!1,q.clear(),S(t)}function Ne(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}function Oe(t){const e=[],r=[];w.forEach(n=>t.indexOf(n)===-1?e.push(n):r.push(n)),r.forEach(n=>n()),w=e}const O=new Set;let Ee;function ue(t,e){t&&t.i&&(O.delete(t),t.i(e))}function $e(t,e,r,n){if(t&&t.o){if(O.has(t))return;O.add(t),Ee.c.push(()=>{O.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}const xe=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...xe];function Ae(t){t&&t.c()}function ce(t,e,r,n){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,r),n||L(()=>{const a=t.$$.on_mount.map(re).filter(ne);t.$$.on_destroy?t.$$.on_destroy.push(...a):A(a),t.$$.on_mount=[]}),o.forEach(L)}function fe(t,e){const r=t.$$;r.fragment!==null&&(Oe(r.after_update),A(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function Ce(t,e){t.$$.dirty[0]===-1&&(_.push(t),De(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function le(t,e,r,n,s,o,a,i=[-1]){const f=R;S(t);const u=t.$$={fragment:null,ctx:[],props:o,update:T,not_equal:s,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:G(),dirty:i,skip_bound:!1,root:e.target||f.$$.root};a&&a(u.root);let d=!1;if(u.ctx=r?r(t,e.props||{},(h,m,...g)=>{const y=g.length?g[0]:m;return u.ctx&&s(u.ctx[h],u.ctx[h]=y)&&(!u.skip_bound&&u.bound[h]&&u.bound[h](y),d&&Ce(t,h)),m}):[],u.update(),d=!0,A(u.before_update),u.fragment=n?n(u.ctx):!1,e.target){if(e.hydrate){const h=ve(e.target);u.fragment&&u.fragment.l(h),h.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&ue(t.$$.fragment),ce(t,e.target,e.anchor,e.customElement),ie()}S(f)}class he{$destroy(){fe(this,1),this.$destroy=T}$on(e,r){if(!ne(r))return T;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const s=n.indexOf(r);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!_e(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function $(t){return $=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(t)}function p(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function l(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function c(t){l(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||$(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function de(t,e){l(2,arguments);var r=c(t),n=p(e);return isNaN(n)?new Date(NaN):(n&&r.setDate(r.getDate()+n),r)}function qe(t,e){l(2,arguments);var r=c(t),n=p(e);if(isNaN(n))return new Date(NaN);if(!n)return r;var s=r.getDate(),o=new Date(r.getTime());o.setMonth(r.getMonth()+n+1,0);var a=o.getDate();return s>=a?o:(r.setFullYear(o.getFullYear(),o.getMonth(),s),r)}function M(t,e){if(l(2,arguments),!e||$(e)!=="object")return new Date(NaN);var r=e.years?p(e.years):0,n=e.months?p(e.months):0,s=e.weeks?p(e.weeks):0,o=e.days?p(e.days):0,a=e.hours?p(e.hours):0,i=e.minutes?p(e.minutes):0,f=e.seconds?p(e.seconds):0,u=c(t),d=n||r?qe(u,n+r*12):u,h=o||s?de(d,o+s*7):d,m=i+a*60,g=f+m*60,y=g*1e3,C=new Date(h.getTime()+y);return C}function V(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function K(t){l(1,arguments);var e=c(t);return e.setHours(0,0,0,0),e}var ke=864e5;function Ie(t,e){l(2,arguments);var r=K(t),n=K(e),s=r.getTime()-V(r),o=n.getTime()-V(n);return Math.round((s-o)/ke)}function v(t,e){l(2,arguments);var r=c(t),n=c(e),s=r.getTime()-n.getTime();return s<0?-1:s>0?1:s}var je=6e4,Pe=36e5;function Le(t,e){l(2,arguments);var r=c(t),n=c(e),s=r.getFullYear()-n.getFullYear(),o=r.getMonth()-n.getMonth();return s*12+o}function Fe(t,e){l(2,arguments);var r=c(t),n=c(e);return r.getFullYear()-n.getFullYear()}function Q(t,e){var r=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return r<0?-1:r>0?1:r}function Ue(t,e){l(2,arguments);var r=c(t),n=c(e),s=Q(r,n),o=Math.abs(Ie(r,n));r.setDate(r.getDate()-s*o);var a=+(Q(r,n)===-s),i=s*(o-a);return i===0?0:i}function Y(t,e){return l(2,arguments),c(t).getTime()-c(e).getTime()}var X={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}},Ye="trunc";function H(t){return t?X[t]:X[Ye]}function He(t,e,r){l(2,arguments);var n=Y(t,e)/Pe;return H(r==null?void 0:r.roundingMethod)(n)}function Be(t,e,r){l(2,arguments);var n=Y(t,e)/je;return H(r==null?void 0:r.roundingMethod)(n)}function ze(t){l(1,arguments);var e=c(t);return e.setHours(23,59,59,999),e}function Ge(t){l(1,arguments);var e=c(t),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function Je(t){l(1,arguments);var e=c(t);return ze(e).getTime()===Ge(e).getTime()}function We(t,e){l(2,arguments);var r=c(t),n=c(e),s=v(r,n),o=Math.abs(Le(r,n)),a;if(o<1)a=0;else{r.getMonth()===1&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-s*o);var i=v(r,n)===-s;Je(c(t))&&o===1&&v(t,n)===1&&(i=!1),a=s*(o-Number(i))}return a===0?0:a}function Ve(t,e,r){l(2,arguments);var n=Y(t,e)/1e3;return H(r==null?void 0:r.roundingMethod)(n)}function Ke(t,e){l(2,arguments);var r=c(t),n=c(e),s=v(r,n),o=Math.abs(Fe(r,n));r.setFullYear(1584),n.setFullYear(1584);var a=v(r,n)===-s,i=s*(o-Number(a));return i===0?0:i}function Qe(t){l(1,arguments);var e=c(t.start),r=c(t.end);if(isNaN(e.getTime()))throw new RangeError("Start Date is invalid");if(isNaN(r.getTime()))throw new RangeError("End Date is invalid");var n={};n.years=Math.abs(Ke(r,e));var s=v(r,e),o=M(e,{years:s*n.years});n.months=Math.abs(We(r,o));var a=M(o,{months:s*n.months});n.days=Math.abs(Ue(r,a));var i=M(a,{days:s*n.days});n.hours=Math.abs(He(r,i));var f=M(i,{hours:s*n.hours});n.minutes=Math.abs(Be(r,f));var u=M(f,{minutes:s*n.minutes});return n.seconds=Math.abs(Ve(r,u)),n}class Z extends Error{constructor(e,r,n){const s=e.status||e.status===0?e.status:"",o=e.statusText||"",a=`${s} ${o}`.trim(),i=a?`status code ${a}`:"an unknown error";super(`Request failed with ${i}`),Object.defineProperty(this,"response",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name="HTTPError",this.response=e,this.request=r,this.options=n}}class pe extends Error{constructor(e){super("Request timed out"),Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name="TimeoutError",this.request=e}}const E=t=>t!==null&&typeof t=="object",N=(...t)=>{for(const e of t)if((!E(e)||Array.isArray(e))&&typeof e<"u")throw new TypeError("The `options` argument must be an object");return B({},...t)},me=(t={},e={})=>{const r=new globalThis.Headers(t),n=e instanceof globalThis.Headers,s=new globalThis.Headers(e);for(const[o,a]of s.entries())n&&a==="undefined"||a===void 0?r.delete(o):r.set(o,a);return r},B=(...t)=>{let e={},r={};for(const n of t)if(Array.isArray(n))Array.isArray(e)||(e=[]),e=[...e,...n];else if(E(n)){for(let[s,o]of Object.entries(n))E(o)&&s in e&&(o=B(e[s],o)),e={...e,[s]:o};E(n.headers)&&(r=me(r,n.headers),e.headers=r)}return e},Xe=(()=>{let t=!1,e=!1;const r=typeof globalThis.ReadableStream=="function",n=typeof globalThis.Request=="function";return r&&n&&(e=new globalThis.Request("https://a.com",{body:new globalThis.ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type")),t&&!e})(),Ze=typeof globalThis.AbortController=="function",et=typeof globalThis.ReadableStream=="function",tt=typeof globalThis.FormData=="function",ge=["get","post","put","patch","head","delete"],rt={json:"application/json",text:"text/*",formData:"multipart/form-data",arrayBuffer:"*/*",blob:"*/*"},k=2147483647,ye=Symbol("stop"),nt=t=>ge.includes(t)?t.toUpperCase():t,st=["get","put","head","delete","options","trace"],ot=[408,413,429,500,502,503,504],be=[413,429,503],ee={limit:2,methods:st,statusCodes:ot,afterStatusCodes:be,maxRetryAfter:Number.POSITIVE_INFINITY,backoffLimit:Number.POSITIVE_INFINITY},at=(t={})=>{if(typeof t=="number")return{...ee,limit:t};if(t.methods&&!Array.isArray(t.methods))throw new Error("retry.methods must be an array");if(t.statusCodes&&!Array.isArray(t.statusCodes))throw new Error("retry.statusCodes must be an array");return{...ee,...t,afterStatusCodes:be}};async function it(t,e,r){return new Promise((n,s)=>{const o=setTimeout(()=>{e&&e.abort(),s(new pe(t))},r.timeout);r.fetch(t).then(n).catch(s).then(()=>{clearTimeout(o)})})}const ut=!!globalThis.DOMException;function te(t){if(ut)return new DOMException((t==null?void 0:t.reason)??"The operation was aborted.","AbortError");const e=new Error((t==null?void 0:t.reason)??"The operation was aborted.");return e.name="AbortError",e}async function ct(t,{signal:e}){return new Promise((r,n)=>{if(e){if(e.aborted){n(te(e));return}e.addEventListener("abort",s,{once:!0})}function s(){n(te(e)),clearTimeout(o)}const o=setTimeout(()=>{e==null||e.removeEventListener("abort",s),r()},t)})}class x{static create(e,r){const n=new x(e,r),s=async()=>{if(n._options.timeout>k)throw new RangeError(`The \`timeout\` option cannot be greater than ${k}`);await Promise.resolve();let i=await n._fetch();for(const f of n._options.hooks.afterResponse){const u=await f(n.request,n._options,n._decorateResponse(i.clone()));u instanceof globalThis.Response&&(i=u)}if(n._decorateResponse(i),!i.ok&&n._options.throwHttpErrors){let f=new Z(i,n.request,n._options);for(const u of n._options.hooks.beforeError)f=await u(f);throw f}if(n._options.onDownloadProgress){if(typeof n._options.onDownloadProgress!="function")throw new TypeError("The `onDownloadProgress` option must be a function");if(!et)throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");return n._stream(i.clone(),n._options.onDownloadProgress)}return i},a=n._options.retry.methods.includes(n.request.method.toLowerCase())?n._retry(s):s();for(const[i,f]of Object.entries(rt))a[i]=async()=>{n.request.headers.set("accept",n.request.headers.get("accept")||f);const d=(await a).clone();if(i==="json"){if(d.status===204||(await d.clone().arrayBuffer()).byteLength===0)return"";if(r.parseJson)return r.parseJson(await d.text())}return d[i]()};return a}constructor(e,r={}){if(Object.defineProperty(this,"request",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"abortController",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_retryCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_input",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_options",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this._input=e,this._options={credentials:this._input.credentials||"same-origin",...r,headers:me(this._input.headers,r.headers),hooks:B({beforeRequest:[],beforeRetry:[],beforeError:[],afterResponse:[]},r.hooks),method:nt(r.method??this._input.method),prefixUrl:String(r.prefixUrl||""),retry:at(r.retry),throwHttpErrors:r.throwHttpErrors!==!1,timeout:typeof r.timeout>"u"?1e4:r.timeout,fetch:r.fetch??globalThis.fetch.bind(globalThis)},typeof this._input!="string"&&!(this._input instanceof URL||this._input instanceof globalThis.Request))throw new TypeError("`input` must be a string, URL, or Request");if(this._options.prefixUrl&&typeof this._input=="string"){if(this._input.startsWith("/"))throw new Error("`input` must not begin with a slash when using `prefixUrl`");this._options.prefixUrl.endsWith("/")||(this._options.prefixUrl+="/"),this._input=this._options.prefixUrl+this._input}if(Ze){if(this.abortController=new globalThis.AbortController,this._options.signal){const n=this._options.signal;this._options.signal.addEventListener("abort",()=>{this.abortController.abort(n.reason)})}this._options.signal=this.abortController.signal}if(Xe&&(this._options.duplex="half"),this.request=new globalThis.Request(this._input,this._options),this._options.searchParams){const s="?"+(typeof this._options.searchParams=="string"?this._options.searchParams.replace(/^\?/,""):new URLSearchParams(this._options.searchParams).toString()),o=this.request.url.replace(/(?:\?.*?)?(?=#|$)/,s);(tt&&this._options.body instanceof globalThis.FormData||this._options.body instanceof URLSearchParams)&&!(this._options.headers&&this._options.headers["content-type"])&&this.request.headers.delete("content-type"),this.request=new globalThis.Request(new globalThis.Request(o,{...this.request}),this._options)}this._options.json!==void 0&&(this._options.body=JSON.stringify(this._options.json),this.request.headers.set("content-type",this._options.headers.get("content-type")??"application/json"),this.request=new globalThis.Request(this.request,{body:this._options.body}))}_calculateRetryDelay(e){if(this._retryCount++,this._retryCount<this._options.retry.limit&&!(e instanceof pe)){if(e instanceof Z){if(!this._options.retry.statusCodes.includes(e.response.status))return 0;const n=e.response.headers.get("Retry-After");if(n&&this._options.retry.afterStatusCodes.includes(e.response.status)){let s=Number(n);return Number.isNaN(s)?s=Date.parse(n)-Date.now():s*=1e3,typeof this._options.retry.maxRetryAfter<"u"&&s>this._options.retry.maxRetryAfter?0:s}if(e.response.status===413)return 0}const r=.3;return Math.min(this._options.retry.backoffLimit,r*2**(this._retryCount-1)*1e3)}return 0}_decorateResponse(e){return this._options.parseJson&&(e.json=async()=>this._options.parseJson(await e.text())),e}async _retry(e){try{return await e()}catch(r){const n=Math.min(this._calculateRetryDelay(r),k);if(n!==0&&this._retryCount>0){await ct(n,{signal:this._options.signal});for(const s of this._options.hooks.beforeRetry)if(await s({request:this.request,options:this._options,error:r,retryCount:this._retryCount})===ye)return;return this._retry(e)}throw r}}async _fetch(){for(const e of this._options.hooks.beforeRequest){const r=await e(this.request,this._options);if(r instanceof Request){this.request=r;break}if(r instanceof Response)return r}return this._options.timeout===!1?this._options.fetch(this.request.clone()):it(this.request.clone(),this.abortController,this._options)}_stream(e,r){const n=Number(e.headers.get("content-length"))||0;let s=0;return e.status===204?(r&&r({percent:1,totalBytes:n,transferredBytes:s},new Uint8Array),new globalThis.Response(null,{status:e.status,statusText:e.statusText,headers:e.headers})):new globalThis.Response(new globalThis.ReadableStream({async start(o){const a=e.body.getReader();r&&r({percent:0,transferredBytes:0,totalBytes:n},new Uint8Array);async function i(){const{done:f,value:u}=await a.read();if(f){o.close();return}if(r){s+=u.byteLength;const d=n===0?0:s/n;r({percent:d,transferredBytes:s,totalBytes:n},u)}o.enqueue(u),await i()}await i()}}),{status:e.status,statusText:e.statusText,headers:e.headers})}}/*! MIT License © Sindre Sorhus */const F=t=>{const e=(r,n)=>x.create(r,N(t,n));for(const r of ge)e[r]=(n,s)=>x.create(n,N(t,s,{method:r}));return e.create=r=>F(N(r)),e.extend=r=>F(N(t,r)),e.stop=ye,e},ft=F(),z=ft,lt=async t=>{const e=new URL("https://www.googleapis.com/fitness/v1/users/me/sessions");return Object.entries({startTime:de(new Date,-3).toISOString(),endTime:new Date().toISOString(),activityType:"72"}).forEach(([n,s])=>e.searchParams.append(n,s)),(await z.get(e.toString(),{headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}}).json()).session.map(({startTimeMillis:n,endTimeMillis:s})=>[Number(n),Number(s)]).sort(([,n],[,s])=>s-n).at(0)},ht=async()=>{const t=localStorage.getItem("refresh_token");return t==null?void 0:(await z.post("https://accounts.google.com/o/oauth2/token",{json:{refresh_token:t,client_id:"821656003095-oai0k1ra18a7hcsrlj8vbuttt9gu36h2.apps.googleusercontent.com",client_secret:"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",redirect_uri:location.origin,grant_type:"refresh_token"}}).json()).access_token},dt=async()=>{const t=new URLSearchParams(window.location.search);if(t.has("code")){const r=t.get("code"),n=await z.post("https://accounts.google.com/o/oauth2/token",{json:{code:r,client_id:"821656003095-oai0k1ra18a7hcsrlj8vbuttt9gu36h2.apps.googleusercontent.com",client_secret:"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",redirect_uri:location.origin,grant_type:"authorization_code"}}).json();return localStorage.setItem("refresh_token",n.refresh_token),n.access_token}const e=new URL("https://accounts.google.com/o/oauth2/auth");Object.entries({access_type:"offline",client_id:"821656003095-oai0k1ra18a7hcsrlj8vbuttt9gu36h2.apps.googleusercontent.com",flowName:"GeneralOAuthFlow",prompt:"consent",redirect_uri:location.origin,response_type:"code",scope:"https://www.googleapis.com/auth/fitness.sleep.read"}).forEach(([r,n])=>e.searchParams.append(r,n)),location.href=e.toString()};function pt(t){let e,r;return{c(){e=I("div"),r=we(t[0]),j(e,"class","data svelte-1hp8t8l"),D(e,"sleep",t[1]),D(e,"nosig",t[2])},m(n,s){ae(n,e,s),oe(e,r)},p(n,[s]){s&1&&Te(r,n[0]),s&2&&D(e,"sleep",n[1]),s&4&&D(e,"nosig",n[2])},i:T,o:T,d(n){n&&U(e)}}}function mt(t,e,r){let n="",s=!1,o=!1;return Se(async()=>{const a=await ht()??await dt();if(a===void 0)throw new Error("Something wrong!");let i;const[f,u]=await lt(a);if(!isNaN(u))r(1,s=!1),i=new Date(u);else if(!isNaN(f))r(1,s=!0),i=new Date(f);else{r(0,n="NO SIGNAL"),r(2,o=!0);return}const d=()=>{const h=Qe({start:i,end:new Date}),g=`${h.hours+h.days*24}`.padStart(2,"0"),y=`${h.minutes}`.padStart(2,"0"),C=`${h.seconds}`.padStart(2,"0");r(0,n=`${g}:${y}:${C}`)};setTimeout(()=>{d(),setInterval(d,1e3)},new Date().getTime()%1e3),setTimeout(()=>location.reload(),60*1e3*10)}),[n,s,o]}class gt extends he{constructor(e){super(),le(this,e,mt,pt,se,{})}}function yt(t){let e,r,n,s;return n=new gt({}),{c(){e=I("main"),r=I("div"),Ae(n.$$.fragment),j(r,"class","wrapper"),j(e,"class","svelte-1hrnjw9")},m(o,a){ae(o,e,a),oe(e,r),ce(n,r,null),s=!0},p:T,i(o){s||(ue(n.$$.fragment,o),s=!0)},o(o){$e(n.$$.fragment,o),s=!1},d(o){o&&U(e),fe(n)}}}class bt extends he{constructor(e){super(),le(this,e,null,yt,se,{})}}new bt({target:document.getElementById("app")});
