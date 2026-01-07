import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ref, push, onValue, remove, update } from 'firebase/database';
import { database } from '../firebase';
import { bibleReadings } from '../data/bibleReadings';

function DayDetail() {
  const { day } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [verifications, setVerifications] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const reading = bibleReadings.find(r => r.day === parseInt(day));

  useEffect(() => {
    if (!database) {
      console.warn('Firebase가 설정되지 않았습니다.');
      return;
    }

    const verificationsRef = ref(database, `verifications/day${day}`);
    const unsubscribe = onValue(verificationsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const verificationsList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }));
        verificationsList.sort((a, b) => b.timestamp - a.timestamp);
        setVerifications(verificationsList);
      } else {
        setVerifications([]);
      }
    });

    return () => unsubscribe();
  }, [day]);

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) {
      alert('이름과 메시지를 모두 입력해주세요.');
      return;
    }

    if (!database) {
      alert('Firebase 설정이 필요합니다. firebase.js 파일을 확인하세요.');
      return;
    }

    try {
      if (editingId) {
        const verificationRef = ref(database, `verifications/day${day}/${editingId}`);
        await update(verificationRef, {
          name: name.trim(),
          message: message.trim(),
          timestamp: Date.now()
        });
        setEditingId(null);
      } else {
        const verificationsRef = ref(database, `verifications/day${day}`);
        await push(verificationsRef, {
          name: name.trim(),
          message: message.trim(),
          timestamp: Date.now()
        });
      }

      setName('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting verification:', error);
      alert('인증 등록에 실패했습니다. Firebase 설정을 확인해주세요.');
    }
  };

  const handleEdit = (verification) => {
    setEditingId(verification.id);
    setName(verification.name);
    setMessage(verification.message);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    if (!database) {
      alert('Firebase 설정이 필요합니다.');
      return;
    }

    try {
      const verificationRef = ref(database, `verifications/day${day}/${id}`);
      await remove(verificationRef);
    } catch (error) {
      console.error('Error deleting verification:', error);
      alert('삭제에 실패했습니다.');
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setName('');
    setMessage('');
  };

  if (!reading) {
    return (
      <div className="page-container">
        <button className="back-button" onClick={() => navigate('/online-retreat')}>
          ← 뒤로가기
        </button>
        <h2 className="page-title">해당 일차를 찾을 수 없습니다.</h2>
      </div>
    );
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/online-retreat')}>
        ← 뒤로가기
      </button>
      <h2 className="page-title">{reading.title}</h2>

      <div className="scripture-section">
        <h2>오늘의 성경본문</h2>
        <p><strong>{reading.scripture}</strong></p>
        <p>{reading.passage}</p>
      </div>

      <div className="verification-board">
        <h3>인증게시판</h3>

        <div className="verification-form">
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="오늘의 말씀을 읽고 느낀 점을 나누어주세요 (2줄 정도)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleSubmit}>
              {editingId ? '수정하기' : '인증하기'}
            </button>
            {editingId && (
              <button onClick={handleCancel} style={{ background: '#999' }}>
                취소
              </button>
            )}
          </div>
        </div>

        <div className="verification-list">
          {verifications.length === 0 ? (
            <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>
              아직 인증이 없습니다. 첫 번째로 인증해보세요!
            </p>
          ) : (
            verifications.map((verification) => (
              <div key={verification.id} className="verification-item">
                <div className="name">{verification.name}</div>
                <div className="message">{verification.message}</div>
                <div className="timestamp">{formatDate(verification.timestamp)}</div>
                <div className="actions">
                  <button onClick={() => handleEdit(verification)}>수정</button>
                  <button onClick={() => handleDelete(verification.id)}>삭제</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DayDetail;
