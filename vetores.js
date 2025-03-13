//1 
var array = new Array(12) //item a)
array[0] = array[2] = array [9] = 108 //item b
array [1] = array[0] - 8
array[3] = array[2] + 6 //item c 
var inserir = [11,32,33,87]
for (i = 4 ; i< 11; i += 2){
    array[i] = inserir.shift()
}//item d
array[5] = (3 * array[6]) + 5
array[7] = array[5] + 10 //item e
array[array[4]] = 72 //item f
array[4] = array[7] //item g

array.splice(5,0,array[10]) && array.splice(10+1,1,array[5+1]) && array.splice(5+1,1)


var aux2 = array[0]
var array0 = array.splice(0,1,array[8])
var array8 =  array.splice(8,1,aux2)//item i

console.log(array)
