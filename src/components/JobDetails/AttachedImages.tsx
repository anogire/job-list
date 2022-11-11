import React from "react";

interface ImgProps {
  pictures: string[],
}

export const AttachedImages: React.FC<ImgProps> = ({ pictures }) => {
  return (
    <>
      <h2 className="font-title font-bold text-3xl text-general-dark tracking-general border-b-map-regular border-b pb-2.5 mb-4">
        Attached images
      </h2>
      <ul className="flex mb-5 -mx-1.5">
        {
          pictures.map((picture, i) => {
            return (
              <li key={i} className="basis-[32%] mx-1.5">
                <img src={picture} className="w-full h-28 object-cover rounded-lg" alt="job vision" />
              </li>
            )
          })
        }
      </ul>
    </>
  );
}