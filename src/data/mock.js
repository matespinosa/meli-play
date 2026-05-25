export const user = {
  name: 'Mateo Espinosa',
  email: 'matespinosa09@gmail.com',
  avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
}

export const filters = ['Para mi', 'Mi círculo', 'Series', 'Películas', 'Novedades']

export const featured = {
  id: 'el-secreto',
  image: '/assets/hero-secreto.png',
  badge: 'Estreno',
  title: 'El Secreto de Sus Ojos',
  type: 'Película',
  year: '2009',
  genres: ['Thriller', 'Drama'],
}

export const recommendation = {
  avatar: '/assets/avatar-mama.png',
  reviewerName: 'Mamá',
  timeAgo: 'Hace 2 horas',
  poster: '/assets/the-bear-rec.png',
  isNew: true,
  title: 'The Bear',
  comment: 'Mírala, me hizo recordar cuando cocinaba',
}

export const circleMovies = [
  {
    id: 'the-bear',
    poster: '/assets/the-bear.png',
    title: 'The Bear',
    reviewer: { name: 'Mamá', avatar: '/assets/avatar-mama.png' },
  },
  {
    id: 'past-lives',
    poster: '/assets/past-lives.png',
    title: 'Past lives',
    reviewer: { name: 'Sofi', avatar: '/assets/avatar-sofi.png' },
  },
  {
    id: 'oppenheimer',
    poster: '/assets/oppenheimer.png',
    title: 'Oppenheimer',
    reviewer: { name: 'Carlos', avatar: '/assets/avatar-carlos.png' },
  },
]

export const trending = [
  { id: 'dune-2', poster: '/assets/dune.png', title: 'Dune: Parte 2' },
  { id: 'fallout', poster: '/assets/fallout.png', title: 'Fallout' },
  { id: 'toy-story-4', poster: '/assets/toy-story.png', title: 'Toy Story 4' },
]

export const circleMembers = [
  { id: 'mama', name: 'Mamá', avatar: '/assets/avatar-mama.png', hasUpdate: true },
  { id: 'sofi', name: 'Sofi', avatar: '/assets/avatar-sofi.png', hasUpdate: true },
  { id: 'papa', name: 'Papá', avatar: '/assets/avatar-carlos.png', hasUpdate: false },
]

export const circleFeed = [
  {
    id: 'mama-the-bear',
    reviewerId: 'mama',
    status: 'new',
    movieId: 'the-bear',
    movie: {
      title: 'The Bear',
      poster: '/assets/the-bear.png',
      type: 'Serie',
      year: '2022',
      genre: 'Drama',
    },
    comment: 'Mírala, me hizo recordar cuando eras niño cocinando y querías aprender',
  },
  {
    id: 'sofi-past-lives',
    reviewerId: 'sofi',
    status: 'new',
    movieId: 'past-lives',
    movie: {
      title: 'Past Lives',
      poster: '/assets/past-lives.png',
      type: 'Película',
      year: '2022',
      genre: 'Drama',
    },
    comment: 'Lloramos las dos, te aviso',
  },
  {
    id: 'papa-past-lives',
    reviewerId: 'papa',
    status: 'seen',
    movieId: 'past-lives',
    movie: {
      title: 'Past Lives',
      poster: '/assets/oppenheimer.png',
      type: 'Película',
      year: '2022',
      genre: 'Drama',
    },
    comment: null,
  },
]

export const contacts = [
  { id: 'mama', name: 'Mamá', avatar: '/assets/avatar-mama.png', lastActive: '2h' },
  { id: 'hermana', name: 'Hermana', avatar: '/assets/cast-abby.png', lastActive: '1 d' },
  { id: 'carlos', name: 'Carlos', avatar: '/assets/avatar-carlos.png', lastActive: '32 m' },
  { id: 'tia-ana', name: 'Tía Ana', avatar: '/assets/cast-ayo.png', lastActive: '5d' },
]

// Random portrait service — same N always returns the same face.
const portrait = (gender, n) => `https://randomuser.me/api/portraits/${gender}/${n}.jpg`

