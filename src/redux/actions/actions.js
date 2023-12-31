export const getAllContacts = ()=> {
        return { type : 'GET_ALL_CONTACTS'}
    }

export const addContact = (contact)=> {
        return {type : 'ADD_CONTACT', payload : contact}
    }
export const getSingleContact = (index)=> {
    return {type : 'GET_SINGLE_CONTACT', index}
}
export const editContact = (editedContact, index)=> {
    return {type : 'EDIT_CONTACT', editedContact, index}
}
export const deleteContact = (index)=> {
    return {type : 'DELETE_CONTACT', deletedId : index}
}
export const searchContact = (searchValue)=> {
    return {type : 'SEARCH_CONTACT', searchValue}
}