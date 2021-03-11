import React, { useEffect,useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './component/search_header/search_header';
import VideoList from './component/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  /* 
    [] 빈칸이면 한번만 업데이트, 
    아무것도 전달하지 않으면 컴포넌트의 state나 prop이 
    업데이트될때마다 무조건 반복적으로 호출 
  */ 
  return (
    <div className={styles.app} >
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />
    </div>
  )
}

export default App;
