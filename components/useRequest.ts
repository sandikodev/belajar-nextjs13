import useSWR from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());
const url = 'https://jsonplaceholder.typicode.com/posts';

export const useGetPosts = () => {
    const { data, error } = useSWR(url, fetcher);
    return {
        data,
        error,
        isLoading: !error && !data
    };
};