import React, { useContext } from 'react';
import LibraryContext from '../context/LibraryContext';
import BookCard from '../components/BookCard';

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1d4ed8', marginBottom: '1.5rem' }}>
        My Library
      </h1>
      {myLibrary.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {myLibrary.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onRemove={() => removeFromLibrary(book.id)}
            />
          ))}
        </div>
      ) : (
        <p style={{ color: '#3b82f6' }}>Your library is empty.</p>
      )}
    </div>
  );
};

export default MyLibraryPage;
