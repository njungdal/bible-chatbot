import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="menu-list">
        <Link to="/about" className="menu-item">
          마중물젊은이공동체는?
        </Link>
        <Link to="/retreat-info" className="menu-item">
          2026 겨울수련회 알아보기
        </Link>
        <Link to="/online-retreat" className="menu-item">
          온라인 수련회 참여하기
        </Link>
        <Link to="/video" className="menu-item">
          성경통독 참고 영상
        </Link>
        <Link to="/team" className="menu-item">
          수련회를 섬기는 사람들
        </Link>
        <Link to="/memo" className="menu-item">
          메모장
        </Link>
        <Link to="/chatbot" className="menu-item">
          수련회 AI봇
        </Link>
      </div>
    </div>
  );
}

export default Home;
