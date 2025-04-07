// src/app/serversvclient/ServerComponent.jsx
export default async function ServerComponent() {
  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();

  return (
    <div>
      <h2>Blogindlæg fra server</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
