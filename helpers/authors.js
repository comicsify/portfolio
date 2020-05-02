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
 *
 * @param {string} serieName
 * @description Return the pages of a serie from the serie name
 */
export async function listPages(seriePath) {
  const res = await cloudinary.search
    .expression(`folder:"${seriePath}/*"`)
    .max_results(60)
    .execute()

  console.log(` == ${seriePath} ==`)
  console.log(res)
  return res.resources
}

/**
 *
 * @param {string} serieName
 * @description Return the pages of a serie from the serie name
 */

export async function listSeries(author = 'Thorn') {
  const pathToSeries = `${author}/series`
  const pathToSeriesBaseLength = pathToSeries.split('/').length
  const res = await cloudinary.search
    .expression(`folder:${pathToSeries}/* AND  resource_type:image`)
    .max_results(60)
    .execute()

  const arrayOfSeries = res.resources.map(
    (image) => image.folder.split('/')[pathToSeriesBaseLength]
  )
  const setOfSeries = new Set(arrayOfSeries)
  const arrayOfUniqueSeries = Array.from(setOfSeries)

  return arrayOfUniqueSeries.map((serie) => ({
    name: serie,
    path: `${pathToSeries}/${serie}`
  }))
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
