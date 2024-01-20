import React, { useContext, useState } from "react";
// import { exportComponentAsPNG } from "react-component-export-image";
import "./CoverImage.css";
import { ImgContext } from "../utils/ImgContext";
import unsplash from "../utils/unsplashConfig";
import html2canvas from 'html2canvas'

const ComponentToImg = (props) => {

  const [loading, setLoading] = useState(false)
  const [copyloading, setCopyloading] = useState(false)
  const [msg, setMsg] = useState('')

  const { unsplashImage } = useContext(ImgContext);
  const componentRef = React.createRef();


  async function copyImageToClipboard(imageUrl) {
    const img = new Image();
    img.src = imageUrl;
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        const item = new window.ClipboardItem({ 'image/png': blob });
        navigator.clipboard.write([item]);
        console.log('复制成功');
      }, 'image/png');
    };
  }

  async function saveImage(data) {
    var a = document.createElement("A");
    a.href = data;
    // a.download = `cover.png`;
    a.download = getDownName() + '.png';
    document.body.appendChild(a);
    setLoading(false)
    a.click();
    document.body.removeChild(a);
    setMsg('下载成功！')
  }
  function getDownName() {
    var now = new Date();

    var year = now.getFullYear(); // 获取当前年份（四位数）
    var month = String(now.getMonth() + 1).padStart(2, '0'); // 获取当前月份，并补零
    var day = String(now.getDate()).padStart(2, '0'); // 获取当前日期，并补零
    var hours = String(now.getHours()).padStart(2, '0'); // 获取当前小时，并补零
    var minutes = String(now.getMinutes()).padStart(2, '0'); // 获取当前分钟，并补零

    var datetimeString = year + '-' + month + '-' + day + '-' + hours + '-' + minutes;
    console.log(datetimeString); // 输出当前的年月日时间分钟字符串
    return datetimeString
  }
  const copyImage = async () => {
    // exportComponentAsPNG(componentRef, 'cover')
    setCopyloading(true)
    setMsg('图片生成中...')

    let data = await getData(componentRef.current);
    // console.log(data)
    await copyImageToClipboard(data);


    if (unsplashImage) {
      unsplash.photos.trackDownload({ downloadLocation: unsplashImage.downloadLink, });
    }
    setCopyloading(false)
    setMsg('复制成功！')
  }
  const downloadImage = async () => {
    // exportComponentAsPNG(componentRef, 'cover')
    setLoading(true)
    setMsg('图片生成中...')
    let data = await getData(componentRef.current);
    // console.log(data)
    await saveImage(data);


    if (unsplashImage) {
      unsplash.photos.trackDownload({ downloadLocation: unsplashImage.downloadLink, });
    }
  }

  async function getData(element) {
    return await html2canvas(element, {
      useCORS: true,
      scale: (props.scale * 0.1).toFixed(1),
      backgroundColor: null,
      allowTaint: true,
      height: element.offsetHeight,
      width: element.offsetWidth,
    })
      .then(canvas => {
        return canvas.toDataURL('image/png');
      });
  }


  return (
    <React.Fragment>
      <div ref={componentRef}>{props.children}</div>
      <div className="flex ">
        <button
          title="复制到粘贴板"
          className="border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4"
          onClick={() => copyImage()}>


          <span>
            {
              copyloading ?
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white animate animate-spin" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
                : <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
            }
          </span>

          <span className="mx-2">复 制</span>
        </button>
        <button
          title="下载到本地"
          className="border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4"
          onClick={() => downloadImage()}>


          <span>
            {
              loading ?
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white animate animate-spin" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
                :
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            }
          </span>

          <span className="mx-2">下 载</span>
        </button>
      </div>
      <div>{msg}</div>
    </React.Fragment>
  );

}

export default ComponentToImg;
