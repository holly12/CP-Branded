**CP Branded**

Just a quick experiment / first foray into Chrome extensions. The goal is to replace the Google logo on Google.com & Chrome's new tab page with the ChallengePost logo.

The image replacement consists of some simple javascript to identify the target `img` element, reset the `src`, and hardcode the `height` & `width` attributes.

To make this work for the new tab page, I am overriding the new tab page default with a custom HTML file that redirects to google.com. 