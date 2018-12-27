// throw


// try{

// } catch{


// }

// return var.filter => 

// TRABAJAR CON FUNCIONES PURAS === LE PASO LOS VALORES POR PARAMETRO, Y TRABAJAMOS CON VARIABLES DENTRO DE SCOPE DE LA FUNCION

// STORE = ALMACEN DE DATOS
// STATE = TODA LA INFO DE LA APP
// REDUCERS = FUNCION QUE MANEJA EL STATE
// ACTION = DATOS QUE LLEGAN AL REDUCER
// DISPATCH = FUNCION QUE COMUNICA DATOS AL STORE

// -IMPORTAR EL JS (cdn)
// INICIALIZAR EL STATE
// CREAR EL STORE (REDUCER=INITIALSTATE, ACTION)
// NOS SUSCRIBIMOS
// PODEMOS DESPACHAR ACCIONES AL STORE
// PODEMOS LEER EL ESTADO EN UN MOMENTO

// NPM I REDUX
// NPM I react-refucer


// EN EL INDEX IMPORTAR:
// redux = createStore
// react-redux = Provider

let initialState = {
    profile:{},
    products:[],
    questions:[]
}

let profileReducer = function(state={}, action){


    return state
}

let productsReducer = function(state={}, action){


    return state
}

let rootReducer=Redux.combineReducers({
    profile:profileReducer,
    products: productsReducer
})


// EN APP.JS IMPORTAMOS
// import { connect } from "react-redux";

// LISTA DE PRODUCTOS
//      - FILTROS: POR CATEGORIA
//      - ORDENAR: POR PRECIO, MAS VENDIDOS
//      - DETALLE DEL PRODUCTO

// CARRITO
//      LOS PRODUCTOS SELECCIONADOS (CANTIDAD, PRECIO, SUBTOTAL)

// FAVORITOS
