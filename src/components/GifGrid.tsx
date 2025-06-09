import type Gif from "../interfaces/gif.ts";
import {GifItem} from "./GifItem.tsx";
import {useFetchGifs} from "../hooks/useFetchGifs.tsx";
import {memo} from "react";

// Exportamos el componente GifGrid como un componente memoizado para optimizar el rendimiento
export const GifGrid = memo(({category}: GifGridProps) => {
    // Utilizamos el hook personalizado useFetchGifs para obtener los datos, estado de carga y errores
    const {loading, data: gifs, error} = useFetchGifs({category});

    // Si está cargando, mostramos un spinner de carga
    if (loading) return (
        <div className="loading-spinner"></div>
    );

    // Si hay un error, mostramos el mensaje de error
    if (error) return (
        <div className="gif-error">{error.message}</div>
    );

    // Si todo está bien, renderizamos la cuadrícula de GIFs
    if (gifs.length > 0) return (
        // Contenedor principal de la cuadrícula
        <div className="gif-grid-container">
            {/* Título de la categoría con animación */}
            <h3 className="category-title animate__animated animate__fadeInDown">{category}</h3>
            {/* Contenedor de la cuadrícula de GIFs */}
            <div className="gif-grid">
                {/* Mapeamos cada GIF y renderizamos un componente GifItem */}
                {gifs?.map((gif: Gif) => (
                    <GifItem key={gif.id} {...gif} />
                ))}
            </div>
        </div>
    );
    if (gifs.length == 0) return (
        <div className={'text-center'}>
            <p>No ahi elementos relacionados con <b>{category}</b>.</p>
        </div>
    )
});

type GifGridProps = {
    category: string;
}

GifGrid.displayName = 'GifGrid';
