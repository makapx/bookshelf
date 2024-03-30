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

type Media = {
  id: string
  description: string
  media?: string
  releaseDate: Date
  subtitle?: string
  title: string
}

type Person = {
  id: string
  name: string
  role: string
}

type Company = {
  id: string
  name: string
  role: string
}

type Genre =
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

export type BookMedia = Book & {
  sections?: BookSection[]
}

export type Book = Omit<Media, 'releaseDate'> & {
  authors: Author[]
  edition: Edition
  genres: BookGenre[]
  codeNumber?: number
  pages?: number
  status: BookStatus
  property?: 'own' | 'borrowed' | 'lent' | 'lost'
}

export type Author = Person & {
  role: 'author'
}

export type Edition = {
  date: Date
  name?: string
  publisher: Publisher
  reprint?: number
}

export type Publisher = Company & {
  role: 'publisher'
}

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

export type BookStatus = {
  name: 'to-buy' | 'to-read' | 'reading' | 'read' | 'dropped'
  endDate?: Date
  startDate?: Date
}

export type BookSection = {
  id: string
  authors: Author[]
  genres: BookGenre[]
  pages: number
  releaseDate: Date
  subtitle: string
  title: string
}
