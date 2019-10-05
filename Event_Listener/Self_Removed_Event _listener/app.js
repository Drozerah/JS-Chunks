/**
* Self removed Event listener
* https://stackoverflow.com/a/13076344/9370788 
*/
(() => {

  const btn = document.querySelector('button')
  let count = 0

  btn.addEventListener('click', test = e => {
    count ++
    console.log(`cliks ${count}`)
    if (count === 5) {
        e.target.removeEventListener('click', test)
        console.warn('listener removed!')
        e.target.disabled = true
        console.warn('button is disabled!')
    }
  })

})()