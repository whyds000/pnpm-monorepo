import {rlRequest} from 'rl_basic_core/request'
import {sessionUtils} from 'rl_basic_core/utils'
import {BASE_URL,TIME_OUT,TIME_OUT_MESSAGE} from './config'


const http=new rlRequest({
    baseURL:BASE_URL,
    timeout:TIME_OUT,
    timeoutErrorMessage:TIME_OUT_MESSAGE,
    interceptors:{
        requestInterceptor:(config)=>{
            const token=sessionUtils.getItem<string>('token')
            if(token&&config.headers){
                config.headers.token =token
            }
            return config
        },
        requestInterceptorCatch(error) {
            return error
        },
        responseInterceptor:(data)=>{
            return data
        },
        responseInterceptorCatch(error) {
            return error
        },
    }
})
export {http}
