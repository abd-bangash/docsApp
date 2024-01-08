import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <div>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
        className="card relative flex-shrink-0 w-52 h-60 bg-zinc-900/90 rounded-[40px] text-white  py-8 px-8 overflow-hidden"
      >
        <FaRegFileAlt />

        <p className="text-sm leading-tight mt-2">{data.desc}</p>

        <div className="footer absolute left-0 bottom-0  w-full  py-0 mt-2">
          <div className="flex items-center justify-between mb-3 px-2">
            <h5 className="text-sm">{data.fileSize}</h5>
            <span className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600 text-white">
              {data.close ? (
                <IoClose />
              ) : (
                <GoDownload size="0.8em" color="fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`w-full py-2 ${
                data.tag.tagColor === "blue" ? "bg-sky-600" : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h1 className="text-sm font-semibold">{data.tag.tagTitle}</h1>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
