window.$ = require('jquery')
$(document).ready(function () {
  $('#root').html('')
  $('#root').append(`
    <h1>Parcel for jQuery</h1>
    <button>Click me!</button>
  `)
  $(document).on('click', 'button', function () {
    alert('Hello, Parcel')
  })
})
