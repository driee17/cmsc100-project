import React from 'react';

function AccountCard({ account, onActionClick }) {
    return (
        <div className="accountCard">
            <div className="accountInfo">
                <div className="accountNameType">
                    <h3>{account.firstName} {account.middleName ? account.middleName + ' ' : ''}{account.lastName}</h3>
                    <p>User Type: {account.userType}</p>
                </div>
                <div className="accountEmail">
                    <p>Email: {account.email}</p>
                </div>
            </div>
            <div className="accountActions">
                <button 
                    className="actionButton" 
                    onClick={() => onActionClick(account)}
                >
                    Actions
                </button>
            </div>
        </div>
    );
}

export default AccountCard;
