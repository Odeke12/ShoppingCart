import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import {Stack} from 'react-bootstrap'

type CartItemsProps = {
    id: number,
    quantity: number
}

export function CartItem({id, quantity} : CartItemsProps){
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(item => item.id === id)
    if (item === null) return null

    return (
        <Stack direction="horizontal">
            <img src={item?.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }}/>
        </Stack>
    )
}