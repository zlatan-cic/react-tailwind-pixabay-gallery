import React from "react";

export const ImageCard = ({image}) => {
  const tags = image.tags.split(",")

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <img
          src={image.webformatURL}
          alt=""
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-blue-600 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: {image.views}</strong>
            </li>
            <li>
              <strong>Downnloads: {image.downloads}</strong>
            </li>
            <li>
              <strong>Liks: {image.likes}</strong>
            </li>
            {/* <li className="font-semibold text-gray-300">
              Tags: {image.tags}
            </li> */}
          </ul>
          
        </div>
        <div className="px-6 py-4">
          {tags.map((tag,index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
          ))}
          
        </div>
      </div>
    </>
  );
};


export default ImageCard;