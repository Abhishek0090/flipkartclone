import axios from 'axios';

const URL = "http://localhost:8000/api";

import * as actionTypes from '../constants/productConstants';

export const getProducts = () => async (dispatch) => { // use second function as middleware
    try {

        const { data } = await axios.get(`${URL}/products`);
        
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message })
    }
}