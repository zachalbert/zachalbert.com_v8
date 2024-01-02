"use client";
import { OverflowMenuHorizontal, ZoomArea, ZoomIn } from "@carbon/icons-react";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import cx from "classnames";

const Gallery = ({ images, cols = 3 }: any) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  // const galleryTab = [
  //   // you can add more image if you want
  //   {
  //     imageUrl: "/portfolio/moment-app/component-lib.png",
  //     caption:
  //       "A standard component library enabled users to select and customize prebuilt components",
  //   },
  //   {
  //     imageUrl: "https://themewagon.github.io/snapshot/images/model-2.jpg",
  //     type: "Nature",
  //     title: "Beautiful Work",
  //   },
  //   {
  //     imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg",
  //     type: "Nature",
  //     title: "Beautiful Work",
  //   },
  //   {
  //     imageUrl: "https://themewagon.github.io/snapshot/images/model-4.jpg",
  //     type: "Nature",
  //     title: "Beautiful Work",
  //   },
  //   {
  //     imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
  //     type: "Nature",
  //     title: "Beautiful Work",
  //   },
  // ];

  const slides = images.map((item: any) => ({
    src: item.imageUrl,
    width: 2880,
    height: 1804,
    srcSet: [
      { src: item.imageUrl, width: 720, height: 451 },
      { src: item.imageUrl, width: 1440, height: 902 },
      { src: item.imageUrl, width: 2880, height: 1804 },
    ],
  }));

  // Required for tailwind's jit creation
  let gridCols = "";
  switch (cols) {
    case "2":
      gridCols = "md:grid-cols-2";
      break;
    case "3":
    default:
      gridCols = "md:grid-cols-3";
  }

  return (
    <div className="w-full">
      <div className={cx("grid", "gap-6", gridCols)}>
        {images.map((x: any, index: number) => {
          return (
            <div key={index}>
              <div
                className={cx(
                  "aspect-video",
                  "relative",
                  "group",
                  "cursor-pointer"
                )}
              >
                {/* <div className="group h-full"> */}
                <div
                  className={cx(
                    "bg-cover",
                    "bg-center",
                    "h-full",
                    "w-full",
                    "bg-no-repeat",
                    "rounded-xl",
                    "shadow-2xl"
                  )}
                  style={{ backgroundImage: `url("${x.imageUrl}")` }}
                ></div>

                <div
                  className={cx(
                    "bg-black",
                    "opacity-0",
                    "group-hover:opacity-60",
                    "absolute",
                    "inset-0",
                    "flex",
                    "items-center",
                    "justify-center",
                    "transition-all",
                    "duration-500",
                    "ease-in-out",
                    "rounded-xl"
                  )}
                  onClick={() => {
                    setOpen(true);
                    setImage(x.imageUrl);
                  }}
                >
                  <ZoomIn size={24} className={cx("!fill-white")} />
                </div>
              </div>
              <div
                className="hidden md:block mt-2 text-base"
                dangerouslySetInnerHTML={{ __html: x.caption }}
              />
            </div>
          );
        })}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
};

export default Gallery;
