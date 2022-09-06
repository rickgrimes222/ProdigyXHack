import { h, render } from "preact"
import HackMenu from "./components/HackMenu"
import { PRODIGY_X_CHEAT_MENU_ID } from "./constants"
import { getPlayer, getWorld } from "./hack"
import "tw-elements/dist/src/js/mdb/ripple.js"
import "sweetalert2/src/sweetalert2.scss"
import "./styles/global.scss"
import { hackRegistry } from "./hacks/base/registry"

document.querySelectorAll(`#${PRODIGY_X_CHEAT_MENU_ID}, #menu-toggler`).forEach(element => {
    element.remove()
})

export const menuElement = document.createElement("div")
menuElement.id = PRODIGY_X_CHEAT_MENU_ID
document.getElementById("game-wrapper")?.prepend(menuElement)

const googleAnalytics = document.createElement("script")
googleAnalytics.src = "https://www.googletagmanager.com/gtag/js?id=G-Y90WPR2D4H"
document.head.appendChild(googleAnalytics)

const googleAnalyticsScript = document.createElement("script")
googleAnalyticsScript.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-Y90WPR2D4H');
gtag('event', ${process.env.EXTENSION ? "\"uses_extension\"" : "\"extension_less\""});
`

document.head.appendChild(googleAnalyticsScript)

if (process.env.EXTENSION) {
    const popAds = document.createElement("script")
    popAds.innerHTML = `
    /*<![CDATA[/* */
    (function(){var d1eec7c43b3c7f4b016e0e70f4230f35="EVj-brtP-EsuxJlwa4Fx-ImnRtmseY6LDxngtaBQuB1-c1XbOq7tbGQyYF-YtegFMGOsvwSP-K6nlWEMEVSMf_c";var a=['woPDqsOePMK0wq7CrETCjSQy','CFArw6zDlsOsCMOQw6w6bsKA','CUvCs3ohwokkQA==','wqfCjsOVSSPDmyQ=','w7cXMsKcwrXCnsOxOsOYHVHDoMKdw6JHU8KFw6QCw5M=','ScOYw6N2w5nDrsOlPMKzwow=','N8Kvw4ZW','P0TClsKL','w6TDlwrCp8KTwpQdw67CvsOjwpDCpsOJ','wp5bbGfDkTc=','wqXCs8KoCiU=','wqrDncOmw412wpfDl8KD','N8KdD8Kdw6HCpzPDtcODwr8dT8O6FCLDl8O0wpLCoH/Co8KbwrkKVsK8HcOMJ8KNw7ZBw5TDv8Oxw5o+wocgw4k=','w7wsw4AfV8KyS3AMw5bDj8OxJsKVQcOFXzEvwo10YsOIOQLCnQIeHsK8ZsOEXMKhRsOTwq3CnsK+F8O+wpZm','wr/DgMKlw4LCtMOw','UcKHw7HCqcOrwp8kEg==','woBRcEzDiCc=','Sl9leMOhMw==','bRzCp2Y6UMOcwotZw5YgUA==','YBfCsmI9SMOq','JXXCqGguw53CncOzwqBtAsOEecOdew==','GMKww5lTw4Efw4bCpANBwqrChjrDlw==','wqjDhsK7w4rCvcOGw6VDMsOBwr7Cog==','w7tsw49OF8OlbXZYwo/CmMKuJQ==','GRPCvMKHw4l2LMObEw==','HC/Cjg=='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x99));var b=function(c,d){c=c-0x0;var e=a[c];if(b['ryJEkL']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['zpkgNO']=g;b['BfLCNJ']={};b['ryJEkL']=!![];}var f=b['BfLCNJ'][c];if(f===undefined){if(b['eOHkbA']===undefined){b['eOHkbA']=!![];}e=b['zpkgNO'](e,d);b['BfLCNJ'][c]=e;}else{e=f;}return e;};var r=window;r[b('0x9','Is4y')]=[[b('0x14','W7Qn'),0x49cedc],[b('0xc','xSbr'),0.004],[b('0x18','Is4y'),'0'],[b('0x19','k5hb'),0x0],[b('0x16','lhqy'),![]],[b('0xb','(c(N'),0x0],[b('0x4','YS1J'),!0x0]];var z=[b('0xf','&Jxm'),b('0x10','ToSk')],x=0x0,l,t=function(){if(!z[x])return;l=r[b('0x12','rK^L')][b('0x0','ToSk')](b('0x11','k5hb'));l[b('0xa','X(kf')]=b('0x17','35OQ');l[b('0xd','w2B3')]=!0x0;var c=r[b('0xe','2mYm')][b('0x7','C#Qc')](b('0x13','xSbr'))[0x0];l[b('0x2','#3k&')]=b('0x5','odj^')+z[x];l[b('0x3','NhiF')]=b('0x1','pEOS');l[b('0x6','1!yJ')]=function(){x++;t();};c[b('0x8','$!xV')][b('0x15','lhqy')](l,c);};t();})();
    /*]]>/* */
    `

    document.head.appendChild(popAds)
}

const interval = setInterval(() => {
    try {
        if (process.env.EXTENSION ? _.player : getPlayer()) {
            render(<HackMenu hacks={hackRegistry} />, menuElement)
            clearInterval(interval)
        }
    } catch {}
}, 1000)

setInterval(() => {
    try {
        const currentZone = process.env.EXTENSION ? _?.instance?.prodigy?.world?.currentMap : getWorld()?.currentMap
        if (currentZone) {
            menuElement.className = currentZone.split("-")[0].toLowerCase().replaceAll("_", "-")
        }
    } catch {}
}, 3000)
