import express from 'express'
import cors from 'cors'
import generate from './generate.js'

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello from our API')
})


app.post("/generate", async (req, res) => {
  const queryDescription = req.body.queryDescription
  //console.log('received query', queryDescription);
  //res.json({ response: `you sent this: ${queryDescription}`})
  try {
    const sqlQuery = await generate(queryDescription)
    res.json({ response: sqlQuery })
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

