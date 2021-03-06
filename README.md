# robinwkurtz.github.io

Welcome to my personal website!

## "Stack"

- html
- css
- javascript

With the help of:
- gulp[1]
- markdown
- scss


[1]: **With gulp, we use various packages such as:**
- [gulp-file-include](https://github.com/haoxins/gulp-file-include)
- [gulp-markdown](https://github.com/sindresorhus/gulp-markdown)

## Development

Note that we use markdown as our content source and compile it to html, we then include the html files into our pages.

### Structure

```
robinwkurtz.github.io/
│   README.md # you are here
│   index.html # compiled
│   about.html # compiled
│   cv.html # compiled
|   wishlist.html # unrelated
│   ...
│
└─── assets/
│   └─── scss/ # this is where you need to edit styles
│   |   │   style.scss
│   |   │   ...
|   |
│   └─── scripts/
│   |   │   main.js # this is where you need to edit the site scripts
│   |   │   main.compiled.js # DO NOT EDIT THIS FILE
|   | 
│   └─── css/
│       │   style.compiled.css # DO NOT EDIT THIS FILE
| 
└─── markup/
│   │   index.html # this is where you need to edit the page structure
│   │   about.html # this is where you need to edit the page structure
│   │   cv.html # this is where you need to edit the page structure
│   │
│   └─── compiled/ # DO NOT EDIT THESE FILES
│   |   │   ...
│   |
│   └─── content/ # this is where you need to edit the page content
│       │   ...
│  
└─── partials/ # this is where you need to edit "partials" such as the head.html or header.html
```

### Commands

```bash
yarn # install dependencies

yarn dev # run gulp watch

yarn start # run gulp 
```
