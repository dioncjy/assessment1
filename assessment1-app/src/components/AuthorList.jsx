function AuthorList({ authors }) {
  return (
    <div>
      <h2>Submitted Authors' Name</h2>
      <ol>
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ol>
    </div>
  );
}

export default AuthorList;
