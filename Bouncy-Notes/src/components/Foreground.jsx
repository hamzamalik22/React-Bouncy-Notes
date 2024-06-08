import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { GoPlus } from "react-icons/go";
import TaskForm from "./TaskForm";
import db from "../appwrite/appwriteDatabase";
import { Query } from "appwrite";
import { useAuth } from "../utils/AuthContext";
import DropdownMenu from "./DropdownMenu";

function Foreground() {
  const [data, setData] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    init();
  }, [user]);

  const init = async () => {
    const response = await db.Task.list([
      Query.equal("userId", user.$id),
      Query.orderDesc("$createdAt"),
    ]);

    setData(response.documents);
  };

  const ref = useRef(null);

  const [showForm, setShowForm] = useState(false);

  const handleAddTask = (response) => {
    setData((prev) => [...prev, response]);
    setShowForm(false);
  };

  const handleRemoveTask = async (id) => {
    try {
      await db.Task.delete(id);
      setData((prev) => prev.filter((item) => item.$id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <>
      <div
        className="absolute right-[-1%] top-[-3%] rounded-full  bg-white flex justify-center items-center text-black my-8 mx-8 cursor-pointer z-10"
      >
        <DropdownMenu />
      </div>

      <div className="relative">
        <div
          ref={ref}
          className="fixed top-0 left-0 w-full h-full text-zinc-300 flex flex-wrap gap-5 p-5"
        >
          {data.map((item) => (
            <Card
              key={item.$id}
              id={item.$id}
              handleRemoveTask={handleRemoveTask}
              reference={ref}
              data={item}
            />
          ))}
        </div>

        <div
          onClick={() => setShowForm(!showForm)}
          className="absolute w-10 h-10 rounded-full bottom-0 bg-white flex justify-center items-center text-black my-8 mx-8 cursor-pointer z-10"
        >
          <GoPlus size="1.5em" />
        </div>

        {showForm && (
          <div className="z-50 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[180%]">
            <TaskForm
              setShowForm={setShowForm}
              reference={ref}
              handleAddTask={handleAddTask}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Foreground;
