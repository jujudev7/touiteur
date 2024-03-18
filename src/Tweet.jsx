export function Tweet({id, name, content, like, onDelete}) {
  const onLike = () => {
    console.log("LIKE", name)
  }

  return (
    <div className="tweet">
      <button onClick={() => onDelete(id)} className="delete">❌</button>
      <h2>{name}</h2>
      <p>"{content}"</p>
      <button onClick={() => onLike()}>{like} ❤️</button>
    </div>
  )
}