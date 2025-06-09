import { memo, useState } from "react";
import type Gif from "../interfaces/gif";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import "./GifGrid.css";

type GifGridProps = {
    category: string;
}

const LoadingSpinner = () => (
    <div className="loading-spinner" />
);

const ErrorMessage = ({ message }: { message: string }) => (
    <div className="gif-error">{message}</div>
);

const EmptyState = ({ category, onClose }: { category: string; onClose: () => void }) => (
    <div className="empty-state">
        <button className="empty-state-close" onClick={onClose}>×</button>
        <div className="empty-state-icon">🔍</div>
        <h3>No se encontraron GIFs</h3>
        <p>No hay elementos relacionados con <b>{category}</b></p>
        <p className="empty-state-suggestion">Intenta con otra categoría o término de búsqueda</p>
    </div>
);

const GifGrid = memo(({ category }: GifGridProps) => {
    const [isEmptyStateVisible, setIsEmptyStateVisible] = useState(true);
    const { loading, data: gifs, error } = useFetchGifs({ category });

    const handleCloseEmptyState = () => setIsEmptyStateVisible(false);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error.message} />;
    if (!gifs.length) return isEmptyStateVisible ? <EmptyState category={category} onClose={handleCloseEmptyState} /> : null;

    return (
        <div className="gif-grid-container">
            <h3 className="category-title animate__animated animate__fadeInDown">{category}</h3>
            <div className="gif-grid">
                {gifs.map((gif: Gif) => (
                    <GifItem key={gif.id} {...gif} />
                ))}
            </div>
        </div>
    );
});

GifGrid.displayName = 'GifGrid';

export { GifGrid };
