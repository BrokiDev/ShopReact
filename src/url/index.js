const BASE_URL = 'https://64af4ab6c85640541d4e4000.mockapi.io';
export const URL = {
    Product: {
        URL: `${BASE_URL}/Products`,
        config: {
        method: 'GET',
        headers:  {
        'Content-Type': 'application/json',
        },
    
        }  
    },

    CATEGORIES: {
        URL: `${BASE_URL}/categories`,
        config: {
            method: 'GET',
            headers:  {
            'Content-Type': 'application/json',
            },
        }
    } 
}