const API_URL = "https://dummyjson.com/products/category/smartphones";

export const getData = async () =>{
    try {
        const response = await fetch(API_URL);
        const data = await response.json()
        return data;
    } catch (err){
        console.error("ini error getData : ",err)
        return null;
    }
}

