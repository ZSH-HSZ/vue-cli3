import axios from 'axios'
const methods = ["get", "post", "delete", "put", "patch"];
const baseUrl = "/api/v1";
export const [get, post, del, put, patch] = methods.map(action=>{
    return (road, data, params) => 
      axios[action](reqRoad(action, road, data, params))
      .then(res=>{
        return res.data
      })
      .catch(err=>{
        return err
      })
    
})
const apis = {
  dashBoard: '/dashBoard',
}
const parseUrl = (url, params) => {
  return (
    url &&
    url.replace(/\{(\w+)\}/g, (m, n) => {
      return params[n];
    })
  )
}
const serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)&&obj[p]) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
const reqRoad = (method, road, data, params) => {
  if(method==='get' && params) {
    return baseUrl + parseUrl(apis[road], data) + '?' + serialize(params)
  }else {
    return baseUrl + parseUrl(apis[road], data)
  }
}

