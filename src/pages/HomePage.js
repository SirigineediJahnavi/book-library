import { useState } from 'react';
import { books } from '../services/books';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Inline styles
  const containerStyle = {
    padding: '32px', // 8 * 4px
  };

  const titleStyle = {
    fontSize: '24px', // Equivalent to text-3xl
    fontWeight: 'bold',
    color: '#1E3A8A', // Equivalent to text-blue-800
    marginBottom: '24px', 
    marginLeft:'20px'// 6 * 4px
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Book Library</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;
