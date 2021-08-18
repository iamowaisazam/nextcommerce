import React, { useEffect, useState,createContext } from 'react';
import {toast} from 'react-toastify';

const initState = {

    items:[ ],
    subTotal:0,
    discount:0,
    total:10
  };
  
  const CartsReducer = (state = initState, action) => {
  
      switch(action.type){
          

        //_____________ Get Cart
        case 'add_cart': {
        
        let data = action.payload;
        let oldcart = state.items;
        
        let checkProductExist = oldcart.find((val) => { if(val.id == data.id){ return true  }});
       
        if(checkProductExist != undefined){

                  let updatecart = oldcart.filter((val,i,arr) => {
                    if(val.id == data.id){
                      return  val.quantity  = val.quantity + data.quantity;
                    }

                     return val;
                  });

                  oldcart = updatecart;

                  toast.success('Cart Item Updated');

          }else{
                  oldcart.push({ 
                          id : data.id,
                          title : data.title,
                          quantity : data.quantity,
                          price : data.price,
                          thumbnail:data.thumbnail,
                  });

                  toast.success('Cart Item Added');
          }

          // Response
        return {
                ...state, 
                 items:oldcart,
               }
        


               
         //_____________ remove Cart
        } case 'remove_cart':{
        
          let data = action.payload;
          let oldcart = state.items;
          let checkProductExist = oldcart.find((val) => { if(val.id == data.id){ return true  }});
         
          if(checkProductExist != undefined){
  
                  let updatecart = oldcart.filter((val,i,arr) => {
                      if(val.id == data.id){
                        return  val.quantity  = 1 - data.quantity;
                      }

                       return val;
                  });

                  oldcart = updatecart;

                  toast.success('Cart Item Removed');
            }

            // Response
          return {
                  ...state, 
                   items:oldcart,
                 }
          



      //_____________ decreament_cart
        } case 'decreament_cart':{
        
          let data = action.payload;
          let oldcart = state.items;
          let checkProductExist = oldcart.find((val) => { if(val.id == data.id){ return true  }});
         
          if(checkProductExist != undefined){
  
                  let updatecart = oldcart.filter((val,i,arr) => {
                      if(val.id == data.id){
                        return  val.quantity  = val.quantity - data.quantity;
                      }

                       return val;
                  });

                  oldcart = updatecart;

                  toast.success('Cart Item Updated');
            }

            // Response
              return {
                      ...state, 
                      items:oldcart,
                    }

          } default : {
             return state;
          }
      }

  }
  export default CartsReducer;