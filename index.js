const express = require('express')
const app = express()

app.get('/info', (req, res) => {
  const slack_name = req.query.slack_name
  const track = req.query.track
  const utcTime = new Date(Date.now()).toISOString().split('.')[0] + 'Z'
  const status_code = 200

  const info = {
    slack_name: slack_name,
    utc_Time: utcTime,
    track: track,
    status_code: status_code,
  }

  res.json(info)
})
// app.get('/', (req, res) => {
//   res.send('API is running....')
// })

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
