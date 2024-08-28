import { useState } from 'react';

function AuthorForm({ addAuthor }) {
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authorName) { //check if field is not empty
      addAuthor(authorName);
      setAuthorName(''); //clears the text field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Author's Name"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        className="px-4 py-2 border rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600"
      >
        Add Author
      </button>
    </form>
  );
}

export default AuthorForm;
