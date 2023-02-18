export const addCart = (pro, cart, dispatch, toast)=>{
    const index = cart.findIndex(i => i._id === pro._id)
    return index < 0 ? dispatch({ type: "ADD_TO_CART", payload: [...cart, {...pro, number: 1}]})
                     : dispatch({ type: "ADD_TO_CART", payload: cart.map((order, inx)=> index === inx 
                     ? {...order, number: order.number + 1}
                     : order)}),
            toast.success("Savatga qo'shildi", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500 
            });
}


export const increment = (pro, dispatch, cart ) =>{
    const index = cart.findIndex(i => i._id === pro._id)
    let newOrder = cart.map((order, inx)=> index === inx

    ? {...order, number: order.number + 1}
    : order)
    dispatch({ type: "ADD_TO_CART", payload: newOrder})
}

export const decriment = (pro,dispatch, cart) =>{
    const index = cart.findIndex(i => i._id === pro._id)
    let newOrder = cart.map((order, inx)=> index === inx
    
    ? {...order, number: order.number - 1}
    : order)
    dispatch({ type: "ADD_TO_CART", payload: newOrder})
}   






















    // export const AddToCart = (pro, cart, dispatch, toast)=>{
    //     const index = cart.findIndex(i => i.id === pro._id)
    //     return index < 0 ? dispatch({ type: "ADD_TO_CART", payload: [...cart, {...pro, number: 1}] }) 
    //                     : (dispatch({ type: "ADD_TO_CART", payload: cart.map((order,inx)=> index=== inx ? {...order, number: order.number + 1} : order)}),
    //                         toast.success("Savatga qo'shildi", {
    //                           position: toast.POSITION.TOP_CENTER,
    //                           autoClose: 1500
    //                         }))
    // }
