# Safari Cache Problem

When using parcel bundler in local development (non https), and making changes in the file, the page reloads but the loaded JS is served from cache with the old contents.

Chrome & Firefox reload the same page correctly with updated JS and not from cache (even with Cache in their devtools enabled, because of the headers!).

These headers are set: 
`Cache-Control: public, max-age=0`


Safari does not reload the JS, no matter in what state I put the "ignore the resource cache" button.

I noticed the problem does only occur when using a preload link, this seems to put the JS into a super cache that is not respecting cache headers nor "ignore the resource cache" button.

````html
<link rel="preload" href="/js.65f22f6b.js" as="script">
````

## Demo:

````
yarn install
yarn start
````
