export const SET_DATA='SET_DATA';
export function setData(data){
  console.log(data);
  return {
    type:SET_DATA,
    payload:data
  }
}
