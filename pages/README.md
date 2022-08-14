### PLEASE READ

I'm not setting up a clean ready-to-use for you, just to warn you that if you want to use this, **Don't forget** to **configure your own Meta Tags**, as you can see for the og:image that domain was for my website, please edit to your own domain, so the og image will be working fine, but i think you can also use image service such as [imagekit.io](https://imagekit.io/)

On every file inside `./pages` at `<Head>` component, also if you want to change font family, go to `_document.js` file and edit the link, and don't forget to edit the `tailwind.config.js` for `fontFamily`

### About Mardkown file inside articles folder

your markdown filename are the route to the article detail so please write it properly, don't use other symbol or space to have spacing between words, use `-` instead.

a bad example:
`my_article2012.md`

a good example:
`my-article-2012.md`
