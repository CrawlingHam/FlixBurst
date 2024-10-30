import React, { HtmlHTMLAttributes, useState } from "react";

function ImageDownloader()
{
    const [fileInput, setFileInput] = useState<HTMLInputElement | null>(null);
    const [downloadButton, setDownloadButton] = useState<HTMLButtonElement | null>(null);

    React.useEffect(() => {
        const fileInputElement = document.querySelector("input");
        const downloadButtonElement = document.querySelector("button");
        setFileInput(fileInputElement as HTMLInputElement);
        setDownloadButton(downloadButtonElement as HTMLButtonElement);
    }, []);

    const fetchFile = (url: string): void => {
        // getting the file and returning the result as blob
        fetch(url)
            .then((result: Response) => result.blob())
            .then((file: Blob) => {
                const tempUrl: string = window.URL.createObjectURL(file);
                const aTag: HTMLAnchorElement = document.createElement("a");
                aTag.href = tempUrl;
                aTag.download = url.replace(/^.*\//, '');
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
                URL.revokeObjectURL(tempUrl);
                if (downloadButton) {
                    downloadButton.innerText = "Download file";
                }
            })
            .catch(() => {
                if (downloadButton) {
                    downloadButton.innerText = "Download file";
                }
                alert("Failed to Download file! ");
            });
    };

    const handleDownloadClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault(); // to prevent form from submitting too early
        if (fileInput && fileInput.value && downloadButton) {
            downloadButton.innerText = "Downloading file...";
            fetchFile(fileInput.value);
        }
    };

    return(
        <div className="max-w-[1040px] m-auto my-5 md:pr-10 p-5 py-16 text-lg items-center justify-center shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] ">
        <h1 className="text-3xl font-bold text-[#001b5e] md:pr-20" > If you can find it, we can download it </h1>
        <form className="flex flex-col items-center mt-16 ">
            <div className="gap-4 w-full py-3 ">
                <div className="flex flex-col items-center max-w-[1040px] p-4">
                    <label className=" py-4 text-center text-base font-bold">Download a youtube video as MP3</label>
                    <input className="h-10 bg-white outline-thick border-2 pl-4 text-base rounded-md mb-5 " type="input" placeholder="Enter Youtube URL....."/>
                    <button onClick={handleDownloadClick} type="button" className=" mt-4 p-4 rounded-xl bg-[#001b5e] text-gray-100 font-bold flex-initial w-80 hover:bg-gradient-to-r from-[#001b5e] to-green-300 text-center" > Download </button>
                </div>
                
            </div>
            
        </form>
        </div>
    );
}

export default ImageDownloader;