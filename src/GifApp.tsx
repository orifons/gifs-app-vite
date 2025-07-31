import {useState} from "react";
import {InputSearchCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifApp = () => {
    const [category, setCategory] = useState<string[]>(["Hola!"]);

    return (
        <>
            <div className="header-container">
                <h2 className="text-title">Gif App</h2>
                <InputSearchCategory setCategories={setCategory}/>
            </div>

            <div className="content-container">
                <ol>
                    {category.map((category: string, index) => (
                        <GifGrid key={`${category}${index}`} category={category}/>
                    ))}
                </ol>
            </div>
        </>
    );
};
