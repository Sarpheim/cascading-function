module.exports = (number) => {
  number = number.toString()
  number = number.replace(/[^0-9\.]/g, "")
  number = number.replace(/\./g, "")
  number = parseInt(number)
  number = number.toString()
  number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  
  return number
}