

function Card({element}) {
  return (
    <div className="card">
      <img src={element.img} alt={element.title}/>
      <h2>{element.title}</h2>
      <p>{element.time}</p>
    </div>
  )
}

export default Card
