const cloudinary = require('cloudinary').v2

require('dotenv').config()

// Test

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

/**
 *
 * @param {string} serieName
 * @description Return the pages of a serie from the serie name
 */
export async function listPages(seriePath, lastImageFirst = true) {
  const res = await cloudinary.search
    .expression(`folder:"${seriePath}/*"`)
    .max_results(60)
    .execute()

  const list = res.resources.map((image, idx) => ({
    publicId: image.public_id,
    src: image.secure_url,
    filename: image.filename,
    id: idx
  }))

  if (lastImageFirst) {
    return list.slice().sort((a, b) => b.filename.localeCompare(a.filename))
  }

  return list.slice().sort((a, b) => a.filename.localeCompare(b.filename))
}
