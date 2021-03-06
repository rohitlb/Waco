const rootUrl="http://localhost:8000/edusmith/"
export const  get=async (url)=>{
 return await fetch(`${rootUrl}${url}`).then(res=>res.json())
 
}
export const post=async(url,token,data)=>{
return await fetch(`${rootUrl}${url}`,{method:"post",
headers:{
    'Authorization':  `Bearer ${token}`,
    'Content-Type': 'application/json'

},body:JSON.stringify(data)
}).then(res=>res.json())
}

export const googleClientID='987591664766-q71kf6kt1s92um5s780r70oa2qrpufcf.apps.googleusercontent.com'
