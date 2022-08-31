import express from 'express'

const app = express()
app.use(express.static('public'))
app.use(express.static('dist'))

const port = process.env.PORT || 3000;
app.listen(port, _ => console.log(`listening on port ${port}\n`))

if (process.env.NODE_ENV?.match(/^dev/)) {
  const { default: Webpack } = await import('webpack');
  const compiler = Webpack({ mode: 'development' })
  compiler.watch({}, (_, stats) => {
    const { assetsByChunkName, errors, warnings } = stats.toJson('minimal')
    console.log(`webpack build @ ${Date.now()}`, { ...assetsByChunkName, errors, warnings })
  });
}

