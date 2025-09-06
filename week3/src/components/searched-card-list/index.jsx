import Card from '../card'

export default function SearchedCardList({ list }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
      {list.map((celeb) => (
        <Card celeb={celeb} key={celeb.id} />
      ))}
    </div>
  )
}
