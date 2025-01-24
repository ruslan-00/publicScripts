# Remove AutoPosts Userscript

This userscript removes all auto posts on the [eRepublik](https://www.erepublik.com/en) website. It also works with dynamically loaded posts that appear after clicking the "Older posts" button.

---

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technical Details](#technical-details)
5. [Author](#author)
6. [Acknowledgments](#acknowledgments)

---

## Description

The **Remove AutoPosts** userscript is designed to automatically remove auto posts on the [eRepublik](https://www.erepublik.com/en) website. These posts are often auto-generated and can clutter the page, making it harder to read useful content.

### Features:
- Removes auto posts when the page loads.
- Works with dynamically loaded posts after clicking the "Older posts" button.
- Uses `MutationObserver` to track changes in the DOM.

---

## Installation

1. Install a userscript manager, such as:
   - [Tampermonkey](https://www.tampermonkey.net/) (recommended)
   - [Greasemonkey](https://www.greasespot.net/) (for Firefox)
   - [Violentmonkey](https://violentmonkey.github.io/)

2. Go to the raw script link:  
   [Install Remove AutoPosts](https://github.com/yourusername/remove-autoposts/raw/main/remove-autoposts.user.js)  
   (Replace `yourusername` with your GitHub username or download the file manually.)

3. Confirm the installation in your userscript manager.

---

## Usage

1. Go to the [eRepublik](https://www.erepublik.com/en) website.
2. The script will automatically remove all auto posts.
3. If you click the "Older posts" button, new auto posts will also be removed.

---

## Technical Details

### How It Works
- The script uses `MutationObserver` to track changes in the DOM.
- After the page loads or when the "Older posts" button is clicked, it searches for all auto posts and removes them.

### Dependencies
- The script works on any modern browser with JavaScript support.
- Requires a userscript manager (e.g., Tampermonkey).

---

## Author

- GitHub: [StribozH](https://github.com/ruslan-00/publicScripts/)  

---

## Acknowledgments

If you find this script useful, you can support the author by giving a ⭐️ on GitHub or sharing it with others.

---