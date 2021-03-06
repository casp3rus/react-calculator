export const commafy = value => {
    
    let integerSide = ''
    let decimalSide = ''
    let commafiedValue = ''

    if (value === '0') return value
  
    if (value.includes('.')) {
      if ( parseInt(value) < 0 ) {
        integerSide = value.substring(1, value.indexOf('.'))
        decimalSide = value.substring(value.indexOf('.'))
        commafiedValue = '-' + parseInt(integerSide).toLocaleString('en-US') + decimalSide
        return commafiedValue
      } else {
        integerSide = value.substring(0, value.indexOf('.'))
        decimalSide = value.substring(value.indexOf('.'))
        commafiedValue = parseInt(integerSide).toLocaleString('en-US') + decimalSide
        return commafiedValue
      }
    }
  
    if( parseInt(value) < 0 ) {
      integerSide = value.substring(1)
      return commafiedValue = '-' + parseInt(integerSide).toLocaleString('en-US')
    } else {
      commafiedValue = parseInt(value).toLocaleString('en-US')
      return commafiedValue
    }
}