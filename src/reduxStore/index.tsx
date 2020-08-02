import { createStore,applyMiddleware,combineReducers } from "redux";
import ReduxPromise from "redux-promise";
import { SHOPIFY_PRODUCTS,POST_SHOPIFY_PRODUCTS } from "../helpers";

interface IShopifyProduct {
    type:string,
    payload:{data:{products:[]}}
   }
   
   const reducers = {
   
       shopifyProducts : (state={},action : IShopifyProduct) => {
           switch (action.type) {
               case SHOPIFY_PRODUCTS:
                  
                   console.log(action.payload);
                    return action.payload.data.products;
            
               default:
                   return state;
                   
           }
       },
       postProducts : (state={},action:IShopifyProduct) => {
        switch (action.type) {
            case POST_SHOPIFY_PRODUCTS:
               
                console.log(action.payload);
                 return action.payload;
         
            default:
                return state;
                
        }
       }
      
      
   }
   
   const rootReducers = combineReducers({...reducers})
   
   const storeWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
   
   const store = storeWithMiddleware(rootReducers);

   export default store;