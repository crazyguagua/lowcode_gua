export function loadScript(url:string){

    return new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        script.onload=()=>{
            
            script.onerror = script.onload = null
            resolve(url)
        }
        script.onerror=(err)=>{
            reject(err)
        }
        script.src = url;
        script.crossOrigin='anonymous'
        document.head.append(script)
    })
}