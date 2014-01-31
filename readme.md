**CP Branded Chrome Extension**

Rebrand Google & Chrome's new tab page with the ChallengePost logo.

<img src="http://gam.s3.amazonaws.com/cdn/cp_branded_ss.png" style = "padding:1px; border:1px solid #021a40;">

Logo replacement uses javascript to override the `src`, `height`, and `width` attributes of the `hplogo` element.

The manifest also overrides the default new tab page with custom HTML that redirects to Google. 

**Installation**

Follow these [instructions](https://developer.chrome.com/extensions/getstarted.html#unpacked).

**Why?**

Uhm, why not? Everbody loves a fun hack (and cats)!

**Issues**

New tabs are kind of slow on initial startup, (cold opening the browser), but then things seem to bounce back. Probably worth looking into.
