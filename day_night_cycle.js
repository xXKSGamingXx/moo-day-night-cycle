// ==UserScript==
// @name         MooMoo.io 🎇|🎃 Day/Night
// @namespace    Join our Discord — dsc.gg/ks-moo
// @version      1.0
// @description  MooMoo.io Day Night Evry 10 min
// @author       xX_KSGaming_Xx (KoKsus)
// @match        https://discord.com/login
// @downloadURL  https://github.com/xXKSGamingXx/moo-day-night-cycle/blob/main/day_night_cycle.js
// @updateURL    https://github.com/xXKSGamingXx/moo-day-night-cycle/blob/main/day_night_cycle.js
// @icon         https://imgur.com/UNUydQo.png
// @grant        none
// ==/UserScript==


//Discord: https://discord.gg/9TNezpZEmc
//youtube: https://www.youtube.com/@xx_ksgaming_xx
//github:  https://github.com/xXKSGamingXx
//paypal:  https://www.paypal.com/paypalme/ksfap
//Tipply:  https://tipply.pl/@xx_ksgaming_xx


(function() {
    'use strict';

    const shadowVal = 60;
    let isNight = false;


    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.pointerEvents = 'none';
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${1 - shadowVal / 100})`;
    overlay.style.zIndex = 9999;
    overlay.style.opacity = 0;
    overlay.style.transition = 'opacity 2s';

    document.body.appendChild(overlay);


    function toggleDayNight() {
        isNight = !isNight;
        overlay.style.opacity = isNight ? 1 : 0;
    }

    //day/night mode every 10 min.
    setInterval(toggleDayNight, 600000);
})();
