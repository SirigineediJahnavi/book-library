import { createContext, useState } from 'react';

// Create the context
const LibraryContext = createContext();

// Create a provider component
export const LibraryProvider = ({ children }) => {
  const [myLibrary, setMyLibrary] = useState([]);
  const [message, setMessage] = useState('');

  // Function to add a book to the library
  const addToLibrary = (book) => {
    if (myLibrary.find(b => b.id === book.id)) {
      setMessage('Book is already added to your library!'); // Set message if book already exists
      return;
    }
    setMyLibrary([...myLibrary, book]);
    setMessage(''); // Clear message if added successfully
  };

  // Function to remove a book from the library
  const removeFromLibrary = (id) => {
    setMyLibrary(myLibrary.filter(book => book.id !== id));
    setMessage(''); // Clear message when removing a book
  };

  // Function to clear the message
  const clearMessage = () => {
    setMessage('');
  };

  return (
    <LibraryContext.Provider value={{ myLibrary, addToLibrary, removeFromLibrary, message, clearMessage }}>
      {children}
    </LibraryContext.Provider>
  );
};

// Export LibraryContext as default and named export
export default LibraryContext;
export { LibraryContext };
