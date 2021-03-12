import React, { useCallback, useEffect,useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './component/search_header/search_header';
import VideoDetail from './component/video_detail/video_detail';
import VideoList from './component/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const search = useCallback(query => {
    setSelectedVideo(null);
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  }, [youtube]);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  }

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, [youtube]);
  /* 
    [] 빈칸이면 한번만 업데이트, 
    아무것도 전달하지 않으면 컴포넌트의 state나 prop이 
    업데이트될때마다 무조건 반복적으로 호출 
  */ 
  return (
    <div className={styles.app} >
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  )
}

export default App;
