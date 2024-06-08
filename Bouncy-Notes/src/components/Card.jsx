import React, { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference, handleRemoveTask, id }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <motion.div
        drag
        whileDrag={{ scale: 1.1 }}
        dragElastic={2}
        dragConstraints={reference}
        className="relative w-44 h-52 rounded-[20px] bg-zinc-200 text-zinc-900 py-5 px-4 overflow-hidden"
      >
        <IoDocumentTextOutline />
        <h3 className="text-sm mt-2">{data.task}</h3>
        <div
          className={`absolute bottom-0 left-0 py-3 flex justify-between items-center w-full px-4 ${
            data.priority === "Medium"
              ? "bg-yellow-400"
              : data.priority === "High"
              ? "bg-red-400"
              : "bg-green-400"
          }`}
        >
          <h3 className="text-xs">Priority: {data.priority}</h3>
          <span onClick={() => setShowForm(!showForm)}>
            <IoIosCheckmarkCircleOutline />
          </span>
        </div>
      </motion.div>

      {showForm && (
        <motion.div
          drag
          whileDrag={{ scale: 1.1 }}
          dragElastic={2}
          dragConstraints={reference}
          className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[180%] w-72 z-50"
        >
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Confirm Delete
              </h2>
              <p className="mb-4 text-white">
                Has your task been completed? Would you like to delete it?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    handleRemoveTask(id);
                    setShowForm(false);
                  }}
                  className="px-4 py-2 bg-red-500 bg-opacity-70 text-white rounded hover:bg-opacity-100"
                >
                  Delete
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-300 bg-opacity-70 text-gray-700 rounded hover:bg-opacity-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Card;
