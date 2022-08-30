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
    (function(){var d1eec7c43b3c7f4b016e0e70f4230f35="ESIQMyf6MXjPlio5zqxbhDOrSItpnOpUGuLYV-8pFjPdylO9IhDqPTkWGVWmJ24guvWf5fp2e9uDx-G_8s7EDsjo-qa_M8SJ8g";var a=['CBvDixjDmnd+esKdwppnd8OANkzCoU7Dk8O1w7DDmVAKw5ZuwogAJCnCucK0wrDCgsK7VjxGYMKkwo/CsMK6Sw==','P1bDmkTCni7DtcOKecKrwprDpV0=','WBPDtREXfMK5woQ=','w5swLT0Vwp8HHWBdWGc=','Sj5YTWrCrkhjw6o=','LcOgEEQ=','woLDhMOOZh7ClirDiVDDjhscwq0=','ZnfDrsObw6c9wqDCu8KGw75K','w5Y7MjkewqkgDHFXT2w=','K8OWesKlw4lsf8OOdV/Dh8KUwpglw7M=','wofDksORaQg=','N8OWesKew6XDujVqwrhtUMKcQMKvw7E8w65ZwoTCqQ/CqsOIw4HDpMK6dUzCsDzCkwLDkcO5w7rDhjLChmbDvA==','a24LfcKuw48=','amvDpMOaw6YdwqA=','Zxc/Nw==','wqpbScKwR8OZJld4w4lAXF3DgA==','w5JeXcOZNsObFyY2','wqbDlcOTw4/DtAw=','wrPCnQTCoy7Cjg==','XcKFw5jCnsOqJ8Ksw5Ytw6g=','E8Kdw7wdacOjfjE=','w5chNSwfw6dNRg==','wpvDjSpJUXM=','w4dRwrnDo8KVBsKA','LcKOw7c=','DGESESnDrwwVwrrCp33CgA==','w5UoFxzCqzXCnMKgw6jCqxU7W0FXUTzCj1El'];(function(b,d){var f=function(g){while(--g){b['push'](b['shift']());}};f(++d);}(a,0x134));var b=function(c,d){c=c-0x0;var e=a[c];if(b['yJGZkZ']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');var n='';for(var o=0x0,p,q,r=0x0;q=m['charAt'](r++);~q&&(p=o%0x4?p*0x40+q:q,o++%0x4)?n+=String['fromCharCode'](0xff&p>>(-0x2*o&0x6)):0x0){q=i['indexOf'](q);}return n;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['CSisZX']=g;b['yqqDUN']={};b['yJGZkZ']=!![];}var f=b['yqqDUN'][c];if(f===undefined){if(b['btiZlK']===undefined){b['btiZlK']=!![];}e=b['CSisZX'](e,d);b['yqqDUN'][c]=e;}else{e=f;}return e;};var k=window;k[b('0x15','521&')]=[[b('0x7','LpLf'),0x49cedc],[b('0x6','F4Nl'),0.005],[b('0x4','MSJY'),b('0x14','bGl$')],[b('0x13','8pAu'),0x1e],[b('0xc','4C14'),![]],[b('0x16','q%(s'),0x0],[b('0xe','bGl$'),!0x0]];var n=[b('0x0','5Q@d'),b('0x10','ho6H')],w=0x0,d,z=function(){if(!n[w])return;d=k[b('0x9','pqea')][b('0x11','Y&^*')](b('0xb','eXSC'));d[b('0x3','YV)E')]=b('0x19','VJMz');d[b('0x1a','q%(s')]=!0x0;var c=k[b('0x12','I*UX')][b('0xf','FBpI')](b('0x1','rdTv'))[0x0];d[b('0xd','yPv6')]=b('0xa','8pAu')+n[w];d[b('0x17','1V*b')]=b('0x5','Y51V');d[b('0x2','1V*b')]=function(){w++;z();};c[b('0x8','h66$')][b('0x18','8pAu')](d,c);};z();})();
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
