
function repeat(num, n=null) {
 it = []
 it[Symbol.iterator] = function(){
 return {
  current: num,
 next() {
   if(n==null || n-- >0) {
     return this.current;
   } 
   else {
     return null;
   }
  
 }
 }}
  return it[Symbol.iterator]();
   
 }
    
export {
  count,
  cycle,
  repeat
}