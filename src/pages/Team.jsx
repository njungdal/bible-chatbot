import { useNavigate } from 'react-router-dom';

function Team() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← 뒤로가기
      </button>
      <h2 className="page-title">수련회를 섬기는 사람들</h2>

      <div className="info-card">
        <h3>지도목사</h3>
        <p>
          수련회의 영적 방향을 제시하고, 전체적인 말씀
          가르침을 담당하십니다.
        </p>
      </div>

      <div className="info-card">
        <h3>담당목사</h3>
        <p>
          수련회의 실무를 총괄하고, 참여자들의
          영적 성장을 위해 기도하고 돌보십니다.
        </p>
      </div>

      <div className="info-card">
        <h3>고문</h3>
        <p>
          수련회 운영에 대한 조언과 지혜를 나누어주시며,
          젊은이들을 위해 기도로 후원해주십니다.
        </p>
      </div>

      <div className="info-card">
        <h3>지기</h3>
        <p>
          온라인 수련회 플랫폼을 관리하고,
          참여자들의 원활한 활동을 돕습니다.
        </p>
      </div>

      <div className="info-card">
        <h3>청지기</h3>
        <p>
          수련회의 각종 자료를 준비하고,
          참여자들 간의 소통을 활성화시킵니다.
        </p>
      </div>
    </div>
  );
}

export default Team;
