function AuthorList({ authors }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Submitted Authors' Name</h2>
        <ol className="list-disc pl-6 space-y-2">
            {authors.map((author, index) => (
            <li key={index} className="text-gray-700">
                {author}
            </li>
            ))}
        </ol>
    </div>
  );
}

export default AuthorList;
