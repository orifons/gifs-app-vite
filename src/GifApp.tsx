import {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifApp = () => {
    const [category, setCategory] = useState<string[]>(["Hola!"]);

    return (
        <>
            <div className="header-container">
                <h2 className="text-title">Gif Expert App</h2>
                <AddCategory setCategories={setCategory}/>
            </div>

            <div className="content-container">
                <ol>
                    {category.map((category: string) => (
                        <GifGrid key={category} category={category}/>
                    ))}
                </ol>
            </div>
        </>
    );
};
