import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'


function renderHTML(html) {
    return `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>SSR testing</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script src="/main.bundle.js"></script>
            </body>
        </html>
    `
}

export default function serverRenderer() {
    return (req, res) => {
        const htmlString = renderToString(<App > SOMETHING </App>)
        console.log(htmlString)

        res.send(renderHTML(htmlString))
    }
}