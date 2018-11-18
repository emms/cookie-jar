import resizeImage from 'resize-image'

export const sleep = ms => new Promise((resolve) => setTimeout(() => resolve(true), ms))

export const getDataUrl = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = () => {
      const dataUrl = reader.result
      resolve(dataUrl)
  };
  reader.onabort = () => reject('file reading was aborted')
  reader.onerror = () => reject('file reading has failed')

  reader.readAsDataURL(file)
})

export const resizeDataUrl = dataUrl => new Promise((resolve, reject) => {
  const img = new Image()
  img.onload = () => {
    const aspectRatio = img.width / img.height
    const shortestEdgeWidth = 500
    let newWidth, newHeight

    if ( aspectRatio > 1 ) {
      newHeight = shortestEdgeWidth 
      newWidth =  shortestEdgeWidth * aspectRatio
    } else {
      newWidth = shortestEdgeWidth
      newHeight = shortestEdgeWidth / aspectRatio
    }

    const newDataUrl = resizeImage.resize(img, newWidth, newHeight, resizeImage.PNG)
    resolve(newDataUrl)
  }
  img.onerror = () => reject('Failed to resize image')
  img.src = dataUrl
})