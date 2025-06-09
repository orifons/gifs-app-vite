import {useState} from "react";
import type {ChangeEvent, FormEvent} from "react";

export const AddCategory = ({setCategories}: AddCategoryProps) => {
    const [inputValue, setInputValue] = useState("");

    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={onSubmitForm}>
            <input
                id=""
                name="category"
                type="text"
                value={inputValue}
                onChange={onChangeValue}
                placeholder="Buscar Gifs"
                autoFocus
            />
        </form>
    );
};

type AddCategoryProps = {
    setCategories: (callback: (categories: string[]) => string[]) => void;
}

