export const formatCurrency = (price: string) => {
    const currency = price.split('&nbsp;')
    return {
        cost: Number(currency[0]),
        currency: currency[1]
    }
}

export function formatCash(price: number) {
    return String(price).split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}

export function getJwtFromCookie() {
    const cookies = document.cookie.split(';');
    console.log(cookies)
    
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith('access_token=')) {
        return cookie.substring(13);
      }
    }
    return null;
  }