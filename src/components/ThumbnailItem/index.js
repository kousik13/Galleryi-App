// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage, isActive} = props
  const {imageUrl} = imageDetails

  const imagebuttonvalue = !isActive ? 'unselected-image' : ''

  const selectedImage = () => {
    updateImage(imageUrl)
  }

  return (
    <li className="image-container">
      <img
        className={`image ${imagebuttonvalue}`}
        src={imageUrl}
        alt="thumbnailAltText"
        onClick={selectedImage}
      />
    </li>
  )
}

export default ThumbnailItem
