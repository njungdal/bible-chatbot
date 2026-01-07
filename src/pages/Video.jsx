import { useNavigate } from 'react-router-dom';

function Video() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← 뒤로가기
      </button>
      <h2 className="page-title">성경통독 참고 영상</h2>

      <div className="youtube-container">
        <iframe
          src="https://www.youtube.com/embed/cMKPbDZhToo"
          title="성경통독 참고 영상"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="info-card" style={{ marginTop: '20px' }}>
        <h3>영상 안내</h3>
        <p>
          성경통독에 도움이 되는 영상입니다.
          성경을 읽기 전이나 읽은 후에 시청하시면
          말씀을 더 깊이 이해하는 데 도움이 됩니다.
        </p>
      </div>
    </div>
  );
}

export default Video;
