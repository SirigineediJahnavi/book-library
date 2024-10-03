import BookCard from './BookCard';

const BookList = ({ books }) => {
  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)', // For mobile view
    gap: '16px', // Equivalent to gap-4
    '@media (min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)', // For medium screens
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)', // For large screens
    },
  };

  return (
    <div style={listStyle}>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
