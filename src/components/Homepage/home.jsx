import './home.css';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // pass query to the chat page
    navigate('/chat', { state: { query } });
    setQuery('');
  };

  const handleQuickOption = (text) => {
    // clicking a suggested option takes you to the chat page too
    navigate('/chat', { state: { query: text } });
  };

  return (
    <div className="home-container">
      <div className="content-container">
        <div className="main-text">
          <span>Gm gm, How can I help you simplify your design workflow today?</span>
        </div>

        <form className="input-container" onSubmit={handleSubmit}>
          <button type="button" className="icon-btn">
            <Plus size={25} />
          </button>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Create a simple design system..."
          />

          <button type="submit" className="icon-btn">
            <FaArrowCircleRight />
          </button>
        </form>

        <div className="options-container">
          <div className="list-items" onClick={() => handleQuickOption('Create a design system for a fitness app')}>
            <span className="icon"><img src="images/pen.png" alt="" /></span>
            <span className="option-text">Create a design system for a fitness app</span>
          </div>

          <div className="list-items" onClick={() => handleQuickOption('Create a typography system')}>
            <span className="icon"><img src="images/tee.png" alt="" /></span>
            <span className="option-text">Create a typography system</span>
          </div>

          <div className="list-items" onClick={() => handleQuickOption('Create a color palette system')}>
            <span className="icon"><img src="images/paint.png" alt="" /></span>
            <span className="option-text">Create a color palette system</span>
          </div>

          <div className="list-items" onClick={() => handleQuickOption('Create a button component system')}>
            <span className="icon"><img src="images/button.png" alt="" /></span>
            <span className="option-text">Create a button component system</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
