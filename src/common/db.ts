import { Author, BookMedia, BookStatus, Edition, Publisher } from './types'

const author: Author = {
  id: '1',
  name: 'Elisabetta Cametti',
}

const giunti: Publisher = {
  id: '1',
  name: 'Giunti',
}

const edition: Edition = {
  name: 'Tascabili',
  publisher: giunti,
  date: new Date('2016-01-04'),
  reprint: 6,
}

const bookStatus: BookStatus = {
  name: 'read',
  startDate: new Date('2021-02-14'),
  endDate: new Date('2021-03-21'),
}

const book: BookMedia = {
  id: '1',
  title: 'K - nel mare del tempo',
  description:
    "È passato un anno dalla tragica conclusione dell'intrigo archeologico in cui Katherine Sinclaire ha rischiato di perdere la vita. L'incubo al quale sperava di essere sfuggita torna ad assillarla per mano di un nemico insospettabile. Durante la presentazione del suo primo romanzo, un uomo si spara di fronte a lei dopo averle lanciato un anello antico con incisi due nomi. Tormentata da una catena di omicidi e da cinque libri enigmatici, Katherine sarà di nuovo risucchiata in una caccia al tesoro sanguinaria che la metterà sulle tracce di Angelica, una donna misteriosa vissuta nel Medioevo. Seguendo i dipinti che la ritraggono, finirà nei cunicoli sotterranei battuti dagli eretici in fuga, e creati da uno stratega per proteggere uno dei più straordinari segreti della storia. Avidità, coraggio, speranza, ira e passione si fondono in un'avventura che si snoda tra la Bretagna e i nascondigli prealpini di Fra Dolcino, dove Katherine capirà di essere legata ad Angelica da un filo invisibile... più forte del destino che sta per guidarla verso una scelta da cui non c'è ritorno.",
  mediaURI: '',
  originalLanguages: ['italian'],
  authors: [author],
  edition: edition,
  genres: ['romance', 'thriller', 'mystery', 'history', 'fantasy'],
  pages: 573,
  status: bookStatus,
  codeNumber: '9788809829213',
  property: 'own',
}

export const db = {
  books: [book],
}
