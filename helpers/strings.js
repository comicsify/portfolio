export function slugify(string) {
  let res = string

  const map = {
    '-': '_',
    a: 'á|à|ã|â|À|Á|Ã|Â',
    e: 'é|è|ê|É|È|Ê',
    i: 'í|ì|î|Í|Ì|Î',
    o: 'ó|ò|ô|õ|Ó|Ò|Ô|Õ|ö',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü|µ',
    c: 'ç|Ç',
    n: 'ñ|Ñ'
  }

  for (const pattern in map) {
    res = res.replace(new RegExp(map[pattern], 'g'), pattern)
  }

  return encodeURI(
    res
      .trim()
      .split(' ')
      .join('-')
      .toLowerCase()
      .normalize('NFC')
      .replace(/[\u0300-\u036F]/g, '')
      .substr(0, 50)
  )
}
