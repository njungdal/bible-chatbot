import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Chatbot() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: '안녕하세요! 마중물젊은이공동체 2026 겨울수련회 AI봇입니다. 수련회에 대해 궁금한 것이 있으시면 물어보세요.'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes('수련회') && (message.includes('무엇') || message.includes('뭐'))) {
      return '2026 겨울수련회는 "말씀으로 새로워지는 삶"이라는 주제로 30일간 성경통독을 진행하는 온라인 수련회입니다.';
    }

    if (message.includes('참여') || message.includes('어떻게')) {
      return '"온라인 수련회 참여하기" 메뉴에서 해당 일차를 선택하고, 성경본문을 읽은 후 인증게시판에 소감을 남겨주세요.';
    }

    if (message.includes('기간') || message.includes('언제')) {
      return '수련회는 30일간 진행됩니다. 매일 정해진 성경본문을 읽고 인증하시면 됩니다.';
    }

    if (message.includes('마중물')) {
      return '마중물젊은이공동체는 젊은이들이 말씀을 통해 영적으로 성장하고 서로를 격려하는 공동체입니다. "마중물젊은이공동체는?" 메뉴에서 더 자세한 정보를 확인하실 수 있습니다.';
    }

    if (message.includes('인증')) {
      return '각 일차 페이지의 인증게시판에 이름과 함께 2줄 정도의 소감을 남겨주시면 됩니다. 다른 참여자들의 글도 읽으며 서로 격려할 수 있습니다.';
    }

    if (message.includes('영상') || message.includes('비디오')) {
      return '"성경통독 참고 영상" 메뉴에서 성경통독에 도움이 되는 영상을 시청하실 수 있습니다.';
    }

    if (message.includes('안녕') || message.includes('hi') || message.includes('hello')) {
      return '안녕하세요! 무엇을 도와드릴까요?';
    }

    return '죄송합니다. 잘 이해하지 못했어요. 수련회 주제, 참여 방법, 인증 방법 등에 대해 물어보시면 답변해드릴 수 있습니다.';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = { type: 'bot', text: getBotResponse(input) };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="page-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← 뒤로가기
      </button>
      <h2 className="page-title">수련회 AI봇</h2>

      <div className="chatbot-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.type}`}>
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="질문을 입력하세요..."
          />
          <button onClick={handleSend}>전송</button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
