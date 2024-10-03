import { Link } from 'react-router-dom';

const BookCard = ({ book, onRemove }) => {
  // Inline styles
  const cardStyle = {
    backgroundColor: 'white',
    border: '1px solid #BFDBFE', // Equivalent to border-blue-200
    borderRadius: '8px', // Equivalent to rounded-lg
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Equivalent to shadow-md
    padding: '16px', // Equivalent to p-4
    margin: '16px', // Equivalent to m-4
  };

  const titleStyle = {
    fontSize: '1.125rem', // Equivalent to text-lg
    fontWeight: 'bold',
    color: '#1E3A8A', // Equivalent to text-blue-800
  };

  const authorGenreStyle = {
    color: '#2563EB', // Equivalent to text-blue-600
  };

  const buttonStyle = {
    backgroundColor: '#F87171', // Equivalent to bg-red-500
    color: 'white',
    padding: '8px 12px', // Equivalent to px-3 py-1
    borderRadius: '4px', // Equivalent to rounded
    cursor: 'pointer',
    transition: 'background-color 0.2s', // For hover effect
  };

  const buttonHoverStyle = {
    backgroundColor: '#F87171', // Equivalent to bg-red-600
  };

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{book.title}</h3>
      <p style={authorGenreStyle}>{book.author}</p>
      <p style={authorGenreStyle}>{book.genre}</p>
      <p style={authorGenreStyle}>Rating: {book.rating}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
        <Link to={`/book/${book.id}`} style={{ color: '#3B82F6', textDecoration: 'underline' }}>
          More Details
        </Link>
        {onRemove && (
          <button
            onClick={onRemove}
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
