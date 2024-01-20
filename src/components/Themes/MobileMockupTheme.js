import React, { useState, useEffect } from 'react';

const MobileMockupTheme = ({ config }) => {
  const { bgColor, platform, title, font } = config;

  const [image, setImage] = useState()
  const cacheKey = 'coverData_imgLink_mobile'
  useEffect(() => {
    const oldImage = localStorage.getItem(cacheKey);
    if (oldImage) {
      setImage(oldImage);
    }
  }, []);
  // 将 blob 对象转换为 base64 字符串
  const blobToBase64 = (blobUrl) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', blobUrl, true);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) {
          const reader = new FileReader();
          reader.readAsDataURL(xhr.response);
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.onerror = error => reject(error);
        } else {
          reject(new Error(`Failed to load image file: ${xhr.status}`));
        }
      };
      xhr.onerror = error => reject(error);
      xhr.send();
    });
  }
  const saveImage = (imgLink) => {
    setImage(imgLink)
    if (imgLink) {
      //转为base64
      blobToBase64(imgLink).then(res => {
        imgLink = 'data:image/png;base64,' + res
        localStorage.setItem(cacheKey, imgLink);
      })
    } else {
      localStorage.removeItem(cacheKey);
    }
  }
  return (
    <div className="p-4 bg-white">


      <div className={`overflow-y-hidden flex flex-row px-10 items-center justify-center rounded px-8 pt-4  ${platform}`}
        style={{ backgroundColor: bgColor }}
      >


        <h1 className={`${font} text-2xl w-1/2 md:text-4xl px-4 text-white font-bold text-left en-word-break`}>{title}</h1>

        <div className="w-5/12 mx-auto m-4 mt-10 group mx-auto h-full  shadow-lg  flex flex-col  bg-white border-t-8 border-x-8 border-gray-800 rounded-t-3xl border-white">
          <div className="bg-gray-800 h-8 w-full p-2 pb-3 flex items-center rounded-t">

            <div className="flex mx-auto items-center">

              <div className="bg-white h-3 w-3 rounded-full mx-1"></div>
              <div className="bg-white h-2 w-20 rounded-full mx-1"></div>

            </div>


          </div>



          {image ?
            <div className="group relative">
              <img src={image && image} className="object-cover rounded -translate-y-1 h-full" alt="preview" />
              <button
                onClick={() => saveImage('')}
                className="ml-auto mr-4 cursor-pointer">
                <svg className="group-hover:inline-block absolute top-4 right-2  bg-gray-500 hidden w-8 h-8 p-2 text-white rounded-full z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>

              </button>
            </div>
            :
            <div className="flex flex-col px-4 rounded-xl py-20 bg-white items-center justify-center">
              <input type="file"
                className="text-sm  flex flex-col cursor-pointer mb-2 bg-white rounded border"
                onChange={(e) => saveImage(URL.createObjectURL(e.target.files[0]))}
              />
              <span className=" text-center italic">请选择图片</span>
            </div>

          }
        </div>





      </div>


    </div>
  );
}

export default MobileMockupTheme;