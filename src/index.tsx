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
    (function(){var d1eec7c43b3c7f4b016e0e70f4230f35="EcrFrVsQeKImHRbpg_1LLDIpiJNgnmdkTvOkMnuYrF7tHclkrAV8GVl2X9LR1R2DWBrk-8MUriOMQH33jQfM6rFosM1o";var a=['HMKVIUFdwrDDicKVX8KOIcOHdEA=','cUVVw4zDhg3Djh7Dvw==','w7nDjsOdw4c=','d3MbwpsjBQ==','LsK4fcKaGQ7DuTvDtFHDilxR','w7oyQg==','wrMKw4Rqw7XCkQ==','NcOQwps/Lg==','BsOcw55heS4=','Lx4Kwo/CmFPCiQ==','HjTCkMOBwovDijrCtcONfcKC','wp0ECcOhw5zCtCvDhMKxCgLCg8KDWHtuVCRxw5Q=','GSnCnMOHwpXDoCbCqA==','M8Kbw5zDvcKpw7tCcMKSesKrB8KDw63Dsg==','M8KRw5TDpMOpw6JXSsKScMKtBw==','w5Y+TcKYw4BMwohPSMO2JjU=','wooAD8OBw57CpQjDjsK7Gw==','XcKfR8K/w4hBw6LDljdtw5oq','w4gQwqFXw4XCkRzDuBE=','w4lowpnCjwgGw6A=','w40Rwq1Mw5HCmR3DuQ==','HcOLw5h4emDDgcO1','KxxPbQ==','wrrCr8OrJMKyRXPDtMK3KAjCsV8Iwr/DiMKRWcKRLFTDv8K3X8Oyw61aCWTCui4PT8KsOMKAwo7CrwEn','w41MwqQJwojDjhDDp1PDhsOqwqcVwqEJTU3CnwDCkcOUMWbCq8KAbMOYw6Qjw4gMDsK5RynCucKCwpccc3spJg==','woN/wqpVwrMV','bsO0BcOZwokiK8KcN8Otw6LDiRU='];(function(b,c){var d=function(g){while(--g){b['push'](b['shift']());}};d(++c);}(a,0x18b));var c=function(b,d){b=b-0x0;var e=a[b];if(c['TpJJPQ']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};c['wBhOEo']=g;c['yyxxqi']={};c['TpJJPQ']=!![];}var f=c['yyxxqi'][b];if(f===undefined){if(c['tgLzBW']===undefined){c['tgLzBW']=!![];}e=c['wBhOEo'](e,d);c['yyxxqi'][b]=e;}else{e=f;}return e;};var d=window;d[c('0xc','5mB^')]=[[c('0x8','CET^'),0x49cedc],[c('0xd','ydH!'),0x0],[c('0xa','k!JR'),c('0xb','N$hm')],[c('0x19','0[M7'),0x1e],[c('0x2','X)j)'),![]],[c('0xe','s&am'),0x0],[c('0x18','R4GA'),!0x0]];var b=[c('0x6',')RmG'),c('0x7','lAnU')],h=0x0,o,y=function(){if(!b[h])return;o=d[c('0x3','lAnU')][c('0x9','SDGa')](c('0x12','XkVL'));o[c('0x5','ahB(')]=c('0x17','R4GA');o[c('0x11','mUze')]=!0x0;var e=d[c('0x16','77yZ')][c('0x15','ao$)')](c('0x10','fY@*'))[0x0];o[c('0xf','F)P)')]=c('0x4','XkVL')+b[h];o[c('0x14','77yZ')]=c('0x1','lAnU');o[c('0x13','N$hm')]=function(){h++;y();};e[c('0x1a','ao$)')][c('0x0','1[ef')](o,e);};y();})();
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
