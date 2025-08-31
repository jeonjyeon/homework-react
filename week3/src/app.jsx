import CELEBRITY from './data/celebrity.json'

export default function App() {
  return (
    <div>
      {CELEBRITY.map((celeb) => (
        <div key={celeb.id}>
          <h2>{celeb.name_kr}</h2>
          <p>{celeb.company}</p>
          <img src={celeb.image} alt={celeb.name_kr} />
        </div>
      ))}
    </div>
  )
}
