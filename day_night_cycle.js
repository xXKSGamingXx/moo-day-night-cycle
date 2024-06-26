// ==UserScript==
// @name         MooMoo.io 🎇|🎃 Day/Night
// @namespace    Join our Discord — dsc.gg/ks-moo
// @version      1.0
// @description  MooMoo.io Day Night Evry 10 min
// @author       xX_KSGaming_Xx (KoKsus)
// @match        *://*.moomoo.io/*
// @match        *://sandbox.moomoo.io/*
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
    let isNight = true;

    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.pointerEvents = 'none';
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${1 - shadowVal / 100})`;
    overlay.style.zIndex = 9998;
    overlay.style.opacity = 0;
    overlay.style.transition = 'opacity 2s';

    document.body.appendChild(overlay);

    const message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.top = '10px';
    message.style.left = '50%';
    message.style.transform = 'translateX(-50%)';
    message.style.zIndex = 9999;
    message.style.fontSize = '2em';
    message.style.fontWeight = 'bold';
    message.style.color = 'white';
    message.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
    message.style.opacity = 0;
    message.style.transition = 'opacity 1s';
    message.style.pointerEvents = 'none';

    document.body.appendChild(message);

    function toggleDayNight() {
        isNight = !isNight;
        overlay.style.opacity = isNight ? 1 : 0;
        message.style.opacity = 1;
        message.textContent = isNight ? 'Night Mode' : 'Day Mode';

        setTimeout(() => {
            message.style.opacity = 0;
        }, 2000);
    }

    // Day/night mode every 10 min.
    setInterval(toggleDayNight, 600000);


    toggleDayNight();
})();
