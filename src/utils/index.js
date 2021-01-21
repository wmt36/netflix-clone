export function chunkArray(array, size) {
  let result = []
  for (let value of array) {
    let lastArray = result[result.length -1 ]
    if(!lastArray || lastArray.length == size){
      result.push([value])
    } else{
      lastArray.push(value)
    }
  }
  return result
}

export function csvJSON(csv) {
  const lines=csv.split('\n')
  let result = []
  const headers = lines[0].split(',')

  for(let i = 1; i < lines.length; i++) {
    let obj = {};
    const currentline = lines[i].split(',')

    for(let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }

    result.push(obj)
  }

  return JSON.stringify(result)
}
