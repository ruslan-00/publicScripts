Remove AutoPosts Userscript


This userscript removes all auto posts on the eRepublik website. It also works with dynamically loaded posts that appear after clicking the "Older posts" button.

Table of Contents
Description

Installation

Usage

Technical Details

Author

Description
The Remove AutoPosts userscript is designed to automatically remove auto posts on the eRepublik website. These posts are often auto-generated and can clutter the page, making it harder to read useful content.

Features:

Removes auto posts when the page loads.

Works with dynamically loaded posts after clicking the "Older posts" button.

Uses MutationObserver to track changes in the DOM.

Installation
Install a userscript manager, such as:

Tampermonkey (recommended)

Greasemonkey (for Firefox)

Violentmonkey

Go to the raw script link:
Install Remove AutoPosts
(Replace yourusername with your GitHub username or download the file manually.)

Confirm the installation in your userscript manager.

Usage
Go to the eRepublik website.

The script will automatically remove all auto posts.

If you click the "Older posts" button, new auto posts elements will also be removed.

Technical Details
How It Works
The script uses MutationObserver to track changes in the DOM.

Dependencies
The script works on any modern browser with JavaScript support.

Requires a userscript manager (e.g., Tampermonkey).


Author
StribozH


Acknowledgments
If you find this script useful, you can support the author by giving a ⭐️ on GitHub or sharing it with others.