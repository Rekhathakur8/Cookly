/* eslint-disable react/prop-types */

const ImageGallery = ({ images }) => {
  return (
    <div className="flex justify-center mb-6">
      <img
        src={images}
        alt="not present here"
        className="max-w-full h-auto mx-2 rounded-lg shadow-sm"
      />
    </div>
  );
};

export default ImageGallery;
