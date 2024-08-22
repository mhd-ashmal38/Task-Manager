import React, { useState } from 'react'

interface AddTaskProps {
    addTask: (description: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({addTask}) => {

    const [description, setDescription] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (description) {
            addTask(description);
            setDescription('');
        }
    };

    return (
        <form className="flex mb-4" onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Add a task"
                className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
            >
                Add
            </button>
        </form>
    )
}

export default AddTask
