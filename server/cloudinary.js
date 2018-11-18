import cloudinary from 'cloudinary'

cloudinary.config({ 
  cloud_name: 'cookie-jar', 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export const uploadToCloudinary = file => new Promise((resolve, reject) => {
  cloudinary.v2.uploader.upload(file, (error, result) => {
    if (error) reject(error)
    resolve(result)
  })
})