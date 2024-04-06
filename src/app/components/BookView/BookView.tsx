import { db } from '@/common/db'
import { State } from '@/lib/store'
import { useSelector } from 'react-redux'
import { CardViewToggler } from '../CardViewToggler/CardViewToggler'
import { Card } from '../Card/Card'
import { BookMedia } from '@/common/types'

import bookCover from '@/images/k_-_nel_mare_del_tempo.jpg'
import { classNames } from '@/common/classNames'

export const BookView = () => {
  const book: BookMedia = db.books[0]
  const bookView = useSelector((state: State) => state.bookView.value)

  return (
    <section>
      <CardViewToggler />

      <div
        className={classNames(
          'mt-4 grid gap-8',
          bookView === 'list' ? 'mx-auto grid-cols-1' : 'grid-cols-7',
        )}
      >
        <Card
          mediaURI={bookCover.src}
          title={book.title}
          description={book.description}
          actions={book.genres}
          status={book.status.name}
        />
        <Card title={book.title} />
      </div>
    </section>
  )
}
