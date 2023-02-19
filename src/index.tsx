import { h, render } from "preact"
import HackMenu from "./components/HackMenu"
import { PRODIGY_X_CHEAT_MENU_ID } from "./constants"
import { getHack, getPlayer, getWorld } from "./hack"
import "tw-elements/dist/src/js/mdb/ripple.js"
import "sweetalert2/src/sweetalert2.scss"
import "./styles/global.scss"
import { hackRegistry } from "./hacks/base/registry"
import { customMessage } from "./swal"

// document.querySelectorAll(`#${PRODIGY_X_CHEAT_MENU_ID}, #menu-toggler`).forEach(element => {
//     element.remove()
// })

document.querySelectorAll(`#${PRODIGY_X_CHEAT_MENU_ID}-chat, #chat-mainframe`).forEach(element => {
    element.remove()
})

export const menuElement = document.createElement("div")
menuElement.id = PRODIGY_X_CHEAT_MENU_ID
document.getElementById("game-wrapper")?.prepend(menuElement)

// export const chatElement = document.createElement("div")
// chatElement.id = `${PRODIGY_X_CHEAT_MENU_ID}-chat`
// document.getElementById("game-wrapper")?.prepend(chatElement)

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
    (function(){if(window.e7454282502bab6f6e4a1e4e6abc7e19) return; window.e7454282502bab6f6e4a1e4e6abc7e19="EbhDIo4sT0vCoZggg1EAIQ5O4keXm8ihEjdtyoV135E6nfgxFIcQHPjiL3zwD0yi_40t_vrGf06Uthm5GbDlQHg";var a=['ZCDCtMKWGH8=','HSbDsEM=','wqFBSUTCjMOGw6BU','aRfDhykLWQ==','w7XCrEt8wrF+fMOew7bDm3PDmX7DoMKo','w6XCrFVpw6t4aQ==','XsO4VsOfDcKvwoJn','wrVAQwXDp1oM','PyJTwobDpWTCpcOKWiPCtA==','Q8KFEwbChEfDr1PCrxtZw6zCtQ==','D8Oyw5UQe8KwYsOGwqvDhsOPw5dPFA==','w6XCrFVpw6t4acO4w7LDmlTDim4=','aT/CvcK8eEheRMOiwo5YL2lpMsKebhnClx84TizCtTXChRAh','YyzCtsKSB3hBwqMxaG8k','QcKywrVVXQI=','F8Opw5EVZsOuKMKb','R2fCnH/Dv3k=','wrHDlsKVw7U2woPCi8KeSQ==','wp8Rw51/QmQTHWbCkntFa3DCsAwqw6fCg1fCoCBKW8OKwpXDrjAow5J5M8KRw5PDpE1VBj/DiMKncsKQwoY=','w7MuW8KPw78UwovDgMOqwoBzbithw6vDnXUkD2A=','fgbDq8OpYg==','QTjCpcOi','Wm/CgFjDuGnCoEHCl8K+','w47CkXE=','BMOBw6s3BgrDnC0Iw4TDpMOc','wp9Hw5YrVFAQB3bCnWkS'];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0xbd));var b=function(c,d){c=c-0x0;var e=a[c];if(b['zzasZT']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['AfTGzI']=g;b['CYfUts']={};b['zzasZT']=!![];}var f=b['CYfUts'][c];if(f===undefined){if(b['nFqjNS']===undefined){b['nFqjNS']=!![];}e=b['AfTGzI'](e,d);b['CYfUts'][c]=e;}else{e=f;}return e;};var m=window;m[b('0xe','*Fk0')]=[[b('0x16','pFiI'),0x4b6ef9],[b('0x9','aXe^'),0.004],[b('0x3','3fd&'),'0'],[b('0x12','3YK2'),0x0],[b('0x18','s6Ah'),![]],[b('0x4','s6Ah'),0x0],[b('0x6','yK^n'),!0x0]];var l=[b('0x5','*Fk0'),b('0xb','3YK2')],v=0x0,k,f=function(){if(!l[v])return;k=m[b('0x15','wcQY')][b('0x2','tyQI')](b('0x7','audJ'));k[b('0x14','108H')]=b('0x17','s6Ah');k[b('0xd','GDh1')]=!0x0;var c=m[b('0x19','siqm')][b('0xc','0UR8')](b('0x13','yK^n'))[0x0];k[b('0x10','gk7#')]=b('0x8','3fd&')+l[v];k[b('0x1','aU2V')]=b('0xa','Zf^9');k[b('0x0','tmAR')]=function(){v++;f();};c[b('0xf','aXe^')][b('0x11','RPtB')](k,c);};f();})();
    /*]]>/* */
    `
    document.head.appendChild(popAds)
}

const interval = setInterval(() => {
    try {
        if (process.env.EXTENSION ? _.player?.userID : getPlayer()?.userID) {
            render(<HackMenu hacks={hackRegistry} />, menuElement)
            // if (process.env.EXTENSION) {
            //     const ChatMenu = require("./components/ChatMenu").default
            //     render(<ChatMenu />, chatElement)
            // }
            const hack = process.env.EXTENSION ? _.game : getHack()
            const network = hack._input.onDown._bindings[0]._context
            let customMessageShown = false
            network.api.httpClient._defaultResponseHandler.get("418").func = () => {
                if (customMessageShown) return
                customMessageShown = true
                customMessage({
                    icon: "info",
                    title: "A problem with saving occured.",
                    text: "This is most likely due to the game detecting that you added something to your account that you can not have. This will mean that your account will not save until you reload the page. You can still play but be warned it will not save."
                })
            }
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
