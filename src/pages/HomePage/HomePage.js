import { useEffect, useState } from "react"
import { getProducts } from "../../api/productapi";
import { connect } from "react-redux";
import './HomePage.css';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate()
    const location = useLocation()
    const newlocation = location.state.response.access_token;
    let [products, setProducts] = useState([])
    
    const addToCart = async (event, payload) => {
        try {
            const data = {
                'productId': payload
            }
             await axios.post('http://3.87.247.127:3000/v1/userproduct', data, {
                headers: {
                    'Authorization': `Bearer ${location.state.response.access_token}`
                }
            })
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await getProducts()
                setProducts(response)
            } catch (error) {
                throw error
            }
        }
        getProduct()
    }, [])
    return (
        <div>
            <h1>Hello Order</h1>
            {products.map((product) => (
                <div id="productContainer">
                <div id="productImage">
                  <img alt="Not Showing" src={product.img} className="productImage"/>
                </div>
                <div id="productDetails">
                    <span className="productDesigner">{product.designer}</span>
                    <h5 className="productName">{product.name}</h5>
                    <div id="priceSection">
                        <h4 className="productPrice">${product.price}</h4>
                        <button className="addtocart" onClick={(event) => addToCart(event, product.id)}>AddCart</button>
                    </div>
                </div>
            </div>
            ))}
            <button className="addtocart" onClick={() => navigate('/cart', {state: newlocation})}>Go to cart</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        number: state.number
    }
}

export default connect(mapStateToProps)(HomePage)