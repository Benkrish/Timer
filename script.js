const dayEle = document.querySelector('.dayEle')
const hourEle = document.querySelector('.hourEle')
const minuteEle = document.querySelector('.minuteEle')
const secEle = document.querySelector('.secEle')
const counterTime = document.querySelector('.counterTime')
const container = document.querySelector('.container')

const second = 1000
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour // Converted everything to milliseconds

const timeFunction = () => {
  let dd, mm, yyyy

  while (true) {
    dd = prompt('Enter a day').padStart(2, '0')
    if (Number(dd) >= 1 && Number(dd) <= 31) break
    alert('Please enter a valid day')
  }

  while (true) {
    mm = prompt('Enter a month').padStart(2, '0')
    if (Number(mm) >= 1 && Number(mm) <= 12) break
    alert('Please enter a valid month')
  }

  while (true) {
    // const year = new Date().getFullYear().toString()
    const year = new Date().getFullYear()
    yyyy = prompt('Enter a year')
    if (yyyy.length === 4 && !isNaN(yyyy) && Number(yyyy) >= Number(year)) break
    alert('Please enter a valid 4-digit year')
  }

  const targetDate = `${mm}/${dd}/${yyyy}`
  console.log(targetDate)

  const intervalID = setInterval(() => {
    const timer = new Date(targetDate).getTime()
    console.log(timer)
    const today = new Date().getTime()

    const difference = timer - today

    if (difference <= 0) {
      clearInterval(intervalID)
      counterTime.style.display = 'none'
      return
    }

    const leftDay = Math.floor(difference / day)
    const leftHour = Math.floor((difference % day) / hour)
    const leftMinute = Math.floor((difference % hour) / minute)
    const leftSecond = Math.floor((difference % minute) / second)

    dayEle.innerText = leftDay
    hourEle.innerText = leftHour
    minuteEle.innerText = leftMinute
    secEle.innerText = leftSecond
  }, 0)
}

timeFunction()
