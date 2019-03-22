export const getAppName = () => {
  return new Promise(
    (resolve, reject) => {
      const err  = null
      setTimeout(() => {
        if(!err){
          resolve({ code:200, info: {username: 'newAppName~~~'} })
        } else {
          reject()
        }
      },2000);
    }
  )
}
