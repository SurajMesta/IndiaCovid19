import Axios from 'axios'

export const fetchTotal= async()=>{
    try{
     let result= await Axios.get('https://api.covidindiatracker.com/total.json')

     return result.data
    }
    catch(err){
    return err
    }
}

export const stateDrop= async()=>{
  try{
    let result= await Axios.get('https://api.covidindiatracker.com/state_data.json')
    return result
  }
  catch(err){
      return err

  }
}


