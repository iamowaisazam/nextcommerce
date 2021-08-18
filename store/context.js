import React, { useEffect, useState,createContext } from 'react';
import {toast} from 'react-toastify';

const Context = createContext();
const Provider =  ({ children }) => {

  
// Propersties
const [cart,setCart] = useState([]);


  const addToCart = async (data) => {

         let checkProductExist = await cart.find((val) => {  if(val.id == data.id){ return true  } } );
         if(checkProductExist != undefined){

                                let updatecart = cart.filter((val,i,arr) => {

                                            if(val.id == data.id){
                                                  if(data.type == "r"){

                                                      return  val.quantity  = 1 - data.quantity;

                                                  }else if(data.type == 'm'){
                                                    
                                                      return  val.quantity  = val.quantity - data.quantity;
                                                  
                                                  }else{
                                                        return  val.quantity  = val.quantity + data.quantity;
                                                      }
                                              
                                              }else{

                                              return val
                                              }
                                      });

                                      
                                  setCart(updatecart);
                                  toast.success('Cart Updated');

                                      
        }else{

                                  let newcart = [];
                                  newcart.push({ 
                                        id : data.id,
                                        title : data.title,
                                        slug : data.slug,
                                        quantity : data.quantity,
                                        price : data.price,
                                        thumbnail:data.thumbnail,
                                       });

                                  cart.map((cartItem) => {
                                     newcart.push(cartItem);
                                  })
                                
                                  setCart(newcart);   
                                  
                                  toast.success('Added In Cart');

            }


  }

  // Loading Function 
  useEffect(() => {

      


  },[]);

  
  const contextdata= {
    carts:{
             cart:cart,
             add: addToCart,
          }

  }
   

  return <Context.Provider value={contextdata} >
          {children}
         </Context.Provider>
}

export {Context,Provider};