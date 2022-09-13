import { useEffect, useState } from "react"

const useServices = () =>{
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(response => response.json())
            .then(data => {
                setProduct(data)
            })
    }, [])
    return [product, setProduct]
}
export default useServices;