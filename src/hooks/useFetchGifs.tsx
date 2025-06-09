import {useEffect, useState} from "react";
import type Gif from "../interfaces/gif.ts";
import {getGifs} from "../helpers/getGifs.tsx";

interface FetchState {
    loading: boolean;
    data: Gif[];
    error?: Error | null;
}

export const useFetchGifs = ({category}: { category: string }): FetchState => {
    const [state, setState] = useState<FetchState>({
        loading: true,
        data: [],
        error: null,
    });

    useEffect(() => {
        let isMounted = true;

        const fetchGifs = async () => {
            try {
                const gifs = await getGifs(category);
                if (isMounted) {
                    setState({
                        loading: false,
                        data: gifs,
                        error: null,
                    })
                }
            } catch (error) {
                if (isMounted) {
                    setState({
                        loading: false,
                        data: [],
                        error: error as Error,
                    });
                }
            }
        };

        fetchGifs().then();

        return () => {
            isMounted = false;
        };

    }, [category]);

    return state;
};
