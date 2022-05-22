import { Link, useNavigate } from "react-router-dom"

const Cart = () => {

  const navigate = useNavigate()

  return (
    <>
      <div>Cart</div>
      <button onClick={() => navigate(-1)} className="btn">Volver</button>
    </>
  )
}
export default Cart