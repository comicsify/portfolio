# portfolio

> A static portfolio

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Tuto links

### Nuxt

- [portfolio and nuxt](https://itnext.io/building-the-ultimate-portfolio-site-with-nuxt-js-and-netlify-beautiful-blazing-fast-100-seod-102913a60cfd)
- [deploying on github](https://fr.nuxtjs.org/faq/github-pages/)
- [gitppages](https://pages.github.com/)
- [nuxt](https://fr.nuxtjs.org/guide/directory-structure)
- [Building dynamic route](https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/)

### CSS Flexbox nice pattern

- [Typical flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)
- [Flex box pattern](https://tobiasahlin.com/blog/common-flexbox-patterns/)
- [pre-rendering dynamic route](https://medium.com/javascript-in-plain-english/generate-static-websites-with-nuxt-4fd0491340e)

## TODO

- list an author portfolio
- list a portfolio images
- list stories from an author
- list episode from a story
- list image from an episode
- make a comics reader component :
    - scroll
    - turbomedia
- make a "buy the pdf" ( for a storie ) components and microservice
- make a "subscribe" button and service
- make a social card component
- search tags
- css : make a nice grid

### External Microservices

- comics api (List and Get episodes, tags)
- Embeddings components
- build and downlaod pdf
- marketplace share

## Note from Authors 

### Thorn

### Boulet 

Pour moi ce serait surtout une histoire de supprimer des trucs plus que d'en ajouter.
Par exemple, le champ "commentaires", les liens, le calendrier...

Moi dans l'idéal il y aurait une mise en page ultra simple, avec un toggle anglais/français, avec genre 3 onglets:
-Les notes
-Les archives (sans date, mais avec juste l'ordre de publication et le système de recherche par mots-clefs)
-Une carte de visite: une présentation sobre avec les liens vers les réseaux sociaux et un champ "contact"

Moi la fonctionnalité qui serait top serait un bouton "acheter les livres numériques" en bas de page pour pouvoir vendre les .pdf avec un système de paiement !