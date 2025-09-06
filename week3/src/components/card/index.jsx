export default function Card({ celeb }) {
  console.log(celeb.wiki_url)
  const handleClick = () => {
    window.open(celeb.wiki_url, '_blank')
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick()
      }}
      className="h-100 grid grid-cols-2 grid-rows-[1fr_2fr] gap-y-6 items-center p-4 border border-gray-300 rounded-md hover:shadow-2xl"
      key={celeb.id}
    >
      <h2 className="col-span-1 row-span-1 font-bold text-2xl self-baseline-last">
        {celeb.name_kr} ({celeb.name_en})
      </h2>
      <img
        className="col-span-1 row-span-2 w-full h-auto rounded-md object-cover"
        src={celeb.image}
        alt={celeb.name_kr}
      />
      <div className="col-span-1 row-span-1 self-baseline">
        <p>소속사: {celeb.company}</p>
        <p>데뷔: {celeb['debut-date']}</p>
        <p>데뷔곡: {celeb['debut-song']}</p>
        <p>최신곡: {celeb['latest-song']}</p>
      </div>
    </div>
  )
}
