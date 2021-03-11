import React, { useEffect,useState } from 'react';
import './app.css';
import VideoList from './component/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBJjfZNow0c_zHxOYxc1wtcpxsDBhdx5sI", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  /* 
    [] 빈칸이면 한번만 업데이트, 
    아무것도 전달하지 않으면 컴포넌트의 state나 prop이 
    업데이트될때마다 무조건 반복적으로 호출 
  */ 
  return <VideoList videos={videos} />
  
}

export default App;
