"use client";

import React, { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";

const FILE_PDF_URL = "/assets/resume/myCv.pdf";

const DownloadBtn = ({ buttonStyles, iconStyle }) => {
  const [isDownload, setIsDownload] = useState(false);

  useEffect(() => {
    setIsDownload(true);
  }, []);

  const handleDownloadCv = () => {
    const aTag = document.createElement("a");
    if (isDownload) {
      aTag.href = FILE_PDF_URL;
      aTag.download = "resume.pdf";
      document.body.appendChild(aTag);
      aTag.click();
      document.body.removeChild(aTag);
    }
  };
  return (
    <Button
      variant="outline"
      size="lg"
      className={buttonStyles}
      onClick={handleDownloadCv}
    >
      <span>Download CV</span>
      <FiDownload className={iconStyle} />
    </Button>
  );
};

export default DownloadBtn;
