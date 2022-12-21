import React from 'react'
import { MainWrapp } from './StyledAddressBookMain'
import Button from '../Button/Button'
const AddressBookMain = () => {
    return (
        <MainWrapp>
            <div className="delivery">
                <h3>
                    <p className='address'>address book</p>
                    <p>delivery address</p>
                </h3>


                <Button />

            </div>
            <div className="billing">

                <p>billing address</p>
                <Button />

            </div>
        </MainWrapp>
    )
}

export default AddressBookMain


