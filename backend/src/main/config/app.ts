import express from 'express'
import 'express-async-errors'
import routes from './routes'
import { errorTreatment } from './errorTreatments'
import upload from './upload'

const app = express()

app.use(express.json())
app.use('/files', express.static(upload.directory))
app.use(routes)
app.use(errorTreatment)

export default app
