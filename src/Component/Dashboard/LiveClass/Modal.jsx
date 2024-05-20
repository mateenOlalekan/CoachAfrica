import { useState } from "react";

function Modal({ isOpen, onClose, addScheduledClass }) {
  const [title, setTitle] = useState("");
  const [cohort, setCohort] = useState("");

  const handleAddSchedule = () => {
    const newScheduledClass = {
      title: title,
      cohort: cohort,
      status: "ongoing",
    };
    addScheduledClass(newScheduledClass);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">New Schedule</h2>
            <input
              type="text"
              placeholder="Enter class title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
            <input
              type="text"
              placeholder="Enter cohort"
              value={cohort}
              onChange={(e) => setCohort(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddSchedule}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Add
              </button>
              <button
                onClick={onClose}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
