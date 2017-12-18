import moment from 'moment'
const $ = (e) => document.querySelector(e)
const $$ = (e) => document.querySelectorAll(e)

main()
setInterval(() => {main()}, 1000)


function main () {
  $('#root').innerHTML = `<h1>Parcel for VanillaJS</h1><br><time>${moment().format('LTS')}</time>`
}
