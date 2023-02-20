export function GetTime(date,n){
   date.setHours(date.getHours()+n)
   let time= date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
   return time
}