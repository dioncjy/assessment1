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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">GovTech DevOps Internship Assessment1 App</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <AuthorForm addAuthor={addAuthor} />
        <AuthorList authors={authors} />
        <UserList />
      </div>
    </div>
  );
}

export default App;
