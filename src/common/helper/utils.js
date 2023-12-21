
export const isValidEmail = (emailVal) =>{
   const regularExpression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
   return regularExpression.test(emailVal) ? true : false;
}

export const getPostDate = (date)=>{
    const dateVal = date ? date : new Date();
    const dd = String(dateVal.getDate()).padStart(2, '0');
    const mm = String(dateVal.getMonth() + 1).padStart(2, '0');
    const yyyy = dateVal.getFullYear();
    return mm + '/' + dd + '/' + yyyy;
}