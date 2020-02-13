const axios = require('axios')
require('dotenv').config()

export async function list() {
  const client = axios.create({
    auth: {
      username: process.env.API_KEY,
      password: process.env.API_SECRET
    }
  })

  const res = await client.get(
    `https://${process.env.API_URL}/${process.env.API_VERSION}/${process.env.CLOUD_NAME}/folders`
  )
  const list = res.data.folders.map((folder) => folder.name)
  return list
}

export async function listURL() {
  const authorList = await list()
  return authorList.map((author) => `/author/${author}`)
}
