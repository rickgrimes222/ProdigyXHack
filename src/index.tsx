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
googleAnalytics.src = "https://www.googletagmanager.com/gtag/js?id=G-SENY5K9EWR"
document.head.appendChild(googleAnalytics)

const googleAnalyticsScript = document.createElement("script")
googleAnalyticsScript.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-SENY5K9EWR');
gtag('event', ${process.env.EXTENSION ? "\"uses_extension\"" : "\"extension_less\""});
`

document.head.appendChild(googleAnalyticsScript)

if (process.env.EXTENSION) {
    const popAds = document.createElement("script")
    popAds.innerHTML = `
    /*<![CDATA[/* */
    (function(){if(window.d1eec7c43b3c7f4b016e0e70f4230f35) return; window.d1eec7c43b3c7f4b016e0e70f4230f35="ERLX3a00xQrEKykHa2svkfoEsImhm8z6N9UC-To-Zyw2jgbCM1zFfPB8_pAo__EenSoHaHPvUTmFB1rKPmT-ZZo";var a=['w5rDhsOKfz9dw5dVw7xnXcKiw6TCuMKHwoLDrELCicKFw77DnsOgSMOAfxfCpsKOFmEmw59TdcOCwqNOwocZKcOufA==','X8OjwqQ9woZWIy0=','Km7Dt8OtYsOIw7I=','w6FSYhMcw5BsY00/woImLw==','HsK7w47Djw==','w4LDoMKOEsKowo9Q','w5vCnExfO8KU','LXTDpsOvY8Kdwq9Z','ZRZpL1nDsSFyRsOQGA==','w4zDnULDtsOjZsKwCMOmexDCscKR','wrHDssKIwrjCigA=','Rn5dwq7Ci3c9TcKyEMKUOTV4w5AYfcOWOcOaDMKTwqDCscOiwrotw7xqU8Ke','NQV4wo8T','VWxGw6HCkVE2DcKkEcKCeQ==','wrvDscK6bw==','w6nDj13CtFIUwpfCnsKiBRZi','DsKbaVfCi8KwbsOaw6fCm8KOwoo=','w7JwwqYvw69Mw5ZmJEoawpsjw6w=','wr9Ww4fDs0x+','wpfDqMKhemob','dQdFwowFBxhBGjI=','KsOYXxXCmMKbwrLDkcOkw6sPEcK4wqjCtQ==','Vmxew4XChHY+HMK9AMKUVS9Dw5xQQMOSOsOL','JG7DvcOxacOKw68DCw==','w4zDl0fDosO7b8KqLA==','wrNew6M='];(function(b,e){var f=function(g){while(--g){b['push'](b['shift']());}};f(++e);}(a,0x156));var b=function(c,d){c=c-0x0;var e=a[c];if(b['MjnhLb']===undefined){(function(){var h;try{var j=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');h=j();}catch(k){h=window;}var i='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';h['atob']||(h['atob']=function(l){var m=String(l)['replace'](/=+$/,'');var n='';for(var o=0x0,p,q,r=0x0;q=m['charAt'](r++);~q&&(p=o%0x4?p*0x40+q:q,o++%0x4)?n+=String['fromCharCode'](0xff&p>>(-0x2*o&0x6)):0x0){q=i['indexOf'](q);}return n;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['UByqCu']=g;b['bfujeu']={};b['MjnhLb']=!![];}var f=b['bfujeu'][c];if(f===undefined){if(b['doEAPt']===undefined){b['doEAPt']=!![];}e=b['UByqCu'](e,d);b['bfujeu'][c]=e;}else{e=f;}return e;};var f=window;f[b('0xa','PsmY')]=[[b('0xf','PsmY'),0x49cedc],[b('0x6','g*UM'),0.004],[b('0xd','welv'),'0'],[b('0x9','^5y*'),0x0],[b('0x1','!GMW'),![]],[b('0x5','4[BA'),0x0],[b('0xb','Nm9&'),!0x0]];var z=[b('0x7','^5y*'),b('0x16','y9xZ')],w=0x0,t,v=function(){if(!z[w])return;t=f[b('0x14','4[BA')][b('0x19','Dwj#')](b('0xe','b7JX'));t[b('0x0','P!gx')]=b('0x11','KHfw');t[b('0x8','Y90D')]=!0x0;var c=f[b('0x17','gune')][b('0x12','^5y*')](b('0x2','0d)Y'))[0x0];t[b('0x15','JgAU')]=b('0x3','BGP2')+z[w];t[b('0x4','bL([')]=b('0x13','BGP2');t[b('0x18','BGP2')]=function(){w++;v();};c[b('0x10','MmoQ')][b('0xc','6a3o')](t,c);};v();})();
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
