import { useState } from "react";
import Todo from "./Todo";

export default function TodoList() {
    const [todos, setTodos] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;
        setTodos([...todos, inputValue.trim()])
        setInputValue('');
    }
    const handleDeleteTodo = (index: number) =>{
        setTodos(todos.filter((_,i)=>i!==index))
    }
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2 w-full max-w-md">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddTodo();
                        }
                    }}
                    placeholder="Add a new todo"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleAddTodo}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                    Add
                </button>
            </div>
            {todos.length === 0 ? (
                <p className="text-gray-500 text-center">할 일이 없습니다. 새로운 할 일을 추가해보세요!</p>
            ) : (
                <ul className="w-full max-w-md space-y-2">
                    {todos.map((todo, index) => (
                        <Todo 
                            key={index} 
                            text={todo} 
                            onDelete={() => handleDeleteTodo(index)}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}
