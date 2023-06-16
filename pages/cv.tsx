import React from "react";

type Props = {};

const PdfPreview = (props: Props) => {
  return (
    <div className="h-[100vh]">
      <object
        data="jethro_cv.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <div className="w-full h-full grid place-items-center ring-2">
          <div className="text-center">
            <h3 className="mb-2">Sorry! Something went wrong!</h3>
            <p className="mb-6">Unable to preview CV.</p>
            <a
              className="px-4 py-2 ring-2 ring-inset ring-violet-500 text-violet-500 rounded-md font-semibold hover:bg-violet-500 hover:text-black transition-all duration-500 "
              href="jethro_cv.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </object>
    </div>
  );
};

export default PdfPreview;
