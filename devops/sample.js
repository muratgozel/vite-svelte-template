import fs from 'fs'
import got from 'got'

const url = ''
const res = await got
  .get(url, {
    headers: {
      Origin: process.env.APP_URL
    },
    searchParams: {
      key: '',
    }
  })
  .json()
const filedata = process.env.NODE_ENV == 'development' 
  ? `export default ${JSON.stringify(res, null, 2)}`
  : `export default ${JSON.stringify(res)}`

fs.writeFileSync('./src/lib/store/path/data.js', filedata, 'utf8')