export function get(url) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(url, options)
} 

export function post(url, data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return fetch(url, options)
    .then(response => (response.ok ? Promise.resolve(response) : Promise.reject(new Error(response.status))))
} 
