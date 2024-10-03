import { useEffect, useState } from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const inputStyle = {
    border: '1px solid #93C5FD',
    borderRadius: '8px',
    padding: '8px 16px',
    width: isMobile ? '100%' : '80%', // Full width on mobile, narrower on desktop
    marginTop: '16px',
    marginBottom: '24px',
    marginLeft:"20px",
    outline: 'none',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const inputFocusStyle = {
    boxShadow: '0 0 0 4px rgba(96, 165, 250, 0.5)',
  };

  const handleFocus = (e) => {
    e.target.style.boxShadow = inputFocusStyle.boxShadow;
  };

  const handleBlur = (e) => {
    e.target.style.boxShadow = 'none';
  };

  return (
    <input
      type="text"
      placeholder="Search by title, author, or genre"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={inputStyle}
    />
  );
};

export default SearchBar;
