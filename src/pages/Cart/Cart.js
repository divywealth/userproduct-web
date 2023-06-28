import { useEffect, useState } from 'react'
import './cart.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

function Cart() {
    const location = useLocation()
    const [arr, setarr] = useState([])

    useEffect(() => {
        const getUserProducts = async () => {
            try {
                const response = await axios.get('http://3.87.247.127:3000/v1/userproducts', {
                    headers: {
                        'Authorization': `Bearer ${location.state}`
                    }
                })
                console.log(response.data)
                setarr(response.data)
            } catch (error) {
                throw error
            }
        }
        getUserProducts()
    }, [location])
    return (
    <section id="cart">
        <h1>CART</h1>
        <table>
            <thead>
                <tr>
                    <td>IMAGE</td>
                    <td>PRODUCT</td>
                    <td>PRICE</td>
                </tr>
            </thead>
            <tbody>
            {arr.map((arr) => (
                 <tr>
                   <td>
                     <img
                       src={arr.product.img}
                       alt=""
                       class="Img"
                     />
                   </td>
                   <td>{ arr.product.name }</td>
                   <td>{ arr.product.price }</td>
                 </tr>
            ))}
            </tbody>
        </table>
    </section>
    )
}

export default Cart