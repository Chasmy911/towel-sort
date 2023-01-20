module.exports = function towelSort (matrix) {
  if (! matrix ) {return []} else {
  let result = [];
  let result2=[]
for (let i=0; i<matrix.length; i++) {
 
  result.push(matrix[i])
}
for (let i=0; i<result.length; i++){
  if(i%2==0) {
result2.push(result[i])
  }
  else {result2.push(result[i].reverse())}
}
return result2.flat()
}

}