import React, { useState,useEffect } from 'react';

const PreviewTheme = ({ config }) => {
    const { bgColor, platform, title, font } = config;

    const [image, setImage] = useState()

    const cacheKey='coverData_imgLink_web'
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


            <div className={`overflow-y-hidden flex flex-col rounded px-4 pt-4 ${platform}`}
                style={{ backgroundColor: bgColor }}
            >


                <h1 className={`${font} text-2xl md:text-3xl p-10 text-white font-bold text-center en-word-break`}>{title}</h1>

                <div className="w-10/12 group mx-auto mt-auto mb-0 shadow-lg  flex flex-col bg-white rounded-t-xl border-white">
                    <div className="bg-gray-800 h-8 w-full p-2 flex items-center rounded-t-xl">
                        <div className="bg-red-400 h-3 w-3 rounded-full mx-1"></div>
                        <div className="bg-yellow-400 h-3 w-3 rounded-full mx-1"></div>
                        <div className="bg-green-400 h-3 w-3 rounded-full mx-1"></div>
                        <button
                            onClick={() => saveImage('')}
                            className="ml-auto mr-4 cursor-pointer">
                            <svg className="group-hover:inline-block hidden w-4 h-4 text-white rounded-full z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>

                        </button>
                    </div>



                    {image ?
                        <div className="">
                            <img src={image && image} className="object-cover " alt="preview" />

                        </div>
                        :
                        <div className="flex flex-col p-20 py-28 bg-white items-center justify-center">
                            <input type="file"
                                className="text-xl cursor-pointer mb-2 bg-white rounded border"
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

export default PreviewTheme;