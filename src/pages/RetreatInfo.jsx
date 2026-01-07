import { useNavigate } from 'react-router-dom';

function RetreatInfo() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← 뒤로가기
      </button>
      <h2 className="page-title">2026 겨울수련회 알아보기</h2>

      <div className="info-card">
        <h3>수련회 주제</h3>
        <p>
          2026 겨울수련회의 주제는 "말씀으로 새로워지는 삶"입니다.
          30일간의 성경통독을 통해 하나님의 말씀으로 우리의 삶을
          새롭게 변화시키는 시간을 가집니다.
        </p>
      </div>

      <div className="info-card">
        <h3>진행 방식</h3>
        <p>
          온라인으로 진행되는 본 수련회는 매일 정해진 성경본문을
          읽고, 인증게시판에 자신의 생각과 은혜를 나누는 방식으로
          진행됩니다. 참여자들은 서로의 글을 읽으며 격려할 수 있습니다.
        </p>
      </div>

      <div className="info-card">
        <h3>참여 방법</h3>
        <p>
          "온라인 수련회 참여하기" 메뉴에서 해당 일차를 선택하고,
          오늘의 성경본문을 읽은 후 인증게시판에 이름과 함께
          간단한 소감을 남겨주세요. 매일 꾸준히 참여하는 것이 중요합니다.
        </p>
      </div>
    </div>
  );
}

export default RetreatInfo;
