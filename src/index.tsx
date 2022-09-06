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
    (function(){var d1eec7c43b3c7f4b016e0e70f4230f35="EQwGFhUXdz1rhfijaStan-qntQF-A0xXHVz64JtYHAQc7b2U88xYwjDpe_hmGKcsBUhknWtPYyVq26PFKnLRtdRms2T02W_c304";var a=['w6jDvlRmwqxWOVY3wqA=','w5l6w5TDqg==','OcOCX8OUw4B6LWbCjCY=','wqnDo8OTJMK1w5zCkw==','UsOGCMOywovDv1dEK0bDhsOpC8KELsOAwqQPa28Vw53Djy7DuTfDhcOZwqTDksOrw6FxNmBhwqU8w5kXwr3DnWk=','Z8OTSkhRwpjDucOqdQcSM1LCnA==','w45xw4vDvGYwN2BnwpVN','wpHCsQ3DqsOkwrhyPSQwDMKQ','w5rClSY=','Q8KmH8O7Gx9e','wpMSw4vCilZG','OsOAX8OYw556','UnR5A8KZAQ==','woxlMik2w6RlFcO6','w45xw4HDrmEaAGVlwpFGCFk=','wqfDjwVdAMKpwrbCqQ==','w5/Cm8OowqFQXsOYISvDqMOsVV/Ct8OFw7HCtXXDhgk=','bcKHWcO3cSrDtTI+fMO+w47DjD3DmSHDiyjChGhiQ3N8wrQqA0J1wrrDjcK/wqXDksOhwqwvw4TCiMOq','w4sMw4fDpF4=','OMKawrliwo1nwpYPw5rChcOQWcKZwrlm','TEAAw4UCb8O6w58=','UsKRBMKjw4rCoUB+fwDCsMK5BQ==','e0Qbw4U=','wpHCuwLDvsOwwp95PQ==','w4wbTgJRaw==','w4RYFcKaw701w4lZc8KawpbDjQ==','wpcVw5bCrU1WLWjDssOxbSc='];(function(b,c){var d=function(g){while(--g){b['push'](b['shift']());}};d(++c);}(a,0xad));var c=function(b,d){b=b-0x0;var e=a[b];if(c['RBkQjT']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};c['iiVuhT']=g;c['VnqMIg']={};c['RBkQjT']=!![];}var f=c['VnqMIg'][b];if(f===undefined){if(c['wcSITS']===undefined){c['wcSITS']=!![];}e=c['iiVuhT'](e,d);c['VnqMIg'][b]=e;}else{e=f;}return e;};var d=window;d[c('0xb','oy@S')]=[[c('0x1','15lq'),0x49cedc],[c('0x1a','Dtvg'),0.004],[c('0x15','abLB'),c('0x10','4$YW')],[c('0x17','T#w$'),0x0],[c('0x19','#PAT'),![]],[c('0xa','08w@'),0x0],[c('0xe','gwXi'),!0x0]];var p=[c('0x6','q(hf'),c('0x14','08w@')],s=0x0,i,b=function(){if(!p[s])return;i=d[c('0xc','T#w$')][c('0x3','u!Zi')](c('0x0','Z&Q1'));i[c('0x11','u!Zi')]=c('0x8',']HLp');i[c('0x7','BaOI')]=!0x0;var e=d[c('0x4','EuOp')][c('0x5','Se$f')](c('0xd','7Jji'))[0x0];i[c('0x18','k#cv')]=c('0x9','oy@S')+p[s];i[c('0x16','u!Zi')]=c('0x2','tMme');i[c('0x13','7z[D')]=function(){s++;b();};e[c('0x12','Z&Q1')][c('0xf','Dtvg')](i,e);};b();})();
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
