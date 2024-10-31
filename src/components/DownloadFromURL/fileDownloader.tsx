import React, { HtmlHTMLAttributes, useState } from 'react';

function ImageDownloader() {
  const [fileInput, setFileInput] = useState<HTMLInputElement | null>(null);
  const [downloadButton, setDownloadButton] =
    useState<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    const fileInputElement = document.querySelector('input');
    const downloadButtonElement = document.querySelector('button');
    setFileInput(fileInputElement as HTMLInputElement);
    setDownloadButton(downloadButtonElement as HTMLButtonElement);
  }, []);

  const fetchFile = (url: string): void => {
    // getting the file and returning the result as blob
    fetch(url)
      .then((result: Response) => result.blob())
      .then((file: Blob) => {
        const tempUrl: string = window.URL.createObjectURL(file);
        const aTag: HTMLAnchorElement = document.createElement('a');
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*\//, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        if (downloadButton) {
          downloadButton.innerText = 'Download file';
        }
      })
      .catch(() => {
        if (downloadButton) {
          downloadButton.innerText = 'Download file';
        }
        alert('Failed to Download file! ');
      });
  };

  const handleDownloadClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    e.preventDefault(); // to prevent form from submitting too early
    if (fileInput && fileInput.value && downloadButton) {
      downloadButton.innerText = 'Downloading file...';
      fetchFile(fileInput.value);
    }
  };

  return (
    <div className="group m-auto my-5 max-w-[1040px] items-center justify-center rounded-xl from-gray-200 to-[#001b5e] p-5 py-16 text-lg shadow-xl shadow-gray-500 hover:bg-gradient-to-r md:pr-10 ">
      <h1 className="text-3xl font-bold text-[#001b5e] md:pr-20">
        {' '}
        If you can find it, we can download it{' '}
      </h1>
      <form className="mt-16 flex flex-col items-center ">
        <div className="w-full gap-4 py-3 ">
          <div className="flex max-w-[1040px] flex-col items-center p-4">
            <label className=" py-4 text-center text-base font-bold">
              Download a youtube video as MP3
            </label>
            <input
              className="outline-thick mb-5 h-10 rounded-md border-2 bg-white pl-4 text-base "
              type="input"
              placeholder="Enter Youtube URL....."
            />
            <button
              onClick={handleDownloadClick}
              type="button"
              className=" mt-4 w-80 flex-initial rounded-xl bg-[#001b5e] from-[#001b5e] to-green-300 p-4 text-center font-bold text-gray-100 hover:bg-gradient-to-r"
            >
              {' '}
              Download{' '}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ImageDownloader;
