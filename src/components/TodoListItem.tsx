import { useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import Input from "./html/Input";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";

export default function TodoListItem({
    todo,
    toggleTodo,
    deleteTodo,
    modifyTodo,
}: {
    todo: Todo;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    modifyTodo: (id: number, title: string) => void;

}) {
    const [isModify, setIsModify] = useState(false);
    const [modifyTitle, setModifyTitle] = useState("");
    const modifyHandler = () => {
        setIsModify((modify) => !modify);
        setModifyTitle(modifyTitle === "" ? todo.title : modifyTitle);
        if (modifyTitle.trim() !== "" && modifyTitle !== todo.title) {
            modifyTodo(todo.id, modifyTitle);
        }
    }
    return (
        <li className={`
            todo__item 
        ${todo.done && "todo__item--complete"}
        `}>
            {!isModify && (
                <Checkbox
                    parentClassName="todo__checkbox-group"
                    type="checkbox"
                    className="todo__checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}>
                    {todo.title}
                </Checkbox>
            )}
            {isModify && (
                <Input
                    type="text"
                    className="todo__modify-input"
                    value={modifyTitle}
                    onChange={(e) => setModifyTitle(e.target.value)} />
            )}
            <div className="todo__button-group">
                <Button className="todo__action-button" onClick={modifyHandler}>
                    <SvgPencil />
                </Button>
                <Button
                    className="todo__action-button"
                    onClick={() => deleteTodo(todo.id)}
                >
                    <SvgClose />
                </Button>
            </div>
        </li>
    );
}