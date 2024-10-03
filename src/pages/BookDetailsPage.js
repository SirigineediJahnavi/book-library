import { useParams, useNavigate } from 'react-router-dom';
import { books } from '../services/books';
import { useContext, useEffect } from 'react';
import { LibraryContext } from '../context/LibraryContext';

const BookDetailsPage = () => {
  const { id } = useParams(); // Get book ID from URL
  const book = books.find(book => book.id === parseInt(id)); // Find the book by ID
  const { addToLibrary, message, clearMessage } = useContext(LibraryContext);
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => clearMessage(), 3000); // Clear message after 3 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [message, clearMessage]);

  if (!book) return <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Book not found</h2>; // If no book is found

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2em', marginBottom: '10px', color: '#1d4ed8' }}>{book.title}</h1>
      <p style={{ fontSize: '1.2em', color: '#1e40af' }}>Author: {book.author}</p>
      <p style={{ fontSize: '1.2em', color: '#1e40af' }}>Genre: {book.genre}</p>
      <p style={{ fontSize: '1.2em', color: '#1e40af' }}>Rating: {book.rating}</p>
      <p style={{ fontSize: '1.2em', color: '#1e40af' }}>Description: {book.description}</p>
      <p style={{ fontSize: '1.2em', color: '#1e40af' }}>Publication Year: {book.publication_year}</p>

      {/* Button container with flexbox for alignment */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
        <button 
          onClick={() => addToLibrary(book)} 
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            border: 'none',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
        >
          Add to My Library
        </button>

        <button 
          onClick={() => navigate('/my-library')} 
          style={{
            backgroundColor: '#22c55e',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            border: 'none',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#16a34a'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#22c55e'}
        >
          Go to Library Page
        </button>

        {/* Back button to return to the previous page */}
        <button 
          onClick={() => navigate(-1)} // Navigate back to the previous page
          style={{
            backgroundColor: '#d1d5db',
            color: 'black',
            padding: '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            border: 'none',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#9ca3af'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#d1d5db'}
        >
          Back
        </button>
      </div>

      {/* Show message if book is already added */}
      {message && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '8px' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default BookDetailsPage;
