import { Link, useNavigate } from 'react-router-dom';
import { bibleReadings } from '../data/bibleReadings';

function OnlineRetreat() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← 뒤로가기
      </button>
      <h2 className="page-title">온라인 수련회 참여하기</h2>

      <div className="day-list">
        {bibleReadings.map((reading) => (
          <Link
            key={reading.day}
            to={`/online-retreat/${reading.day}`}
            className="day-item"
          >
            {reading.day}일차
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OnlineRetreat;
