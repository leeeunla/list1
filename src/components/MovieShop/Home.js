import { useQuery } from 'react-query';
import { getMoviesNowPlaying, getMoviesPopular, getMoviesTopRated, getMoviesUpcoming } from './api';

export function Home() {
  return <>
    <h1>영화정보를 제공하는 웹페이지입니다.</h1>
  </>
}