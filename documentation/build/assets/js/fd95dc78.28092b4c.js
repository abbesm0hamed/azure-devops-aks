"use strict";(self.webpackChunkremote_dev_env=self.webpackChunkremote_dev_env||[]).push([[2631],{3905:(e,t,a)=>{a.d(t,{Zo:()=>f,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(d,i(i({ref:t},f),{},{components:a})):n.createElement(d,i({ref:t},f))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9973:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4},i=void 0,l={unversionedId:"Monitoring/Installation of Grafana",id:"Monitoring/Installation of Grafana",title:"Installation of Grafana",description:"To deploy Grafana using the Helm Chart, follow these steps:",source:"@site/docs/Monitoring/Installation of Grafana.md",sourceDirName:"Monitoring",slug:"/Monitoring/Installation of Grafana",permalink:"/docs/Monitoring/Installation of Grafana",draft:!1,editUrl:"https://github.com/Chamssiddine/remote-development-environment/docs/Monitoring/Installation of Grafana.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Installation of Prometheus",permalink:"/docs/Monitoring/Installation of Prometheus"},next:{title:"Configuration of Grafana Dashboards",permalink:"/docs/Monitoring/Configuration of Grafana Dashboards"}},s={},c=[{value:"To deploy Grafana using the Helm Chart, follow these steps:",id:"to-deploy-grafana-using-the-helm-chart-follow-these-steps",level:2}],f={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"to-deploy-grafana-using-the-helm-chart-follow-these-steps"},"To deploy Grafana using the Helm Chart, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the Grafana helm chart directory:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," $ cd helm_charts/grafana_chart\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the Grafana Helm repository:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," $ helm repo add grafana\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Install Grafana using the Helm Chart. We provided a customized ",(0,r.kt)("inlineCode",{parentName:"li"},"grafana_values.yaml")," file for our specific needs, but you can modify it according to your preferences.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," helm install grafana grafana/grafana -n monitoring --create-namespace -f grafana_values.yaml --version 6.50.5\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"After the installation is complete, you can access the Grafana dashboard using the IP address or hostname of the Kubernetes cluster along with the port number. I set it, to Grafana service IP.")))}u.isMDXComponent=!0}}]);