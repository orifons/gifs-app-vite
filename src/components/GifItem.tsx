export const GifItem = ({title, url}: GifItemProps) => {
    return (
        <div className="gif-card animate__animated animate__fadeIn">
            <img src={url} alt={title} className="gif-image" loading="lazy"/>
            <p className="gif-title">{title}</p>
        </div>
    );
};

type GifItemProps = {
    title: string,
    url: string,
};
