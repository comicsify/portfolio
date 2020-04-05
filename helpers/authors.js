const axios = require('axios')
const cloudinary = require('cloudinary').v2

require('dotenv').config()
const str = require('./strings')

// Test

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

/**
 * List all the authors
 */
export async function list() {
  const client = axios.create({
    auth: {
      username: process.env.API_KEY,
      password: process.env.API_SECRET
    }
  })

  const srcUrl = `https://${process.env.API_URL}/${process.env.API_VERSION}/${process.env.CLOUD_NAME}/folders`
  const res = await client.get(srcUrl)
  const list = res.data.folders.map((folder) => ({
    name: folder.name,
    slug: str.slugify(folder.name)
  }))
  return list
}

/**
 * Get the true name of an author form her slug
 */

export async function name(authorSlug) {
  const authorList = await list()
  const candidate = authorList.find((author) => author.slug === authorSlug)

  if (candidate !== undefined) return candidate.name
  return 'Inconnu(e)'
}

/**
 * List the existing author url (for static build)
 */
export async function listURL() {
  const authorList = await list()
  return authorList.map((author) => `/authors/${author.slug}`)
}
