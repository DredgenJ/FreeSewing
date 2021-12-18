import path from 'path'
import fs from 'fs'
import set from 'lodash.set'
import get from 'lodash.get'

// Some arbitrary future time
const future = new Date('10-12-2026').getTime()


/*
 * Main method that does what needs doing
 */
export const prebuildNavigation = (mdxPages, strapiPosts, site) => {
  const nav = {}
  for (const lang in mdxPages) {
    nav[lang] = {}

    // Handle MDX content
    for (const [slug, page] of Object.entries(mdxPages[lang])) {
      const chunks = slug.split('/')
      set(nav, [lang, ...chunks], {
        __title: page.title,
        __linktitle: page.linktitle || page.title,
        __slug: slug,
        __order: page.order,
        //__children: {}
      })
      //const children = get(nav, [lang, ...chunks.slice(0, -1), '_children'], {})
      //children[page.order || slug] = slug
      //set(nav, [lang, ...chunks.slice(0, -1), '_children'], children)
    }

    // Handle strapi content
    for (const type in strapiPosts[lang]) {
      set(nav, [lang, type], {
        __title: type,
        __linktitle: type,
        __slug: type,
        __order: type,
        //__children: {}
      })
      for (const [slug, page] of Object.entries(strapiPosts[lang][type])) {
        const chunks = slug.split('/')
        set(nav, [lang, type, ...chunks], {
          __title: page.title,
          __linktitle: page.linktitle,
          __slug: type + '/' + slug,
          __order: (future - new Date(page.date).getTime()) / 100000,
          //__children: {}
        })
        //const children = get(nav, [lang, type, '_children'], {})
        //children[page.date+slug] = slug
        //set(nav, [lang, type, '_children'], children)
      }
    }
  }
  fs.writeFileSync(
    path.resolve('..', `freesewing.${site}`, 'prebuild', `navigation.js`),
    `export default ${JSON.stringify(nav, null ,2)}`
  )

}