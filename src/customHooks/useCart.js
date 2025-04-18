import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addToCart, removeFromCart, updateTotal } from '../redux/actions/products';
import useToast from './useToast';

function useCart() {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const customToastify = useToast()
    const { cartItems, subTotal } = useSelector((state) => state.cartProducts);

    function handleRemoveCartItem(selectedItem){
        let filteredItems = cartItems.filter(item=> item._id !== selectedItem._id)
        let totalAmount = subTotal - selectedItem.price
        dispatch(updateTotal(totalAmount))
        dispatch(removeFromCart(filteredItems))
        customToastify(t('removed_from_cart'))
    }

    function handleAddToCart(item){
        let totalAmount = subTotal + item.price
        dispatch(updateTotal(totalAmount))
        dispatch(addToCart(item))
        customToastify(t('added_to_cart'))
    }

  return {handleAddToCart, handleRemoveCartItem }
}

export default useCart