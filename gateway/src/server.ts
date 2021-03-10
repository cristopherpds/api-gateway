import * as express from 'express'
import * as logger from 'morgan'
import * as helmet from 'helmet'
import * as httpProxy from 'express-http-proxy'

const app = express()

app.use(logger('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', httpProxy('http://localhost:3001', { timeout: 3000 }))
app.use('/products', httpProxy('http://localhost:3002', { timeout: 3000 }))

app.get('/', (req, res) => {
  return res.json({ message: 'Running aplication' })
})

app.listen(3000, () => console.log('App running'))
