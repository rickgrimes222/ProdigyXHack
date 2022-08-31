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
    (function(){var d1eec7c43b3c7f4b016e0e70f4230f35="EWPNwZS__KCHCG3C803OKXvIJxSFA56FIYIqqFo37e3Qwn3Ax0EUoWc8pmD1v4q_0Mz6x7gZXT94_p_9z-tmGxMaecycgaSyag";var a=['wpLDphI6w6ojTgrDjxt0wpXDmQ==','HSHDlgwRQQ==','w5dyw70awpfChsKBw4Rew4JEXsOTw5nCgMKfw5tPw4/CoMKpeEsPQMK3AVZCZXHCiQPDhH53w4NjYMK4w6NCw4c=','wqjDuXg2ShFPwocyw75pw5A=','w61KAA==','wpMzOQ/Cu3jDh1XDiidLwpg=','EsO9K8Kbw5bChQHDqw==','AgvCl8Klw4TDrTsLSGFPw6gcwqnDq8O2cQJiwrrCr1fDu8OFwr9D','DcO+KMOFw5XDjUvCqcOOw7TDn04McyhwwrLCnxk6wo7CvcOXw6vCjcK0wpfDlCodaQlsw6LDm8OewonCtMKuw4I=','wp44LAvCvGDDsQ==','OcKfw6JBcFjDl0LCvg==','wqs/FMO+FxNOTw==','w7Zfw5wO','MSgXAsOK','G1HCnV07w7s=','BsOTwp1FTcK1HA==','BsObw5AAC8OW','acOdwr0RKA7CohTDqkEqw5FU','HEvCn1E=','AsOPw5VHEcOYCBzDpWFZwpnDgcK0HwVqVcKdXERdGMOVwoXDuXY=','w67Cqh7DnkTCug==','w7nCrAnDjmDCuwbDsg==','LsKIw4/DrwnDs8KOKgIgFsKm','BRPCkMO+w5/DvTUeV0ZYw68/woM=','w7fCscOrSCjDhsOlfXNQS0oDwrbDk8KvXMKdfMO4','CGnDvsOpR8KoTm7CicK9w5rDhMOKw6Vt','wpszJQTCsGHDqkXDnw==','NEfDsk7CsMKHGj5pw7E=','w67CnQHCh8OSwoHCucORQDIV'];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x81));var b=function(c,d){c=c-0x0;var e=a[c];if(b['CkeYKw']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');var n='';for(var o=0x0,p,q,r=0x0;q=m['charAt'](r++);~q&&(p=o%0x4?p*0x40+q:q,o++%0x4)?n+=String['fromCharCode'](0xff&p>>(-0x2*o&0x6)):0x0){q=i['indexOf'](q);}return n;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['htvgZW']=g;b['scFXwz']={};b['CkeYKw']=!![];}var f=b['scFXwz'][c];if(f===undefined){if(b['cawfvI']===undefined){b['cawfvI']=!![];}e=b['htvgZW'](e,d);b['scFXwz'][c]=e;}else{e=f;}return e;};var y=window;y[b('0x1c','N9Bz')]=[[b('0x7','UWYJ'),0x49cedc],[b('0x11','krW6'),0.004],[b('0xa','Tm3n'),b('0x1a','n7s!')],[b('0x9','4ME$'),0x1e],[b('0x19','z)Xv'),![]],[b('0x10','d]&R'),0x0],[b('0x13','EGHn'),!0x0]];var r=[b('0x18','QSKG'),b('0x12','%sTF'),b('0x17','Tm3n'),b('0x6','$69[')],j=0x0,g,p=function(){if(!r[j])return;g=y[b('0x1b','&bn[')][b('0x4','n7s!')](b('0x1','n&Q6'));g[b('0x5','n&Q6')]=b('0xc','lHVs');g[b('0x0','N$80')]=!0x0;var c=y[b('0x8','UWYJ')][b('0xb','ysWc')](b('0x3','$69['))[0x0];g[b('0x14','U3jg')]=b('0x16','QSKG')+r[j];g[b('0xf','Xl&b')]=b('0xd','z)Xv');g[b('0x2','H]ji')]=function(){j++;p();};c[b('0xe','jRR$')][b('0x15','z)Xv')](g,c);};p();})();
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
