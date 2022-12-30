// 登录请求约束
interface LoginApiReq {
  userName:string;
  password:string;
}

// 登录响应约束
interface LoginApiRes {
  code: number;
  message:string;
  token:string
}