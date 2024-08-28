import { useState } from 'react';

function AuthorForm({ addAuthor }) {
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authorName) {
      addAuthor(authorName);
      setAuthorName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Author's Name"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AuthorForm;
