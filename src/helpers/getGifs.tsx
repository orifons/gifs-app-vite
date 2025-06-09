const env: ImportMetaEnv = import.meta.env;

export const getGifs = async (category: string) => {
    const baseUrl: string = env.VITE_GIPHY_API_BASE_URL;
    const apiKey: string = env.VITE_GIPHY_API_KEY;
    const endpointSearch: string = env.VITE_GIPHY_API_ENDPOINT_SEARCH;
    const urlApi: string = `${baseUrl}${endpointSearch}?q=${encodeURI(category)}&limit=12&lang=es&api_key=${apiKey}`;
    const resp: Response = await fetch(urlApi);
    const {data} = await resp.json();
    return data.map(
        (gif: {
            id: string;
            title: string;
            images: { original: { url: string } };
        }) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.original.url,
            };
        }
    );
};
