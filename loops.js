function forLoop(array){
  for (let i = 0; i < 25; i++){
    if (i===1){
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(no){
  while(no > 0){
    console.log(--no)
  } if (no === 0){
    return('done')
  }
}

function doWhileLoop(int){
  let i = 0
  function incrementVariable(){
  i = i++
  return i;
  }
  do {
    console.log('I run once regardless.')
    incrementVariable()
  } while (incrementVariable() < int)
}
