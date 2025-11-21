interface TodoProps {
    text: string;
}

export default function Todo({ text }: TodoProps) {

    return (
        <li className="px-4 py-2 bg-gray-50 border border-gray-200 rounded">
            {text}
        </li>
    )
}
