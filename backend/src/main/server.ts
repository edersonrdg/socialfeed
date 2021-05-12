import app from './config/app'

const expressServer = () => {
  try {
    app.listen(process.env.PORT, () => console.log('server started on port', process.env.PORT))
  } catch (error) {
    console.error(error)
  }
}

export default expressServer