export const movieDetails = {
  'the-bear': {
    id: 'the-bear',
    title: 'The Bear',
    image: '/assets/the-bear-hero.png',
    year: '2022',
    seasons: '3 temporadas',
    genre: 'Drama comedia',
    matchScore: 98,
    recommendedBy: 'Mamá',
    note: {
      avatar: '/assets/avatar-mama.png',
      reviewerName: 'Mamá',
      text: 'Mírala, me hizo recordar cuando eras niño cocinando y querías aprender',
    },
    synopsis:
      'Un joven chef de alta cocina vuelve a Chicago para hacerse cargo del restaurante de sándwiches de su familia tras una tragedia. Entre el caos de la cocina y las relaciones familiares, intenta transformar el lugar y honrar el legado de su hermano.',
    cast: [
      { id: 'jeremy', name: 'Jeremy Allen White', photo: '/assets/cast-jeremy.png' },
      { id: 'ayo', name: 'Ayo Edebiri', photo: '/assets/cast-ayo.png' },
      { id: 'abby', name: 'Abby Elliot', photo: '/assets/cast-abby.png' },
      { id: 'ebon', name: 'Ebon Moss-Bachrach', photo: '/assets/cast-ebon.png' },
    ],
  },
  'past-lives': {
    id: 'past-lives',
    title: 'Past Lives',
    image: '/assets/past-lives.png',
    year: '2023',
    seasons: '1h 46min',
    genre: 'Drama romántico',
    matchScore: 94,
    synopsis:
      'Nora y Hae Sung, dos amigos de la infancia profundamente conectados, se separan cuando la familia de ella emigra de Corea. Veinte años después, vuelven a reencontrarse en Nueva York durante una semana decisiva mientras enfrentan las nociones del destino, el amor y las decisiones que dan forma a una vida.',
    cast: [
      { id: 'greta', name: 'Greta Lee', photo: portrait('women', 65) },
      { id: 'teo', name: 'Teo Yoo', photo: portrait('men', 12) },
      { id: 'john', name: 'John Magaro', photo: portrait('men', 33) },
      { id: 'celine', name: 'Celine Song', photo: portrait('women', 21) },
    ],
  },
  oppenheimer: {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    image: '/assets/oppenheimer.png',
    year: '2023',
    seasons: '3h 0min',
    genre: 'Biografía · Drama',
    matchScore: 91,
    synopsis:
      'La historia del físico estadounidense J. Robert Oppenheimer y su rol en el desarrollo de la bomba atómica durante la Segunda Guerra Mundial. Una mirada íntima al hombre detrás del Proyecto Manhattan, su genialidad y las consecuencias morales que cargó el resto de su vida.',
    cast: [
      { id: 'cillian', name: 'Cillian Murphy', photo: portrait('men', 41) },
      { id: 'emily', name: 'Emily Blunt', photo: portrait('women', 8) },
      { id: 'rdj', name: 'Robert Downey Jr.', photo: portrait('men', 55) },
      { id: 'matt', name: 'Matt Damon', photo: portrait('men', 19) },
    ],
  },
  'dune-2': {
    id: 'dune-2',
    title: 'Dune: Parte 2',
    image: '/assets/dune.png',
    year: '2024',
    seasons: '2h 46min',
    genre: 'Ciencia ficción',
    matchScore: 96,
    synopsis:
      'Paul Atreides se une a Chani y los Fremen para emprender un camino de venganza contra los conspiradores que destruyeron a su familia. Mientras enfrenta una elección entre el amor de su vida y el destino del universo conocido, intentará evitar un futuro terrible que solo él puede prever.',
    cast: [
      { id: 'timothee', name: 'Timothée Chalamet', photo: portrait('men', 27) },
      { id: 'zendaya', name: 'Zendaya', photo: portrait('women', 49) },
      { id: 'rebecca', name: 'Rebecca Ferguson', photo: portrait('women', 71) },
      { id: 'javier', name: 'Javier Bardem', photo: portrait('men', 60) },
    ],
  },
  fallout: {
    id: 'fallout',
    title: 'Fallout',
    image: '/assets/fallout.png',
    year: '2024',
    seasons: '1 temporada',
    genre: 'Ciencia ficción',
    matchScore: 89,
    synopsis:
      'Doscientos años después del apocalipsis, los habitantes pacíficos de lujosos refugios subterráneos se ven obligados a regresar a la pesadilla irradiada y absurdamente compleja que sus ancestros dejaron atrás, en lo que fue Los Ángeles.',
    cast: [
      { id: 'ella', name: 'Ella Purnell', photo: portrait('women', 3) },
      { id: 'aaron', name: 'Aaron Moten', photo: portrait('men', 75) },
      { id: 'walton', name: 'Walton Goggins', photo: portrait('men', 84) },
      { id: 'kyle', name: 'Kyle MacLachlan', photo: portrait('men', 6) },
    ],
  },
  'toy-story-4': {
    id: 'toy-story-4',
    title: 'Toy Story 4',
    image: '/assets/toy-story.png',
    year: '2019',
    seasons: '1h 40min',
    genre: 'Animación · Familiar',
    matchScore: 92,
    synopsis:
      'Woody siempre supo cuál era su rol: cuidar de su niño, ya sea Andy o Bonnie. Pero cuando Bonnie suma a Forky a su cuarto, un juguete improvisado, comienza una nueva aventura junto a Buzz Lightyear que les mostrará lo grande que puede ser el mundo para un juguete.',
    cast: [
      { id: 'tom', name: 'Tom Hanks', photo: portrait('men', 36) },
      { id: 'tim', name: 'Tim Allen', photo: portrait('men', 52) },
      { id: 'annie', name: 'Annie Potts', photo: portrait('women', 88) },
      { id: 'tony', name: 'Tony Hale', photo: portrait('men', 91) },
    ],
  },
  'el-secreto': {
    id: 'el-secreto',
    title: 'El Secreto de Sus Ojos',
    image: '/assets/hero-secreto.png',
    year: '2009',
    seasons: '2h 9min',
    genre: 'Thriller · Drama',
    matchScore: 97,
    synopsis:
      'Benjamín Espósito, un oficial retirado de la justicia federal argentina, decide escribir una novela basada en un homicidio sin resolver que investigó hace décadas. El caso lo vuelve a enfrentar con la mujer que ama en silencio y con verdades incómodas que el tiempo no logró borrar.',
    cast: [
      { id: 'ricardo', name: 'Ricardo Darín', photo: portrait('men', 38) },
      { id: 'soledad', name: 'Soledad Villamil', photo: portrait('women', 16) },
      { id: 'pablo', name: 'Pablo Rago', photo: portrait('men', 47) },
      { id: 'guillermo', name: 'Guillermo Francella', photo: portrait('men', 80) },
    ],
  },
}
