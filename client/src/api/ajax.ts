import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:6500'
});

export default function ajax(url: string = '', data: { [key: string]: any } = {}, type: string = 'GET') {
  if (type == 'GET') {
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    if (dataStr !=='') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }

    return api.get(url)
  }

  return api.post(url, data)
}