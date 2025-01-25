// ==UserScript==
// @name         Remove AutoPosts
// @namespace    https://github.com/ruslan-00/publicScripts
// @version      1.4
// @description  Deletes autoPosts before they appear after clicking "Older posts"
// @author       Stribozh
// @match        https://www.erepublik.com/*
// @icon         https://www.erepublik.com/favicon.ico
// @updateURL    https://github.com/ruslan-00/publicScripts/raw/refs/heads/main/RemoveAutoPost.user.js
// @downloadURL  https://github.com/ruslan-00/publicScripts/raw/refs/heads/main/RemoveAutoPost.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function removeAutoPosts() {
        const postsWrapper = document.querySelector('.postsWrapper');
        if (!postsWrapper) {
            return;
        }

        const autoPosts = postsWrapper.querySelectorAll('li.autoPost');
        if (autoPosts.length === 0) {
            return;
        }

        autoPosts.forEach(post => {
            post.remove();
        });

    }

    function observePostsWrapper() {
        const postsWrapper = document.querySelector('.postsWrapper');
        if (!postsWrapper) {
            return;
        }

        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    removeAutoPosts();
                }
            }
        });

        observer.observe(postsWrapper, { childList: true, subtree: true });
    }

    function interceptLoadMore() {
        const loadMoreButton = document.querySelector('button[ng-click="loadMore()"]');
        if (loadMoreButton) {
            loadMoreButton.addEventListener('click', (event) => {
                
                event.stopImmediatePropagation();
                event.preventDefault();

                const angularElement = window.angular.element(document.body);
                const scope = angularElement.scope();
                if (scope && scope.loadMore) {
                    scope.loadMore();
                }

                observePostsWrapper();
            });
        }
    }

    window.addEventListener('load', () => {
        removeAutoPosts();
        interceptLoadMore();
        observePostsWrapper();
    });
})();