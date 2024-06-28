import { useEffect } from 'react';

interface UseInfiniteScrollParams {
  inView: boolean;
  isFetching: boolean;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
}

const useInfiniteScroll = ({ inView, isFetching, hasNextPage, fetchNextPage }: UseInfiniteScrollParams) => {
  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);
};

export default useInfiniteScroll;
