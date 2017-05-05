const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000
const app = express()

const reactAppEntry = 'index.html'
// please serve the static files
app.use(express.static(__dirname + '/public'))

// catch all routes and redirect to react-app entry point
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'public', reactAppEntry)))

app.listen(port)
console.log(`Server started on port ${port}. Directing all traffic to react-app entry point: ${reactAppEntry}`)
