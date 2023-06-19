(function(){"use strict";var e={931:function(e,t,r){var a=r(963),o=r(252),n=r(577);const i=(0,o._)("i",{"data-feather":"chevron-up"},null,-1);function l(e,t,r,l,d,s){const c=(0,o.up)("AppHeader"),m=(0,o.up)("router-view"),u=(0,o.up)("back-to-top"),p=(0,o.up)("AppFooter");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([e.appTheme,"pt-0.5"])},[(0,o.Wm)(c),(0,o.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{theme:e.appTheme},null,8,["theme"])])),_:1}),(0,o.Wm)(u,{visibleoffset:"500",right:"30px",bottom:"20px",class:"shadow-lg"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(p)],2)}var d=r(508),s=r.n(d),c=r.p+"img/logo-light.892477ef.png",m=r.p+"img/logo-dark.94de880a.png";const u={id:"nav",class:"sm:container sm:mx-auto"},p={class:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"},g={class:"flex justify-between items-center px-4 sm:px-0"},h={key:0,src:c,class:"w-28",alt:"Dark Logo"},f={key:1,src:m,class:"w-28",alt:"Light Logo"},b={class:"sm:hidden"},y={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"},x={key:0,"fill-rule":"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z","clip-rule":"evenodd"},v={key:1,"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"},k={class:"hidden sm:flex justify-between items-center flex-col md:flex-row"},w={class:"hidden md:block"};function j(e,t,r,a,n,i){const l=(0,o.up)("router-link"),d=(0,o.up)("theme-switcher"),s=(0,o.up)("AppHeaderLinks"),c=(0,o.up)("Button"),m=(0,o.up)("HireMeModal");return(0,o.wg)(),(0,o.iD)("nav",u,[(0,o._)("div",p,[(0,o._)("div",g,[(0,o._)("div",null,[(0,o.Wm)(l,{to:"/"},{default:(0,o.w5)((()=>["light"===n.theme?((0,o.wg)(),(0,o.iD)("img",h)):((0,o.wg)(),(0,o.iD)("img",f))])),_:1})]),(0,o.Wm)(d,{theme:n.theme,onThemeChanged:i.updateTheme,class:"block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"},null,8,["theme","onThemeChanged"]),(0,o._)("div",b,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>n.isOpen=!n.isOpen),type:"button",class:"focus:outline-none","aria-label":"Hamburger Menu"},[((0,o.wg)(),(0,o.iD)("svg",y,[n.isOpen?((0,o.wg)(),(0,o.iD)("path",x)):(0,o.kq)("",!0),n.isOpen?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("path",v))]))])])]),(0,o.Wm)(s,{showModal:i.showModal,isOpen:n.isOpen},null,8,["showModal","isOpen"]),(0,o._)("div",k,[(0,o._)("div",w,[(0,o.Wm)(c,{title:"Hire Me",class:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300",onClick:t[1]||(t[1]=e=>i.showModal()),"aria-label":"Hire Me Button"})]),(0,o.Wm)(d,{theme:n.theme,onThemeChanged:i.updateTheme,class:"ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"},null,8,["theme","onThemeChanged"])])]),(0,o.Wm)(m,{showModal:i.showModal,modal:n.modal,categories:n.categories,"aria-modal":"Hire Me Modal"},null,8,["showModal","modal","categories"])])}const _={key:0,"data-feather":"moon",class:"text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"},D={key:1,"data-feather":"sun",class:"text-gray-200 hover:text-gray-50 w-5"};function S(e,t,r,n,i,l){return(0,o.wg)(),(0,o.iD)("a",{href:"#",onClick:t[0]||(t[0]=(0,a.iM)(((...e)=>l.toggleTheme&&l.toggleTheme(...e)),["prevent"])),"aria-label":"Theme Switcher"},["light"===r.theme?((0,o.wg)(),(0,o.iD)("i",_)):((0,o.wg)(),(0,o.iD)("i",D))])}var M={props:{theme:{type:String,required:!0}},methods:{toggleTheme(){const e="light"===this.theme?"dark":"light";localStorage.setItem("theme",e),this.$emit("theme-changed",e),this.$router.go()}}},C=r(744);const P=(0,C.Z)(M,[["render",S]]);var T=P;const A=e=>((0,o.dD)("data-v-8e50bfe8"),e=e(),(0,o.Cn)(),e),O={class:"font-general-regular fixed inset-0 z-30"},I={class:"flex flex-col items-center justify-center h-full w-full"},W={class:"modal-wrapper flex items-center z-30"},F={class:"modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"},H={class:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"},E=A((()=>(0,o._)("h5",{class:"text-primary-dark dark:text-primary-light text-xl"}," Please leave details of your project ",-1))),B=A((()=>(0,o._)("i",{"data-feather":"x"},null,-1))),Z=[B],z={class:"modal-body p-5 w-full h-full"},N=["action"],L={class:"mt-6 mb-4"},q=A((()=>(0,o._)("label",{class:"block mb-2 text-lg text-primary-dark dark:text-primary-light",for:"project"},"Project Type",-1))),U={class:"w-full px-5 py-3 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"project",name:"project",type:"text",required:"","aria-label":"Project Category"},$=["value"],R={class:"mt-7 pb-4 sm:pb-1"},Y={class:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"};function G(e,t,r,i,l,d){const s=(0,o.up)("FormInput"),c=(0,o.up)("FormTextarea"),m=(0,o.up)("Button");return(0,o.wg)(),(0,o.j4)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",O,[(0,o.wy)((0,o._)("div",{onClick:t[0]||(t[0]=e=>r.showModal()),class:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"},null,512),[[a.F8,r.modal]]),(0,o._)("main",I,[(0,o.Wm)(a.uT,{name:"fade-up-down"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",W,[(0,o._)("div",F,[(0,o._)("div",H,[E,(0,o._)("button",{class:"px-4 text-primary-dark dark:text-primary-light",onClick:t[1]||(t[1]=e=>r.showModal())},Z)]),(0,o._)("div",z,[(0,o._)("form",{action:i.FORM_ENDPOINT,onSubmit:t[2]||(t[2]=(...e)=>i.handleSubmit&&i.handleSubmit(...e)),method:"POST",class:"max-w-xl m-4 text-left"},[(0,o.Wm)(s,{label:"name",inputIdentifier:"name",class:"mb-2"}),(0,o.Wm)(s,{label:"email",inputIdentifier:"email",inputType:"email"}),(0,o._)("div",L,[q,(0,o._)("select",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.categories,(e=>((0,o.wg)(),(0,o.iD)("option",{key:e.id,value:e.value},(0,n.zw)(e.name),9,$)))),128))])]),(0,o.Wm)(c,{label:"Details",name:"message",textareaIdentifier:"details"}),(0,o._)("div",R,[(0,o.Wm)(m,{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit","aria-label":"Send Message"})])],40,N)]),(0,o._)("div",Y,[(0,o.Wm)(m,{title:"Close",class:"px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500",onClick:t[3]||(t[3]=e=>r.showModal()),"aria-label":"Close Modal"})])])],512),[[a.F8,r.modal]])])),_:1})])],512),[[a.F8,r.modal]])])),_:1})}var K=r(262),V=r(135);const X=["for"],J=["id","name","placeholder","aria-label","value","type"];function Q(e,t,r,a,i,l){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("label",{class:"block mb-2 text-lg text-primary-dark dark:text-primary-light",for:r.label},(0,n.zw)(r.label),9,X),(0,o._)("input",(0,o.dG)({class:"w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:r.inputIdentifier,name:r.inputIdentifier,placeholder:r.label,"aria-label":r.inputIdentifier,value:r.val,type:r.inputType},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),required:""}),null,16,J)])}var ee={props:{label:{type:String,default:""},inputIdentifier:{type:String,default:""},val:{type:[String,Number],default:""},inputType:{type:String,default:"text"}}};const te=(0,C.Z)(ee,[["render",Q]]);var re=te;const ae=["for"],oe=["id","name","aria-label","placeholder"];function ne(e,t,r,a,i,l){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:r.textareaIdentifier},(0,n.zw)(r.label),9,ae),(0,o._)("textarea",(0,o.dG)({class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:r.textareaIdentifier,name:r.textareaIdentifier,"aria-label":r.textareaIdentifier,placeholder:r.label},e.$attrs,{onInput:t[0]||(t[0]=t=>e.$emit("update:val",t.target.value)),cols:"14",rows:"6"}),null,16,oe)])}var ie={props:{label:{type:String,default:""},textareaIdentifier:{type:String,default:""},val:{type:[String,Number],default:""}}};const le=(0,C.Z)(ie,[["render",ne]]);var de=le,se={props:["showModal","modal","categories"],components:{Button:V.Z,FormInput:re,FormTextarea:de},data(){return{}},mounted(){s().replace()},updated(){s().replace()},setup(){const e="https://public.herotofu.com/v1/f96e4c70-07e3-11ee-b0a7-9f000c4c1540",t=(0,K.iH)(e),r=(0,K.iH)();function a(e){e.preventDefault();const a={DYNAMIC_DATA_EXAMPLE:123},o=["name","email","message","project"],n={};o.forEach((e=>{e.name&&(n[e.name]=e.value)})),Object.assign(n,a),fetch(t.value,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((t=>{if(422===t.status)throw Object.keys(a).forEach((t=>{const r=document.createElement("input");r.type="hidden",r.name=t,r.value=a[t],e.target.appendChild(r)})),e.target.submit(),new Error("Please finish the captcha challenge");if(200!==t.status)throw new Error(t.statusText);return t.json()})).then((()=>r.value="We'll be in touch soon.")).catch((e=>r.value=e.toString()))}return{status:r,handleSubmit:a,FORM_ENDPOINT:t}},methods:{}};const ce=(0,C.Z)(se,[["render",G],["__scopeId","data-v-8e50bfe8"]]);var me=ce;const ue={class:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"};function pe(e,t,r,a,i,l){const d=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",{class:(0,n.C_)([r.isOpen?"block":"hidden","m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"])},[(0,o.Wm)(d,{to:"/projects",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2","aria-label":"Projects"},{default:(0,o.w5)((()=>[(0,o.Uk)("Projects")])),_:1}),(0,o.Wm)(d,{to:"/about",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me"},{default:(0,o.w5)((()=>[(0,o.Uk)("About Me")])),_:1}),(0,o.Wm)(d,{to:"/contact",class:"font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contact")])),_:1}),(0,o._)("div",ue,[(0,o._)("button",{class:"font-general-medium sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500",onClick:t[0]||(t[0]=e=>r.showModal()),"aria-label":"Hire Me Button"}," Hire Me ")])],2)}var ge={props:["showModal","isOpen"]};const he=(0,C.Z)(ge,[["render",pe]]);var fe=he,be={components:{ThemeSwitcher:T,HireMeModal:me,AppHeaderLinks:fe,Button:V.Z},data(){return{isOpen:!1,theme:"",modal:!1,categories:[{id:1,value:"web",name:"Frontend Web"},{id:2,value:"mobile",name:"Frontend Mobile"},{id:3,value:"backend",name:"Backend"},{id:4,value:"fullStack",name:"Full Stack"}]}},created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){s().replace(),this.theme=localStorage.getItem("theme")||"light"},methods:{updateTheme(e){this.theme=e},showModal(){this.modal?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),this.modal=!1):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),this.modal=!0)}},updated(){s().replace()}};const ye=(0,C.Z)(be,[["render",j],["__scopeId","data-v-50dcac73"]]);var xe=ye;const ve={class:"container mx-auto"},ke={class:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},we={class:"flex flex-col justify-center items-center mb-12 sm:mb-20"},je=(0,o._)("p",{class:"font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"}," My network ",-1),_e={class:"flex gap-4 sm:gap-8"},De=["href"],Se=["data-feather"];function Me(e,t,r,a,n,i){const l=(0,o.up)("FooterCopyright");return(0,o.wg)(),(0,o.iD)("div",ve,[(0,o._)("div",ke,[(0,o._)("div",we,[je,(0,o._)("ul",_e,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.socials,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e.id,href:e.url,target:"__blank",class:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"},[(0,o._)("i",{"data-feather":e.icon,class:"w-5 sm:w-8 h-5 sm:h-8"},null,8,Se)],8,De)))),128))])]),(0,o.Wm)(l)])])}const Ce={class:"flex justify-center items-center text-center"},Pe={class:"font-general-regular text-lg text-ternary-dark dark:text-ternary-light"},Te={href:"https://v2.tailwindcss.com/docs/guides/vue-3-vite",target:"__blank",class:"font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"};function Ae(e,t,r,a,i,l){return(0,o.wg)(),(0,o.iD)("div",Ce,[(0,o._)("div",Pe,[(0,o.Uk)(" © "+(0,n.zw)(e.copyrightDate)+". Developed with ",1),(0,o._)("a",Te,(0,n.zw)(e.projectName),1)])])}var Oe={data:()=>({copyrightDate:(new Date).getFullYear(),projectName:"Vue.js & Tailwind CSS",author:"Franco Donati"})};const Ie=(0,C.Z)(Oe,[["render",Ae]]);var We=Ie;const Fe=[{id:1,name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/in/francodonati9"}];var He={components:{FooterCopyright:We},data(){return{socials:Fe}},mounted(){s().replace()},updated(){s().replace()}};const Ee=(0,C.Z)(He,[["render",Me]]);var Be=Ee,Ze={components:{AppHeader:xe,AppFooter:Be},data:()=>({appTheme:localStorage.getItem("theme")}),mounted(){s().replace()},updated(){s().replace()}};const ze=(0,C.Z)(Ze,[["render",l]]);var Ne=ze,Le=r(201);const qe={class:"container mx-auto"},Ue={class:"mt-10 sm:mt-20 flex justify-center"};function $e(e,t,r,a,n,i){const l=(0,o.up)("AppBanner"),d=(0,o.up)("ProjectsGrid"),s=(0,o.up)("Button"),c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",qe,[(0,o.Wm)(l,{class:"mb-5 sm:mb-8"}),(0,o.Wm)(d),(0,o._)("div",Ue,[(0,o.Wm)(c,{to:"/projects",class:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{title:"More Projects"})])),_:1})])])}var Re=r.p+"img/developer.d30886eb.svg",Ye=r.p+"img/developer-dark.cfadf07a.svg";const Ge={class:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"},Ke=(0,o.uE)('<div class="w-full md:w-1/3 text-left"><h1 class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"> Hi, I am Franco </h1><p class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400"> A Full-Stack Developer &amp; Software Engineer </p><div class="flex justify-center sm:block"><a download="Franco-Donati-Resume.pdf" href="/files/Franco_Donati_UC.pdf" class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500" aria-label="Download Resume"><i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i><span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span></a></div></div>',1),Ve={class:"w-full md:w-2/3 text-right float-right"},Xe={key:0,src:Re,alt:"Developer"},Je={key:1,src:Ye,alt:"Developer"};function Qe(e,t,r,a,n,i){return(0,o.wg)(),(0,o.iD)("section",Ge,[Ke,(0,o._)("div",Ve,["light"===e.theme?((0,o.wg)(),(0,o.iD)("img",Xe)):((0,o.wg)(),(0,o.iD)("img",Je))])])}var et={name:"Home",data:()=>({theme:""}),created(){this.theme=localStorage.getItem("theme")||"light"},mounted(){s().replace(),this.theme=localStorage.getItem("theme")||"light"},updated(){s().replace()},methods:{}};const tt=(0,C.Z)(et,[["render",Qe]]);var rt=tt,at=r(950),ot={name:"Home",components:{AppBanner:rt,ProjectsGrid:at.Z,Button:V.Z}};const nt=(0,C.Z)(ot,[["render",$e]]);var it=nt;const lt=[{path:"/",name:"Home",component:it,meta:{title:"Donati - Home"}},{path:"/about",name:"About",component:()=>r.e(443).then(r.bind(r,456)),meta:{title:"Donati - About"}},{path:"/projects",name:"Projects",component:()=>r.e(176).then(r.bind(r,773)),meta:{title:"Donati - Projects"}},{path:"/projects/mecanu",name:"Mecanu",component:()=>r.e(176).then(r.bind(r,531)),meta:{title:"Donati - Mecanu"}},{path:"/projects/fastagenda",name:"FastAgenda",component:()=>r.e(176).then(r.bind(r,41)),meta:{title:"Donati - FastAgenda"}},{path:"/projects/skipo",name:"Skipo",component:()=>r.e(176).then(r.bind(r,948)),meta:{title:"Donati - Skipo"}},{path:"/contact",name:"Contact",component:()=>r.e(176).then(r.bind(r,912)),meta:{title:"Donati - Contact"}}],dt=(0,Le.p7)({history:(0,Le.PO)("/"),routes:lt,scrollBehavior(){document.getElementById("app").scrollIntoView()}});var st=dt;dt.beforeEach(((e,t,r)=>{const a=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags)),n=t.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if(a?document.title=a.meta.title:n&&(document.title=n.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>e.parentNode.removeChild(e))),!o)return r();o.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()}));var ct=r(617);const mt=r(508);mt.replace(),(0,a.ri)(Ne).use(st).use(ct.Z).mount("#app");const ut=localStorage.getItem("theme");"dark"===ut&&document.querySelector("body").classList.contains("app-theme")?document.querySelector("body").classList.add("bg-primary-dark"):document.querySelector("body").classList.add("bg-secondary-light")},950:function(e,t,r){r.d(t,{Z:function(){return B}});var a=r(252),o=r(577),n=r(963);const i={class:"pt-10 sm:pt-14"},l={class:"text-center"},d={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},s={class:"mt-10 sm:mt-10"},c=(0,a._)("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"}," Search projects by title or filter by category ",-1),m={class:"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},u={class:"flex justify-between gap-2"},p=(0,a._)("span",{class:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"},[(0,a._)("i",{"data-feather":"search",class:"text-ternary-dark dark:text-ternary-light"})],-1),g={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function h(e,t,r,h,f,b){const y=(0,a.up)("ProjectsFilter"),x=(0,a.up)("ProjectSingle");return(0,a.wg)(),(0,a.iD)("section",i,[(0,a._)("div",l,[(0,a._)("p",d,(0,o.zw)(e.projectsHeading),1)]),(0,a._)("div",s,[c,(0,a._)("div",m,[(0,a._)("div",u,[p,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.searchProject=t),class:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},null,512),[[n.nr,e.searchProject]])]),(0,a.Wm)(y,{onFilter:t[1]||(t[1]=t=>e.selectedCategory=t)})])]),(0,a._)("div",g,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(b.filteredProjects,(e=>((0,a.wg)(),(0,a.j4)(x,{key:e.id,project:e},null,8,["project"])))),128))])])}var f=r(508),b=r.n(f);const y=["name","id"],x=(0,a._)("option",{value:"",class:"text-sm sm:text-md"},"All Projects",-1),v=["value"];function k(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("select",{onChange:t[0]||(t[0]=t=>e.$emit("filter",t.target.value)),name:r.select,id:r.select,class:"font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"},[x,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.selectOptions,(e=>((0,a.wg)(),(0,a.iD)("option",{key:e,value:e,class:"sm:text-md"},(0,o.zw)(e),9,v)))),128))],40,y)}var w={props:{select:{type:String,default:"projects",required:!0},selectOptions:{type:Array,default:()=>["Web Application","Mobile Application","UI/UX Design","Branding & Anim"]}}},j=r(744);const _=(0,j.Z)(w,[["render",k]]);var D=_;const S=["src","alt"],M={class:"text-center px-4 py-6"},C={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},P={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"};function T(e,t,r,n,i,l){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(d,{to:`/projects/${r.project.name}`,class:"flex flex-col justify-between rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark","aria-label":"Single Project"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a._)("img",{src:r.project.img,alt:r.project.title,class:"rounded-t-xl border-none"},null,8,S)]),(0,a._)("div",M,[(0,a._)("p",C,(0,o.zw)(r.project.title),1),(0,a._)("span",P,(0,o.zw)(r.project.category),1)])])),_:1},8,["to"])}var A={props:["project"]};const O=(0,j.Z)(A,[["render",T]]);var I=O;const W=[{id:1,title:"Car Reparation Platform",category:"Web Application",img:r(22),name:"mecanu"},{id:2,title:"Crypto Wallet Platform",category:"Web Application",img:r(666),name:"skipo"},{id:3,title:"Managment Agenda Platform",category:"Web Aplication",img:r(294),name:"fastagenda"}];var F=W,H={components:{ProjectSingle:I,ProjectsFilter:D},data:()=>({projects:F,projectsHeading:"Projects Portfolio",selectedCategory:"",searchProject:""}),computed:{filteredProjects(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}},methods:{filterProjectsByCategory(){return this.projects.filter((e=>{let t=e.category.charAt(0).toUpperCase()+e.category.slice(1);return console.log(t),t.includes(this.selectedCategory)}))},filterProjectsBySearch(){let e=new RegExp(this.searchProject,"i");return this.projects.filter((t=>t.title.match(e)))}},mounted(){b().replace()}};const E=(0,j.Z)(H,[["render",h]]);var B=E},135:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(252),o=r(577);function n(e,t,r,n,i,l){return(0,a.wg)(),(0,a.iD)("button",null,(0,o.zw)(r.title),1)}var i={props:["title"],data:()=>({})},l=r(744);const d=(0,l.Z)(i,[["render",n]]);var s=d},22:function(e,t,r){e.exports=r.p+"img/car-project.89f3255f.png"},666:function(e,t,r){e.exports=r.p+"img/crypto-project.b6dbf0ef.png"},294:function(e,t,r){e.exports=r.p+"img/web-project-2.ecd6c182.jpg"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,n){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var l=!0,d=0;d<a.length;d++)(!1&n||i>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[d])}))?a.splice(d--,1):(l=!1,n<i&&(i=n));if(l){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+{176:"projects",443:"about"}[e]+"."+{176:"d07d71bb",443:"4dda754d"}[e]+".js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuejs-tailwindcss-portfolio:";r.l=function(a,o,n,i){if(e[a])e[a].push(o);else{var l,d;if(void 0!==n)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var m=s[c];if(m.getAttribute("src")==a||m.getAttribute("data-webpack")==t+n){l=m;break}}l||(d=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+n),l.src=a),e[a]=[o];var u=function(t,r){l.onerror=l.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),d&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.f.j=function(t,a){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise((function(r,a){o=e[t]=[r,a]}));a.push(o[2]=n);var i=r.p+r.u(t),l=new Error,d=function(a){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,o[1](l)}};r.l(i,d,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,i=a[0],l=a[1],d=a[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(d)var c=d(r)}for(t&&t(a);s<i.length;s++)n=i[s],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(931)}));a=r.O(a)})();
//# sourceMappingURL=app.731236a3.js.map