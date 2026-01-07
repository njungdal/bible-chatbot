import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Memo() {
  const navigate = useNavigate();
  const [memo, setMemo] = useState('');
  const [showSaveMessage, setShowSaveMessage] = useState(false);

  useEffect(() => {
    const savedMemo = localStorage.getItem('userMemo');
    if (savedMemo) {
      setMemo(savedMemo);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('userMemo', memo);
    setShowSaveMessage(true);
    setTimeout(() => setShowSaveMessage(false), 2000);
  };

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← 뒤로가기
      </button>
      <h2 className="page-title">메모장</h2>

      <div className="memo-container">
        <textarea
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="여기에 메모를 작성하세요..."
        />
        <button onClick={handleSave}>저장하기</button>
      </div>

      {showSaveMessage && (
        <div className="save-message">저장되었습니다!</div>
      )}
    </div>
  );
}

export default Memo;
