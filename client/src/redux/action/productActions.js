import axios from 'axios';
import * as actionTypes from '../constants/productConstants';

const URL = "http://localhost:8000/api";



export const getProducts = () => async (dispatch) => { // use second function as middleware
    try {

        const { data } = await axios.get(`${URL}/products`);
        console.log(data);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message })
    }
}