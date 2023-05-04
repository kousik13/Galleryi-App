// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const imagebuttonvalue = !isActive ? 'unselected-image' : ''

  const selectedImage = () => {
    updateImage(id)
  }

  return (
    <li className="image-container">
      <button
        type="button"
        className="thumbnail-button"
        onClick={selectedImage}
      >
        <img
          className={`image ${imagebuttonvalue}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
