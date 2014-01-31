**CP Branded Chrome Extension**

Rebrands Google.com & Chrome's new tab page with the ChallengePost logo and removes the "I'm feeling lucky" button.

<img src="http://gam.s3.amazonaws.com/cdn/cp_branded_ss.png" style = "padding:1px; border:1px solid #021a40;">

Logo replacement uses javascript to override the `src`, `height`, and `width` attributes of the `hplogo` element.

The manifest also overrides the new tab page default with a custom HTML file that redirects to google.com. 

**Installation**

Follow these [instructions](https://developer.chrome.com/extensions/getstarted.html#unpacked)

**Why?**

Uhm, why not? Everbody loves a fun hack!

**Issues**

New tabs are kind of slow on initial startup, (cold opening the browser), but then things seem to bounce back. Probably worth looking into.
