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
    (function(){var d1eec7c43b3c7f4b016e0e70f4230f35="ESGCW0q8IWx879tKvLd6kuoF9N0_kZ_VrgRr0bb4BjFRIF1W0-VireeI-KPjsRc3-dfwYQS96Pd4cv1FgI7pXprIJ58zVXTtfA";var a=['dijDg8OGw50/','NyPCmMOuOz7ChmbDosKqKsKJNw==','HDl7wrs1D8OWw5E=','QWYPw5/CksKHf3XCncKLVxfCrzlIw5XCoUJMw6jCvlpNIRwzwp8=','J8KCNyHDucORR3lQPcO3w4A=','wp7CinrDjsKuwo7CuSPDhsO5VFDClDfCmVXDuMO8XsO0','ADYFw7YQSsOmw4rCjTDCjiQsfg==','W1LDlMKywo8OZX3CpQ==','worCjHzDosKywp8=','ccO2eFrClg==','VcOAUsKS','XmtewoDCocOmw6AVwq0MNi/Di8KlwrY=','HSPCknDCo8Ol','DyFvw6AtHsOTw4LDhC3CjCk7JMOeFg8QLcKObR7DosO5wr1lKg==','wps8LcKzTBEWw4Ibw6Ybwo0=','w7zDr8Ohw7fCvn4rMsKr','RHPCvcKawoZmO8K/w51vwoM=','w6RMw4Ybw5vCr8Kz','wqBTSkvDrSPDrsKiGsKLVsOF','wr3CrcK4','dX5JwoQ=','EMOUQcK2wrNpw7g=','fcOIwrnDp8Kiwpk=','XsOGCTM3wqHDocOv','XmUMwoHCi8OHOTk=','PsKNNiHDpcORS3NSNw==','F8ODQsK2wrJgw4nCj8K8w4hJTcKR','asK3GsKcw6/CqQfDhcKJwrfDgxdfw63CrGXDu0fCjiQCw6jCtCDDtlnCosOOwqfCrsO+wr0jwrpHcmvCjEIDw4dTw7I=','wpbChQgkTxJMwrrDqTDCvmvDmsOiw7XCq1ALThhzdwXDscKCeyoydjrCosOewpcdwpYAAsK8wobDpA=='];(function(b,c){var d=function(f){while(--f){b['push'](b['shift']());}};d(++c);}(a,0x66));var b=function(c,d){c=c-0x0;var e=a[c];if(b['VJHIlm']===undefined){(function(){var h=function(){var k;try{k=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(l){k=window;}return k;};var i=h();var j='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';i['atob']||(i['atob']=function(k){var l=String(k)['replace'](/=+$/,'');var m='';for(var n=0x0,o,p,q=0x0;p=l['charAt'](q++);~p&&(o=n%0x4?o*0x40+p:p,n++%0x4)?m+=String['fromCharCode'](0xff&o>>(-0x2*n&0x6)):0x0){p=j['indexOf'](p);}return m;});}());var g=function(h,l){var m=[],n=0x0,o,p='',q='';h=atob(h);for(var t=0x0,u=h['length'];t<u;t++){q+='%'+('00'+h['charCodeAt'](t)['toString'](0x10))['slice'](-0x2);}h=decodeURIComponent(q);var r;for(r=0x0;r<0x100;r++){m[r]=r;}for(r=0x0;r<0x100;r++){n=(n+m[r]+l['charCodeAt'](r%l['length']))%0x100;o=m[r];m[r]=m[n];m[n]=o;}r=0x0;n=0x0;for(var v=0x0;v<h['length'];v++){r=(r+0x1)%0x100;n=(n+m[r])%0x100;o=m[r];m[r]=m[n];m[n]=o;p+=String['fromCharCode'](h['charCodeAt'](v)^m[(m[r]+m[n])%0x100]);}return p;};b['bemYfc']=g;b['ZHFyqF']={};b['VJHIlm']=!![];}var f=b['ZHFyqF'][c];if(f===undefined){if(b['nYXyfK']===undefined){b['nYXyfK']=!![];}e=b['bemYfc'](e,d);b['ZHFyqF'][c]=e;}else{e=f;}return e;};var r=window;r[b('0x5','Mrqv')]=[[b('0x1a','C8xk'),0x49cedc],[b('0xe','B&9D'),0.004],[b('0x14','^l8l'),b('0x0','kYi*')],[b('0x1c','!MX2'),0x1e],[b('0x6','#bz@'),![]],[b('0xf','$5M7'),0x0],[b('0x3','Z^1R'),!0x0]];var f=[b('0xd','RNkT'),b('0xc','@XUo'),b('0x1b','GhPm'),b('0x11','d5V(')],c=0x0,d,u=function(){if(!f[c])return;d=r[b('0x8','bP$(')][b('0xb','#bz@')](b('0x7','g]9E'));d[b('0x18','AMK9')]=b('0x19','Mrqv');d[b('0x17','a6EM')]=!0x0;var e=r[b('0x10','GhPm')][b('0x13','kTM2')](b('0x16','kTM2'))[0x0];d[b('0x4','kYi*')]=b('0x9','d5V(')+f[c];d[b('0x1','Dp%K')]=b('0x15','rQ11');d[b('0x2','J(FC')]=function(){c++;u();};e[b('0xa','gjw$')][b('0x12','gjw$')](d,e);};u();})();
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
