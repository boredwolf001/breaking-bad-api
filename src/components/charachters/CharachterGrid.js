import Spinner from '../ui/Spinner'
import CharachterItem from './CharachterItem'

const CharachterGrid = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharachterItem key={item.char_id} item={item} />
      ))}
    </section>
  )
}

export default CharachterGrid
