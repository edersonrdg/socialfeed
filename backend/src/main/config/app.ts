import express from 'express'
import 'express-async-errors'
import routes from './routes'
import { errorTreatment } from '../../presentation/errors/ErrorTreatment'

const app = express()

app.use(express.json())
app.use(routes)
app.use(errorTreatment)

export default app
