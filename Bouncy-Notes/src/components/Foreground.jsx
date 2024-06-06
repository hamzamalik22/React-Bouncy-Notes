import React, { useRef, useState } from "react";
import Card from "./Card";
import { GoPlus } from "react-icons/go";
import TaskForm from "./TaskForm";

function Foreground({ data, setData }) {
  const ref = useRef(null);

  const [showForm, setShowForm] = useState(false);

  const handleAddTask = (task) => {
    setData([...data, task]);
    setShowForm(false);
  };  

  const handleRemoveTask = (id) => {
    setData(() => data.filter((item, index) => index !== id));
  };


  return (
    <>
      <div className="relative">
        <div
          ref={ref}
          className="fixed top-0 left-0 w-full h-full text-zinc-300 flex flex-wrap gap-5 p-5"
        >
          {data.map((item, index) => (
            <Card key={index} index={index} handleRemoveTask={handleRemoveTask} reference={ref} data={item} />
          ))}
        </div>

        <div
          onClick={() => setShowForm(!showForm)}
          className="absolute w-10 h-10 rounded-full bottom-0 bg-white flex justify-center items-center text-black my-8 mx-8 cursor-pointer z-10"
        >
          <GoPlus size="1.5em" />
        </div>

        {showForm && (
          <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[180%]">
            <TaskForm reference={ref} handleAddTask={handleAddTask} />
          </div>
        )}
      </div>
    </>
  );
}

export default Foreground;
