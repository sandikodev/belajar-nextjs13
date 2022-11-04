import useSWR from 'swr';
import { Fetcher } from 'swr'

const fetcher: Fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

const url: string = 'https://jsonplaceholder.typicode.com/posts';

export const useGetPosts = () => {
    const { data, error } = useSWR(url, fetcher);

    return { data, error };
};