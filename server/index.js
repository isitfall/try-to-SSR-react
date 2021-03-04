import express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'

import App from "../src/App";

import serverRenderer from "../src/serverRenderer";

const PORT = process.env.PORT || 8000

const app = express()

app.use(express.static('dist'));

app.get('/', (req,res) => {
    res.send(`
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>SSR testing</title>
            </head>
            <body>
                <div id="root">${renderToString(<App/>)}</div>
                <script src="/main.bundle.js"></script>
            </body>
        </html>
    `)
})


app.listen(PORT, () => console.log('Server is working on' + PORT))