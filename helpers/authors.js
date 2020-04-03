const axios = require('axios')
require('dotenv').config()

// Test
const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

export async function list() {
  const client = axios.create({
    auth: {
      username: process.env.API_KEY,
      password: process.env.API_SECRET
    }
  })

  // Test
  const folders = await cloudinary.api.resources(
    {
      type: 'upload',
      prefix: 'arnold/'
    },
    function(error, result) {
      console.log(error)
    }
  )
  console.log(folders)

  console.time('list')
  const result = await cloudinary.search
    .expression('folder:thorn/*')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute()

  console.log(result)
  console.timeEnd('list')

  // --------------------------------------- END OF TEST

  const srcUrl = `https://${process.env.API_URL}/${process.env.API_VERSION}/${process.env.CLOUD_NAME}/folders`
  const res = await client.get(srcUrl)
  const list = res.data.folders.map((folder) => folder.name)
  return list
}

export async function listURL() {
  const authorList = await list()
  return authorList.map((author) => `/author/${author}`)
}
