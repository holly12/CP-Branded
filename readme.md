**CP Branded Chrome Extension**

This extension replaces the Google logo on Google.com & Chrome's new tab page with the ChallengePost logo.

The image replacement method uses javascript to override the `src`, `height`, and `width` attributes of the `hplogo` element.

The manifest also overrides the new tab page default with a custom HTML file that redirects to google.com. 

**Installation**

Follow these [instructions](https://developer.chrome.com/extensions/getstarted.html#unpacked)

**Why?**

Uhm, why not? Everbody loves a fun hack!

**Issues**

New tabs are kind of slow on initial startup, (cold opening the browser), but then things seem to bounce back. Probably worth looking into.
