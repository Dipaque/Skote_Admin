import {getDownloadURL,getStorage,ref,uploadBytes} from 'firebase/storage'
export async function upload(file,user){
    const fileRef=ref(storage,'users/'+user+'.jpg');
    const snapShot = await uploadBytes(fileRef,file)
    const profileURL =await getDownloadURL(fileRef)

}