---
title: Save state locally
date: 2023-11-01
backLabel: <
backUrl: /blog
---

Saving state locally is so good. `localStorage` for small state, and `indexedDB` for big ones.

It works like this:

1. When app starts, it reads data from device;
2. Send the data to redux store, now users see the saved data on screen;
3. At the same time, make the request to server to fetch data;
4. When server responses, save the new data to redux store, and update the screen;

My server is not fast, but since users see something on screen, it feels that everything is fast.

Just now I saved the app settings to localStorage. The settings has user's expiration data. Previously users need to see a big loading spinner before this request finishes, now they go into the app immediately when app opens.

This is nice!

---

Use [Encrypt37](https://app.encrypt37.com/) right now to protect your privacy.
