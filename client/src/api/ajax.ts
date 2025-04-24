import axios from 'axios'

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

    return axios.get(url)
  }

  return axios.post(url, data)
}