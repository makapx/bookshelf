/* 
  Digressione sui possibili tipoi di media

  Sicuramente avremmo libri, film, videogiochi, serietv e anime
  Quali altri tipi di media potremmo avere?
  Fumetti, Graphic novel, podcast, musica, opera teatrale, opera artistica (quadro, scultura, altro) o museo?
  aggiungere luoghi o citta?

  il progetto potrebbe trasformarsi in un tracker di 'souls' con cui ci siamo 'incontrati' per mezzo dei media
  ad esempio quante 'souls' ha toccato un autore con il suo libro, quante una citta' o ancora quante un brano?
*/

/* 
  COMMON TYPES
*/

/** Generic structure of media. */
export type Media = {
  /** Unique identifier of the media. */
  id: string
  /** Title of the media. */
  title: string
  /** Subtitle of the media. */
  subtitle?: string
  /** Description of the media. */
  description: string
  /** URL of the graphic representation of the media such as thumbnails, covers, ... */
  media?: string
  /** Release date of the media. */
  releaseDate: Date
  /** Original languages of the media. */
  originalLanguages: string[]
}

/** Generic structure of real person related to a media. */
export type Person = {
  /** Unique identifier of the person. */
  id: string
  /** Full name of the person. */
  name: string
  /** Alias of the person. */
  alias?: string
  /** Role of the person in the media such as Author, Director, Actor, ... */
  role: string
}

/**  Generic structure of company or corporation related to a media. */
export type Company = {
  /** Unique identifier of the company. */
  id: string
  /** Name of the company. */
  name: string
  /** Role of the person in the media such as Publisher, Developer, ... */
  role: string
}

/** Common value of genre. */
export type Genre =
  | 'action'
  | 'adventure'
  | 'drama'
  | 'fantasy'
  | 'history'
  | 'horror'
  | 'mystery'
  | 'romance'
  | 'scifi'
  | 'thriller'

/* 
  BOOK RELATIVES TYPES
*/

/**
 * Represents a generic book and book with sections such as collections of poetry.
 * @see {@link Book}
 * @see {@link BookSection}
 */
export type BookMedia = Book & {
  /** Sections of the book. */
  sections?: BookSection[]
}

/** Rapresents a generic book. @see {@link Media} */
export type Book = Omit<Media, 'releaseDate'> & {
  /** Authors of the book. @see {@link Author} */
  authors: Author[]
  /** Edition of the book. @see {@link Edition} */
  edition: Edition
  /** Genres of the book. */
  genres: BookGenre[]
  /** Total pages of the book. */
  pages?: number
  /** Status of the book. @see {@link BookStatus} */
  status: BookStatus
  /** Code number of the book such as EAN, ISBN, ... */
  codeNumber?: number
  /** Translation of the book. */
  translation?: string
  /** Property of the book. */
  property?: 'own' | 'borrowed' | 'lent' | 'lost'
}

/** Represents an author of a book. @see {@link Person} */
export type Author = Omit<Person, 'role'>

/** Represents an edition of a book. */
export type Edition = {
  /** Name of the edition. */
  name?: string
  /** Publisher of the edition. @see {@link Publisher} */
  publisher: Publisher
  /** Date of the edition. */
  date: Date
  /** Reprint of the edition. */
  reprint?: number
}

/** Represents a publisher of a book. @see {@link Company} */
export type Publisher = Omit<Company, 'role'>

/** Specific generes for books. @see {@link Genre} */
export type BookGenre =
  | Genre
  | 'autobiography'
  | 'biography'
  | 'classical'
  | 'dystopian'
  | 'humor'
  | 'memoir'
  | 'narrative'
  | 'novel'
  | 'poetry'
  | 'self-help'
  | 'young adult'

/** Status of the book. */
export type BookStatus = {
  /** Name of the status. */
  name: 'to-buy' | 'to-read' | 'reading' | 'read' | 'dropped'
  /** Start date of reading */
  startDate?: Date
  /** End date of reading */
  endDate?: Date
}

/** Represents a section of a book, such as a poetry in a poetry book */
export type BookSection = {
  /** Unique identifier of the section */
  id: string
  /** Title of the section */
  title: string
  /** Subtitle of the section */
  subtitle: string
  /** Authors of the section */
  authors: Author[]
  /** Release date of the section */
  releaseDate: Date
  /** Genres of the section */
  genres: BookGenre[]
  /** Total pages of the section */
  pages: number
}
