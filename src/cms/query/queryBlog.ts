export const queryArticles = `
query MyQuery {
  allArticles(filter: {author: {eq: "Kb5ZP6pNTcmC4Hx_zoPa_A"}}) {
    title
    teaser
    tags {
      libelle
      id
    }
    author {
      id
      firstname
      lastname
      social
      socialUrl
      pictureProfil {
        url
        width
        height
      }
    }
    image {
      width
      height
      alt(locale: fr)
      blurUpThumb
      url
    }
    slug
    readingTime
  }
}
`;
