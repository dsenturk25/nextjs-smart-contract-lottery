(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(94188)}])},96301:function(e,t,n){"use strict";let a=n(63021),i=n(37917);e.exports={abi:a,contractAddresses:i}},19749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,i=n(92648).Z,r=n(91598).Z,s=n(17273).Z,o=r(n(67294)),u=i(n(83121)),l=n(2675),c=n(10139),d=n(28730);n(57238);var p=i(n(23078));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function y(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,n,i,r,s,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&s(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let o=!1,u=!1;i.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>o,isPropagationStopped:()=>u,persist:()=>{},preventDefault:()=>{o=!0,t.preventDefault()},stopPropagation:()=>{u=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let h=o.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:r,qualityInt:u,className:l,imgStyle:c,blurStyle:d,isLazy:p,fill:f,placeholder:m,loading:y,srcString:h,config:b,unoptimized:w,loader:v,onLoadRef:x,onLoadingCompleteRef:E,setBlurComplete:j,setShowAltText:S,onLoad:_,onError:C}=e,N=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return y=p?"lazy":y,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},N,n,{width:r,height:i,decoding:"async","data-nimg":f?"fill":"1",className:l,loading:y,style:a({},c,d),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&g(e,h,m,x,E,j,w))},[h,m,x,E,j,C,w,t]),onLoad:e=>{let t=e.currentTarget;g(t,h,m,x,E,j,w)},onError:e=>{S(!0),"blur"===m&&j(!0),C&&C(e)}})))}),b=o.forwardRef((e,t)=>{let n,i;var r,{src:g,sizes:b,unoptimized:w=!1,priority:v=!1,loading:x,className:E,quality:j,width:S,height:_,fill:C,style:N,onLoad:R,onLoadingComplete:k,placeholder:O="empty",blurDataURL:z,layout:P,objectFit:A,objectPosition:F,lazyBoundary:M,lazyRoot:I}=e,L=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=o.useContext(d.ImageConfigContext),W=o.useMemo(()=>{let e=f||D||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:n})},[D]),T=L,B=T.loader||p.default;delete T.loader;let q="__next_img_default"in B;if(q){if("custom"===W.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let J=B;B=e=>{let{config:t}=e,n=s(e,["config"]);return J(n)}}if(P){"fill"===P&&(C=!0);let U={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];U&&(N=a({},N,U));let V={responsive:"100vw",fill:"100vw"}[P];V&&!b&&(b=V)}let X="",G=y(S),H=y(_);if("object"==typeof(r=g)&&(m(r)||void 0!==r.src)){let Z=m(g)?g.default:g;if(!Z.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Z)));if(!Z.height||!Z.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Z)));if(n=Z.blurWidth,i=Z.blurHeight,z=z||Z.blurDataURL,X=Z.src,!C){if(G||H){if(G&&!H){let K=G/Z.width;H=Math.round(Z.height*K)}else if(!G&&H){let Q=H/Z.height;G=Math.round(Z.width*Q)}}else G=Z.width,H=Z.height}}let $=!v&&("lazy"===x||void 0===x);((g="string"==typeof g?g:X).startsWith("data:")||g.startsWith("blob:"))&&(w=!0,$=!1),W.unoptimized&&(w=!0),q&&g.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(w=!0);let[Y,ee]=o.useState(!1),[et,en]=o.useState(!1),ea=y(j),ei=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:F}:{},et?{}:{color:"transparent"},N),er="blur"===O&&z&&!Y?{backgroundSize:ei.objectFit||"cover",backgroundPosition:ei.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:G,heightInt:H,blurWidth:n,blurHeight:i,blurDataURL:z}),'")')}:{},es=function(e){let{config:t,src:n,unoptimized:a,width:i,quality:r,sizes:s,loader:o}=e;if(a)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:l}=function(e,t,n){let{deviceSizes:a,allSizes:i}=e;if(n){let r=/(^|\s)(1?\d?\d)vw/g,s=[];for(let o;o=r.exec(n);o)s.push(parseInt(o[2]));if(s.length){let u=.01*Math.min(...s);return{widths:i.filter(e=>e>=a[0]*u),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let l=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:l,kind:"x"}}(t,i,s),c=u.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:u.map((e,a)=>"".concat(o({config:t,src:n,quality:r,width:e})," ").concat("w"===l?e:a+1).concat(l)).join(", "),src:o({config:t,src:n,quality:r,width:u[c]})}}({config:W,src:g,unoptimized:w,width:G,quality:ea,sizes:b,loader:B}),eo=g,eu={imageSrcSet:es.srcSet,imageSizes:es.sizes,crossOrigin:T.crossOrigin},el=o.useRef(R);o.useEffect(()=>{el.current=R},[R]);let ec=o.useRef(k);o.useEffect(()=>{ec.current=k},[k]);let ed=a({isLazy:$,imgAttributes:es,heightInt:H,widthInt:G,qualityInt:ea,className:E,imgStyle:ei,blurStyle:er,loading:x,config:W,fill:C,unoptimized:w,placeholder:O,loader:B,srcString:eo,onLoadRef:el,onLoadingCompleteRef:ec,setBlurComplete:ee,setShowAltText:en},T);return o.default.createElement(o.default.Fragment,null,o.default.createElement(h,Object.assign({},ed,{ref:t})),v?o.default.createElement(u.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+es.src+es.srcSet+es.sizes,rel:"preload",as:"image",href:es.srcSet?void 0:es.src},eu))):null)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:a,blurHeight:i,blurDataURL:r}=e,s=a||t,o=i||n,u=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&i?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(r,"'/%3E%3C/svg%3E")}},23078:function(e,t){"use strict";function n(e){let{config:t,src:n,width:a,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(a,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},94188:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(85893),i=n(9008),r=n.n(i);n(25675);var s=n(41942);function o(){return(0,a.jsxs)("div",{className:"flex flex-row justify-between p-10 border-y-2",children:[(0,a.jsx)("h1",{className:"text-2xl",children:" Decentralized Lottery "}),(0,a.jsx)(s.cg,{moralisAuth:!1})]})}var u=n(83078),l=n(96301),c=n(67294),d=n(241),p=n(77294),f=n(35553);function m(){let{chainId:e,isWeb3Enabled:t}=(0,u.Nr)(),n=parseInt(e),i=n in l.contractAddresses?l.contractAddresses[n][0]:null,[r,o]=(0,c.useState)("0"),[m,y]=(0,c.useState)("0"),[g,h]=(0,c.useState)("0"),b=(0,s.aa)(),{runContractFunction:w,isLoading:v,isFetching:x}=(0,u.JX)({abi:l.abi,contractAddress:i,params:{},functionName:"enterRaffle",msgValue:r}),{runContractFunction:E}=(0,u.JX)({abi:l.abi,contractAddress:i,params:{},functionName:"getEntranceFee"}),{runContractFunction:j}=(0,u.JX)({abi:l.abi,contractAddress:i,params:{},functionName:"getNumberOfPlayers"}),{runContractFunction:S}=(0,u.JX)({abi:l.abi,contractAddress:i,params:{},functionName:"getRecentWinner"}),_=async()=>{let e=(await E()).toString(),t=(await j()).toString(),n=(await S()).toString();o(e),y(t),h(n)};(0,c.useEffect)(()=>{t&&(R(),_())},[t]);let C=async e=>{await e.wait(1),N(e),_()},N=()=>{b({type:"info",message:"Transaction complete!",title:"Tx Notification",position:"topR",icon:"\uD83D\uDD14"})},R=async()=>{let e=new d.Q(window.ethereum),t=new p.CH(i,l.abi,e);await new Promise((e,n)=>{try{t.once("winnerPicked",()=>{_(),e()})}catch(a){n(a)}})};return(0,a.jsxs)("div",{className:"p-10",children:[(0,a.jsx)("div",{children:"Hello from lottery entrance!"}),n in l.contractAddresses?(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"p-2 bg-blue-500 rounded text-white hover:bg-blue-600 px-5",onClick:async()=>{await w({onSuccess:C,onError:e=>console.log(e)})},children:v||x?(0,a.jsx)("div",{className:"animate-spin h-6 w-6 border-b-2 rounded-full"}):(0,a.jsx)("div",{children:"Enter Raffle"})}),(0,a.jsxs)("div",{children:["Entrance fee: ",f.dF(r)," ETH"]}),(0,a.jsxs)("div",{children:["Number of players: ",m]}),(0,a.jsxs)("div",{children:["Recent winner address: ",g]})]}):(0,a.jsx)("div",{children:"Network not supported"})]})}function y(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Smart Contract Lottery"}),(0,a.jsx)("meta",{name:"description",content:"Our smart contract lottery"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(o,{}),(0,a.jsx)(m,{})]})}},9008:function(e,t,n){e.exports=n(83121)},25675:function(e,t,n){n(19749)},63021:function(e){"use strict";e.exports=JSON.parse('[{"type":"constructor","payable":false,"inputs":[{"type":"address","name":"VRFCoordinatorV2"},{"type":"uint256","name":"entranceFee"},{"type":"bytes32","name":"gasLane"},{"type":"uint64","name":"subscriptionId"},{"type":"uint32","name":"callbackGasLimit"},{"type":"uint256","name":"interval"}]},{"type":"error","name":"OnlyCoordinatorCanFulfill","inputs":[{"type":"address","name":"have"},{"type":"address","name":"want"}]},{"type":"error","name":"Raffle_TransferFailed","inputs":[]},{"type":"error","name":"Raffle__NotEnoughEthEntered","inputs":[]},{"type":"error","name":"Raffle__UpKeepNotNeeded","inputs":[{"type":"uint256","name":"currentBalance"},{"type":"uint256","name":"playersLength"},{"type":"uint256","name":"raffleState"}]},{"type":"error","name":"Raffle__notOpen","inputs":[]},{"type":"event","anonymous":false,"name":"raffleEnter","inputs":[{"type":"address","name":"player","indexed":true}]},{"type":"event","anonymous":false,"name":"requestedRaffleWinner","inputs":[{"type":"uint256","name":"requestId","indexed":true}]},{"type":"event","anonymous":false,"name":"winnerPicked","inputs":[{"type":"address","name":"winner","indexed":true},{"type":"uint256","name":"indexOfWinner","indexed":true}]},{"type":"function","name":"checkUpkeep","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[{"type":"bool","name":"upkeepNeeded"},{"type":"bytes"}]},{"type":"function","name":"enterRaffle","constant":false,"stateMutability":"payable","payable":true,"gas":29000000,"inputs":[],"outputs":[]},{"type":"function","name":"getEntranceFee","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getInterval","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getLatestTimeStamp","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumWords","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getNumberOfPlayers","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"getPlayer","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"index"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getRaffleState","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint8"}]},{"type":"function","name":"getRecentWinner","constant":true,"stateMutability":"view","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"address"}]},{"type":"function","name":"getRequestConfirmations","constant":true,"stateMutability":"pure","payable":false,"gas":29000000,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"performUpkeep","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"bytes"}],"outputs":[]},{"type":"function","name":"rawFulfillRandomWords","constant":false,"payable":false,"gas":29000000,"inputs":[{"type":"uint256","name":"requestId"},{"type":"uint256[]","name":"randomWords"}],"outputs":[]}]')},37917:function(e){"use strict";e.exports=JSON.parse('{"31337":["0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"]}')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);