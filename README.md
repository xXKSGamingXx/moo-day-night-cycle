# MooMoo.io 🎇|🎃 Day/Night Script

This script toggles between day and night modes every 10 minutes on MooMoo.io, providing a smooth transition effect. 

## Features
- Automatically switches between day and night modes every 10 minutes.
- Smooth transition effect between modes.
- Enhances the visual experience of MooMoo.io.

## Author
- **xX_KSGaming_Xx (KoKsus)**

## Installation

To use this script, you'll need a userscript manager extension for your browser. We recommend using **Tampermonkey**.

### Steps to Install

1. **Install Tampermonkey:**

   - **Chrome:** Go to the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and click "Add to Chrome".
   - **Firefox:** Go to the [Firefox Add-ons page](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) and click "Add to Firefox".
   - **Safari:** Go to the [Mac App Store](https://apps.apple.com/us/app/tampermonkey/id1482490089?mt=12) and install the Tampermonkey app.
   - **Edge:** Go to the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and click "Get".

2. **Install the Script:**

   - Click on the Tampermonkey extension icon in your browser toolbar.
   - Select "Create a new script..." or "Add a new script".
   - Copy and paste the following script into the script editor:

     ```javascript
     // ==UserScript==
     // @name         MooMoo.io 🎇|🎃 Day/Night
     // @namespace    Join our Discord — dsc.gg/ks-moo
     // @version      1.0
     // @description  MooMoo.io Day Night Evry 10 min
     // @author       xX_KSGaming_Xx (KoKsus)
     // @match        https://discord.com/login
     // @downloadURL
     // @updateURL
     // @icon         https://imgur.com/UNUydQo.png
     // @grant        none
     // ==/UserScript==

     // Discord: https://discord.gg/9TNezpZEmc
     // YouTube: https://www.youtube.com/@xx_ksgaming_xx
     // GitHub:  https://github.com/xXKSGamingXx
     // PayPal:  https://www.paypal.com/paypalme/ksfap
     // Tipply:  https://tipply.pl/@xx_ksgaming_xx

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

         // Day/night mode every 10 min.
         setInterval(toggleDayNight, 600000);
     })();
     ```

   - Save the script.

3. **Enjoy the Enhanced MooMoo.io Experience:**
   - Open MooMoo.io and enjoy the new day/night cycle feature!

## Support

- **Discord:** [Join our community](https://discord.gg/9TNezpZEmc)
- **YouTube:** [Watch our videos](https://www.youtube.com/@xx_ksgaming_xx)
- **GitHub:** [Contribute to the project](https://github.com/xXKSGamingXx)
- **PayPal:** [Support us](https://www.paypal.com/paypalme/ksfap)
- **Tipply:** [Send a tip](https://tipply.pl/@xx_ksgaming_xx)

## License

This script is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Enjoy a dynamic visual experience in MooMoo.io with this day/night cycle script! If you have any questions or need support, feel free to join our Discord community.
