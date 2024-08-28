import { useState } from 'react';
import AuthorForm from './components/AuthorForm';
import AuthorList from './components/AuthorList';
import UserList from './components/UserList';

function App() {
  const [authors, setAuthors] = useState([]);

  const addAuthor = (authorName) => {
    setAuthors([...authors, authorName]);
  };

  return (
    <div className="App">
      <h1>Assessment1 App</h1>
      <AuthorForm addAuthor={addAuthor} />
      <AuthorList authors={authors} />
      <UserList />
    </div>
  );
}

export default App;
