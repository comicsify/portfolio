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
export async function listPages(seriePath) {
  const res = await cloudinary.search
    .expression(`folder:"${seriePath}/*"`)
    .max_results(60)
    .execute()

  return res.resources.map((image, idx) => ({
    publicId: image.public_id,
    src: image.secure_url,
    id: idx
  }))
}
