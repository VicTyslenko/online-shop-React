import React from 'react'
import { AddressBookWrapper } from './StyledAddressBook'
import AddressBookHeader from '../../components/AddressBookHeader/AddressBookHeader'
import AddressBookMain from '../../components/AddressBookMain/AddressBookMain'
const AddressBook = () => {
    return (
        <AddressBookWrapper>
            <AddressBookHeader />
            <AddressBookMain />
        </AddressBookWrapper>
    )
}

export default AddressBook