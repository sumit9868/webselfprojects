//map
function mapReduce(arr, fn) {
    return arr.reduce((acc, item) => {
      return [...acc, fn(item)]
    }, [])
  }
//for each

//filter

