(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"6tYh":function(e,t,r){(function(t){var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of l(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?o(s(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),y=(e,t,r)=>(((e,t,r)=>{t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(d,{createReactPlayer:()=>E}),e.exports=(n=d,c(a({},"__esModule",{value:!0}),n));var f=p(r("q1tI")),h=p(r("PE4B")),b=p(r("Wwog")),m=p(r("bmMU")),P=r("QXAm"),g=r("tbWI"),w=p(r("q+qS"));const v=(0,g.lazy)((()=>r.e(50).then(r.t.bind(null,"fflM",7)))),O="undefined"!==typeof window&&window.document&&"undefined"!==typeof document,k="undefined"!==typeof t&&t.window&&t.window.document,_=Object.keys(P.propTypes),j=O||k?f.Suspense:()=>null,S=[],E=(e,t)=>{var r;return r=class extends f.Component{constructor(){super(...arguments),y(this,"state",{showPreview:!!this.props.light}),y(this,"references",{wrapper:e=>{this.wrapper=e},player:e=>{this.player=e}}),y(this,"handleClickPreview",(e=>{this.setState({showPreview:!1}),this.props.onClickPreview(e)})),y(this,"showPreview",(()=>{this.setState({showPreview:!0})})),y(this,"getDuration",(()=>this.player?this.player.getDuration():null)),y(this,"getCurrentTime",(()=>this.player?this.player.getCurrentTime():null)),y(this,"getSecondsLoaded",(()=>this.player?this.player.getSecondsLoaded():null)),y(this,"getInternalPlayer",((e="player")=>this.player?this.player.getInternalPlayer(e):null)),y(this,"seekTo",((e,t,r)=>{if(!this.player)return null;this.player.seekTo(e,t,r)})),y(this,"handleReady",(()=>{this.props.onReady(this)})),y(this,"getActivePlayer",(0,b.default)((r=>{for(const t of[...S,...e])if(t.canPlay(r))return t;return t||null}))),y(this,"getConfig",(0,b.default)(((e,t)=>{const{config:r}=this.props;return h.default.all([P.defaultProps.config,P.defaultProps.config[t]||{},r,r[t]||{}])}))),y(this,"getAttributes",(0,b.default)((e=>(0,g.omit)(this.props,_)))),y(this,"renderActivePlayer",(e=>{if(!e)return null;const t=this.getActivePlayer(e);if(!t)return null;const r=this.getConfig(e,t.key);return f.default.createElement(w.default,{...this.props,key:t.key,ref:this.references.player,config:r,activePlayer:t.lazyPlayer||t,onReady:this.handleReady})}))}shouldComponentUpdate(e,t){return!(0,m.default)(this.props,e)||!(0,m.default)(this.state,t)}componentDidUpdate(e){const{light:t}=this.props;!e.light&&t&&this.setState({showPreview:!0}),e.light&&!t&&this.setState({showPreview:!1})}renderPreview(e){if(!e)return null;const{light:t,playIcon:r,previewTabIndex:n,oEmbedUrl:o,previewAriaLabel:a}=this.props;return f.default.createElement(v,{url:e,light:t,playIcon:r,previewTabIndex:n,previewAriaLabel:a,oEmbedUrl:o,onClick:this.handleClickPreview})}render(){const{url:e,style:t,width:r,height:n,fallback:o,wrapper:a}=this.props,{showPreview:i}=this.state,l=this.getAttributes(e),s="string"===typeof a?this.references.wrapper:void 0;return f.default.createElement(a,{ref:s,style:{...t,width:r,height:n},...l},f.default.createElement(j,{fallback:o},i?this.renderPreview(e):this.renderActivePlayer(e)))}},y(r,"displayName","ReactPlayer"),y(r,"propTypes",P.propTypes),y(r,"defaultProps",P.defaultProps),y(r,"addCustomPlayer",(e=>{S.push(e)})),y(r,"removeCustomPlayers",(()=>{S.length=0})),y(r,"canPlay",(t=>{for(const r of[...S,...e])if(r.canPlay(t))return!0;return!1})),y(r,"canEnablePIP",(t=>{for(const r of[...S,...e])if(r.canEnablePIP&&r.canEnablePIP(t))return!0;return!1})),r}}).call(this,r("ntbh"))},"7l9Y":function(e,t,r){var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of l(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(p,{default:()=>h}),e.exports=(n=p,c(a({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?o(s(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)))(r("zuFh")),d=r("6tYh");const f=y.default[y.default.length-1];var h=(0,d.createReactPlayer)(y.default,f)},MuZe:function(e,t){function r(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?r:n)(i,o),i.onload||r(i,o),a.appendChild(i)}},PE4B:function(e,t,r){"use strict";var n=function(e){return function(e){return!!e&&"object"===typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===o}(e)}(e)};var o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){return!1!==t.clone&&t.isMergeableObject(e)?c((r=e,Array.isArray(r)?[]:{}),e,t):e;var r}function i(e,t,r){return e.concat(t).map((function(e){return a(e,r)}))}function l(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return Object.propertyIsEnumerable.call(e,t)})):[]}(e))}function s(e,t){try{return t in e}catch(r){return!1}}function u(e,t,r){var n={};return r.isMergeableObject(e)&&l(e).forEach((function(t){n[t]=a(e[t],r)})),l(t).forEach((function(o){(function(e,t){return s(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(s(e,o)&&r.isMergeableObject(t[o])?n[o]=function(e,t){if(!t.customMerge)return c;var r=t.customMerge(e);return"function"===typeof r?r:c}(o,r)(e[o],t[o],r):n[o]=a(t[o],r))})),n}function c(e,t,r){(r=r||{}).arrayMerge=r.arrayMerge||i,r.isMergeableObject=r.isMergeableObject||n,r.cloneUnlessOtherwiseSpecified=a;var o=Array.isArray(t);return o===Array.isArray(e)?o?r.arrayMerge(e,t,r):u(e,t,r):a(t,r)}c.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,r){return c(e,r,t)}),{})};var p=c;e.exports=p},QXAm:function(e,t,r){var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of l(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(p,{defaultProps:()=>_,propTypes:()=>O}),e.exports=(n=p,c(a({},"__esModule",{value:!0}),n));var y=((e,t,r)=>(r=null!=e?o(s(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)))(r("17x9"));const{string:d,bool:f,number:h,array:b,oneOfType:m,shape:P,object:g,func:w,node:v}=y.default,O={url:m([d,b,g]),playing:f,loop:f,controls:f,volume:h,muted:f,playbackRate:h,width:m([d,h]),height:m([d,h]),style:g,progressInterval:h,playsinline:f,pip:f,stopOnUnmount:f,light:m([f,d,g]),playIcon:v,previewTabIndex:h,previewAriaLabel:d,fallback:v,oEmbedUrl:d,wrapper:m([d,w,P({render:w.isRequired})]),config:P({soundcloud:P({options:g}),youtube:P({playerVars:g,embedOptions:g,onUnstarted:w}),facebook:P({appId:d,version:d,playerId:d,attributes:g}),dailymotion:P({params:g}),vimeo:P({playerOptions:g,title:d}),mux:P({attributes:g,version:d}),file:P({attributes:g,tracks:b,forceVideo:f,forceAudio:f,forceHLS:f,forceSafariHLS:f,forceDisableHls:f,forceDASH:f,forceFLV:f,hlsOptions:g,hlsVersion:d,dashVersion:d,flvVersion:d}),wistia:P({options:g,playerId:d,customControls:b}),mixcloud:P({options:g}),twitch:P({options:g,playerId:d}),vidyard:P({options:g})}),onReady:w,onStart:w,onPlay:w,onPause:w,onBuffer:w,onBufferEnd:w,onEnded:w,onError:w,onDuration:w,onSeek:w,onPlaybackRateChange:w,onPlaybackQualityChange:w,onProgress:w,onClickPreview:w,onEnablePIP:w,onDisablePIP:w},k=()=>{},_={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:k},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:k,onStart:k,onPlay:k,onPause:k,onBuffer:k,onBufferEnd:k,onEnded:k,onError:k,onDuration:k,onSeek:k,onPlaybackRateChange:k,onPlaybackQualityChange:k,onProgress:k,onClickPreview:k,onEnablePIP:k,onDisablePIP:k}},Wwog:function(e,t,r){"use strict";r.r(t);var n=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function o(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(o=e[r],a=t[r],!(o===a||n(o)&&n(a)))return!1;var o,a;return!0}t.default=function(e,t){var r;void 0===t&&(t=o);var n,a=[],i=!1;return function(){for(var o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];return i&&r===this&&t(o,a)||(n=e.apply(this,o),i=!0,r=this,a=o),n}}},bmMU:function(e,t){var r="undefined"!==typeof Element,n="function"===typeof Map,o="function"===typeof Set,a="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var l,s,u,c;if(Array.isArray(e)){if((l=e.length)!=t.length)return!1;for(s=l;0!==s--;)if(!i(e[s],t[s]))return!1;return!0}if(n&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(c=e.entries();!(s=c.next()).done;)if(!t.has(s.value[0]))return!1;for(c=e.entries();!(s=c.next()).done;)if(!i(s.value[1],t.get(s.value[0])))return!1;return!0}if(o&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(c=e.entries();!(s=c.next()).done;)if(!t.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if((l=e.length)!=t.length)return!1;for(s=l;0!==s--;)if(e[s]!==t[s])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"===typeof e.valueOf&&"function"===typeof t.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&"function"===typeof e.toString&&"function"===typeof t.toString)return e.toString()===t.toString();if((l=(u=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(s=l;0!==s--;)if(!Object.prototype.hasOwnProperty.call(t,u[s]))return!1;if(r&&e instanceof Element)return!1;for(s=l;0!==s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!i(e[u[s]],t[u[s]]))return!1;return!0}return e!==e&&t!==t}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},mzdp:function(e,t,r){var n,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,s={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(s,{AUDIO_EXTENSIONS:()=>_,DASH_EXTENSIONS:()=>E,FLV_EXTENSIONS:()=>T,HLS_EXTENSIONS:()=>S,MATCH_URL_DAILYMOTION:()=>w,MATCH_URL_FACEBOOK:()=>f,MATCH_URL_FACEBOOK_WATCH:()=>h,MATCH_URL_KALTURA:()=>k,MATCH_URL_MIXCLOUD:()=>v,MATCH_URL_MUX:()=>d,MATCH_URL_SOUNDCLOUD:()=>p,MATCH_URL_STREAMABLE:()=>b,MATCH_URL_TWITCH_CHANNEL:()=>g,MATCH_URL_TWITCH_VIDEO:()=>P,MATCH_URL_VIDYARD:()=>O,MATCH_URL_VIMEO:()=>y,MATCH_URL_WISTIA:()=>m,MATCH_URL_YOUTUBE:()=>c,VIDEO_EXTENSIONS:()=>j,canPlay:()=>A}),e.exports=(n=s,((e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of i(t))l.call(e,s)||s===r||o(e,s,{get:()=>t[s],enumerable:!(n=a(t,s))||n.enumerable});return e})(o({},"__esModule",{value:!0}),n));var u=r("tbWI");const c=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,p=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,y=/vimeo\.com\/(?!progressive_redirect).+/,d=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,f=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,h=/^https?:\/\/fb\.watch\/.+$/,b=/streamable\.com\/([a-z0-9]+)$/,m=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,P=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,g=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,w=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,v=/mixcloud\.com\/([^/]+\/[^/]+)/,O=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,k=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,_=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,j=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,S=/\.(m3u8)($|\?)/i,E=/\.(mpd)($|\?)/i,T=/\.(flv)($|\?)/i,I=e=>{if(e instanceof Array){for(const t of e){if("string"===typeof t&&I(t))return!0;if(I(t.src))return!0}return!1}return!(!(0,u.isMediaStream)(e)&&!(0,u.isBlobUrl)(e))||(_.test(e)||j.test(e)||S.test(e)||E.test(e)||T.test(e))},A={youtube:e=>e instanceof Array?e.every((e=>c.test(e))):c.test(e),soundcloud:e=>p.test(e)&&!_.test(e),vimeo:e=>y.test(e)&&!j.test(e)&&!S.test(e),mux:e=>d.test(e),facebook:e=>f.test(e)||h.test(e),streamable:e=>b.test(e),wistia:e=>m.test(e),twitch:e=>P.test(e)||g.test(e),dailymotion:e=>w.test(e),mixcloud:e=>v.test(e),vidyard:e=>O.test(e),kaltura:e=>k.test(e),file:I}},"q+qS":function(e,t,r){var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of l(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?o(s(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),y=(e,t,r)=>(((e,t,r)=>{t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>P}),e.exports=(n=d,c(a({},"__esModule",{value:!0}),n));var f=p(r("q1tI")),h=p(r("bmMU")),b=r("QXAm"),m=r("tbWI");class P extends f.Component{constructor(){super(...arguments),y(this,"mounted",!1),y(this,"isReady",!1),y(this,"isPlaying",!1),y(this,"isLoading",!0),y(this,"loadOnReady",null),y(this,"startOnPlay",!0),y(this,"seekOnPlay",null),y(this,"onDurationCalled",!1),y(this,"handlePlayerMount",(e=>{this.player||(this.player=e,this.player.load(this.props.url)),this.progress()})),y(this,"getInternalPlayer",(e=>this.player?this.player[e]:null)),y(this,"progress",(()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,t=this.getSecondsLoaded(),r=this.getDuration();if(r){const n={playedSeconds:e,played:e/r};null!==t&&(n.loadedSeconds=t,n.loaded=t/r),n.playedSeconds===this.prevPlayed&&n.loadedSeconds===this.prevLoaded||this.props.onProgress(n),this.prevPlayed=n.playedSeconds,this.prevLoaded=n.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)})),y(this,"handleReady",(()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:t,volume:r,muted:n}=this.props;e(),n||null===r||this.player.setVolume(r),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):t&&this.player.play(),this.handleDurationCheck()})),y(this,"handlePlay",(()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:t,playbackRate:r}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&1!==r&&this.player.setPlaybackRate(r),e(),this.startOnPlay=!1),t(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()})),y(this,"handlePause",(e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)})),y(this,"handleEnded",(()=>{const{activePlayer:e,loop:t,onEnded:r}=this.props;e.loopOnEnded&&t&&this.seekTo(0),t||(this.isPlaying=!1,r())})),y(this,"handleError",((...e)=>{this.isLoading=!1,this.props.onError(...e)})),y(this,"handleDurationCheck",(()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)})),y(this,"handleLoaded",(()=>{this.isLoading=!1}))}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:t,playing:r,volume:n,muted:o,playbackRate:a,pip:i,loop:l,activePlayer:s,disableDeferredLoading:u}=this.props;if(!(0,h.default)(e.url,t)){if(this.isLoading&&!s.forceLoad&&!u&&!(0,m.isMediaStream)(t))return console.warn(`ReactPlayer: the attempt to load ${t} is being deferred until the player has loaded`),void(this.loadOnReady=t);this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(t,this.isReady)}e.playing||!r||this.isPlaying||this.player.play(),e.playing&&!r&&this.isPlaying&&this.player.pause(),!e.pip&&i&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!i&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==n&&null!==n&&this.player.setVolume(n),e.muted!==o&&(o?this.player.mute():(this.player.unmute(),null!==n&&setTimeout((()=>this.player.setVolume(n))))),e.playbackRate!==a&&this.player.setPlaybackRate&&this.player.setPlaybackRate(a),e.loop!==l&&this.player.setLoop&&this.player.setLoop(l)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,t,r){if(!this.isReady)return void(0!==e&&(this.seekOnPlay=e,setTimeout((()=>{this.seekOnPlay=null}),5e3)));if(t?"fraction"===t:e>0&&e<1){const t=this.player.getDuration();return t?void this.player.seekTo(t*e,r):void console.warn("ReactPlayer: could not seek using fraction \u2013\xa0duration not yet available")}this.player.seekTo(e,r)}render(){const e=this.props.activePlayer;return e?f.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}y(P,"displayName","Player"),y(P,"propTypes",b.propTypes),y(P,"defaultProps",b.defaultProps)},tbWI:function(e,t,r){var n,o=Object.create,a=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,s=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of l(t))u.call(e,o)||o===r||a(e,o,{get:()=>t[o],enumerable:!(n=i(t,o))||n.enumerable});return e},p=(e,t,r)=>(r=null!=e?o(s(e)):{},c(!t&&e&&e.__esModule?r:a(r,"default",{value:e,enumerable:!0}),e)),y={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(y,{callPlayer:()=>M,getConfig:()=>I,getSDK:()=>T,isBlobUrl:()=>C,isMediaStream:()=>R,lazy:()=>b,omit:()=>A,parseEndTime:()=>k,parseStartTime:()=>O,queryString:()=>j,randomString:()=>_,supportsWebKitPresentationMode:()=>L}),e.exports=(n=y,c(a({},"__esModule",{value:!0}),n));var d=p(r("q1tI")),f=p(r("MuZe")),h=p(r("PE4B"));const b=e=>d.default.lazy((async()=>{const t=await e();return"function"===typeof t.default?t:t.default})),m=/[?&#](?:start|t)=([0-9hms]+)/,P=/[?&#]end=([0-9hms]+)/,g=/(\d+)(h|m|s)/g,w=/^\d+$/;function v(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const e=r[1];if(e.match(g))return function(e){let t=0,r=g.exec(e);for(;null!==r;){const[,n,o]=r;"h"===o&&(t+=60*parseInt(n,10)*60),"m"===o&&(t+=60*parseInt(n,10)),"s"===o&&(t+=parseInt(n,10)),r=g.exec(e)}return t}(e);if(w.test(e))return parseInt(e)}}function O(e){return v(e,m)}function k(e){return v(e,P)}function _(){return Math.random().toString(36).substr(2,5)}function j(e){return Object.keys(e).map((t=>`${t}=${e[t]}`)).join("&")}function S(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const E={},T=function(e){0;return e}((function(e,t,r=null,n=(()=>!0),o=f.default){const a=S(t);return a&&n(a)?Promise.resolve(a):new Promise(((n,a)=>{if(E[e])return void E[e].push({resolve:n,reject:a});E[e]=[{resolve:n,reject:a}];const i=t=>{E[e].forEach((e=>e.resolve(t)))};if(r){const e=window[r];window[r]=function(){e&&e(),i(S(t))}}o(e,(n=>{n?(E[e].forEach((e=>e.reject(n))),E[e]=null):r||i(S(t))}))}))}));function I(e,t){return(0,h.default)(t.config,e.config)}function A(e,...t){const r=[].concat(...t),n={},o=Object.keys(e);for(const a of o)-1===r.indexOf(a)&&(n[a]=e[a]);return n}function M(e,...t){if(!this.player||!this.player[e]){let t=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c \u2013 `;return this.player?this.player[e]||(t+="The method was not available"):t+="The player was not available",console.warn(t,"font-weight: bold",""),null}return this.player[e](...t)}function R(e){return"undefined"!==typeof window&&"undefined"!==typeof window.MediaStream&&e instanceof window.MediaStream}function C(e){return/^blob:/.test(e)}function L(e=document.createElement("video")){const t=!1===/iPhone|iPod/.test(navigator.userAgent);return e.webkitSupportsPresentationMode&&"function"===typeof e.webkitSetPresentationMode&&t}},zuFh:function(e,t,r){Object.create;var n,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=(Object.getPrototypeOf,Object.prototype.hasOwnProperty),s=(e,t,r,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of i(t))l.call(e,s)||s===r||o(e,s,{get:()=>t[s],enumerable:!(n=a(t,s))||n.enumerable});return e},u={};((e,t)=>{for(var r in t)o(e,r,{get:t[r],enumerable:!0})})(u,{default:()=>y}),e.exports=(n=u,s(o({},"__esModule",{value:!0}),n));var c=r("tbWI"),p=r("mzdp"),y=[{key:"youtube",name:"YouTube",canPlay:p.canPlay.youtube,lazyPlayer:(0,c.lazy)((()=>r.e(57).then(r.t.bind(null,"/6c9",7))))},{key:"soundcloud",name:"SoundCloud",canPlay:p.canPlay.soundcloud,lazyPlayer:(0,c.lazy)((()=>r.e(51).then(r.t.bind(null,"xkkJ",7))))},{key:"vimeo",name:"Vimeo",canPlay:p.canPlay.vimeo,lazyPlayer:(0,c.lazy)((()=>r.e(55).then(r.t.bind(null,"LLoX",7))))},{key:"mux",name:"Mux",canPlay:p.canPlay.mux,lazyPlayer:(0,c.lazy)((()=>r.e(49).then(r.t.bind(null,"RIEO",7))))},{key:"facebook",name:"Facebook",canPlay:p.canPlay.facebook,lazyPlayer:(0,c.lazy)((()=>r.e(45).then(r.t.bind(null,"f77o",7))))},{key:"streamable",name:"Streamable",canPlay:p.canPlay.streamable,lazyPlayer:(0,c.lazy)((()=>r.e(52).then(r.t.bind(null,"GdC5",7))))},{key:"wistia",name:"Wistia",canPlay:p.canPlay.wistia,lazyPlayer:(0,c.lazy)((()=>r.e(56).then(r.t.bind(null,"W4/P",7))))},{key:"twitch",name:"Twitch",canPlay:p.canPlay.twitch,lazyPlayer:(0,c.lazy)((()=>r.e(53).then(r.t.bind(null,"bA2t",7))))},{key:"dailymotion",name:"DailyMotion",canPlay:p.canPlay.dailymotion,lazyPlayer:(0,c.lazy)((()=>r.e(44).then(r.t.bind(null,"Rom6",7))))},{key:"mixcloud",name:"Mixcloud",canPlay:p.canPlay.mixcloud,lazyPlayer:(0,c.lazy)((()=>r.e(48).then(r.t.bind(null,"5Cgt",7))))},{key:"vidyard",name:"Vidyard",canPlay:p.canPlay.vidyard,lazyPlayer:(0,c.lazy)((()=>r.e(54).then(r.t.bind(null,"fPw2",7))))},{key:"kaltura",name:"Kaltura",canPlay:p.canPlay.kaltura,lazyPlayer:(0,c.lazy)((()=>r.e(47).then(r.t.bind(null,"BgVF",7))))},{key:"file",name:"FilePlayer",canPlay:p.canPlay.file,canEnablePIP:e=>p.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,c.supportsWebKitPresentationMode)())&&!p.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,c.lazy)((()=>r.e(46).then(r.t.bind(null,"bq/u",7))))}]}}]);