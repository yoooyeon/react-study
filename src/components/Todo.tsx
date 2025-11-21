interface TodoProps {
    text: string;
    onDelete: () => void;
}

export default function Todo({ text, onDelete }: TodoProps) {

    return (
        <li className="px-4 py-2 bg-gray-50 border border-gray-200 rounded flex items-center justify-between">
           <span>{text}</span> 
           <button 
               onClick={onDelete} 
               className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
           >
               삭제
           </button>
        </li>
    )
}
