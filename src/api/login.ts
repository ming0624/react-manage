import request from './request'

export const captchaImgApi = () => request.get('/prod-api/captchaImage')

export const loginApi  = (params:LoginApiReq):Promise<LoginApiRes> => request.post('/api/login', params)