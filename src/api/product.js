

export const getData = async () =>{
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json()
        return data;
    } catch (err){
        console.error("ini error getData : ",err)
        return null;
    }
}

