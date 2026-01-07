import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← 뒤로가기
      </button>
      <h2 className="page-title">마중물젊은이공동체는?</h2>

      <div className="info-card">
        <h3>우리의 비전</h3>
        <p>
          마중물젊은이공동체는 젊은이들이 하나님의 말씀을 통해
          영적으로 성장하고, 서로를 격려하며, 함께 신앙의 여정을
          걸어가는 공동체입니다.
        </p>
      </div>

      <div className="info-card">
        <h3>우리의 사명</h3>
        <p>
          말씀을 통한 영적 성장, 기도와 예배를 통한 하나님과의
          깊은 교제, 그리고 사랑과 섬김을 통한 이웃 사랑을
          실천하는 것이 우리의 사명입니다.
        </p>
      </div>

      <div className="info-card">
        <h3>우리의 활동</h3>
        <p>
          정기적인 성경통독, 기도모임, 수련회를 통해 젊은이들이
          믿음 안에서 성장하고, 서로를 격려하며, 하나님 나라를
          위해 함께 일할 수 있도록 돕습니다.
        </p>
      </div>
    </div>
  );
}

export default About;
