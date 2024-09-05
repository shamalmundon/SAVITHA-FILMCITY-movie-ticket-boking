import 'axios'
import axios from 'axios'


const commonApi =(reqheader,reqMethod,reqUrl,reqBody)=>{
    const config={
        method:reqMethod,
        url:reqUrl,
        data:reqBody,
        header:reqheader?reqheader:{"Content-Type":"applocation/json"}

    }
    return axios(config)
}

export default commonApi