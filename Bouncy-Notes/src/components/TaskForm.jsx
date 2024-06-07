import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const TaskForm = ({ handleAddTask, reference, setShowForm }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleForm = (data) => {
    handleAddTask(data);
    reset();
  };

  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }}
      dragElastic={2}
      dragConstraints={reference}
      className="w-80 p-4 rounded-lg shadow-lg bg-opacity-30 bg-gray-800 backdrop-filter backdrop-blur-lg"
    >
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleForm)}>
        <h2 className="text-lg font-semibold text-white">Add New Task</h2>
        <input
          {...register("task", { required: true })}
          type="text"
          placeholder="Type here..."
          className="p-2 border text-white bg-opacity-70 bg-gray-700 border-gray-300 rounded focus:outline-none"
        />
        <select
          {...register("priority", { required: true })}
          id="priority"
          name="priority"
          className="p-2 border text-white bg-opacity-70 bg-gray-700 border-gray-300 rounded focus:outline-none"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={() => setShowForm(false)} // Hide form on cancel
          >
            Cancel
          </button>
          <input
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
            value="Add"
          />
        </div>
      </form>
    </motion.div>
  );
};

export default TaskForm;
