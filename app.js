let count = 0
const btns = document.querySelectorAll('.btns')
const value = document.querySelector('.currentCount')

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList
    if (styles.contains('decrease')) {
      count--
    } else if (styles.contains('increase')) {
      count++
    } else if (styles.contains('reset')) {
      count = 0
    }
    value.textContent = count
  })
})
