import TrashIcon from "./TrashIcon";

interface TodoProps {
    text: string;
    completed: boolean;
    onDelete: () => void;
    onToggle: () => void;
}

export default function Todo({ text, completed, onDelete, onToggle }: TodoProps) {

    return (
        <li className="px-4 py-2 bg-gray-50 border border-gray-200 rounded flex items-center justify-between">
            <div className="flex items-center gap-2">
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={onToggle}
                    className="w-4 h-4"
                />
                <span className={completed ? 'line-through text-gray-500' : ''}>
                    {text}
                </span>
            </div>
            <button
                onClick={onDelete}
                className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                title="삭제"
            >
                <TrashIcon />
            </button>
        </li>
    )
}
