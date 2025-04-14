import React from 'react';
import './styles.css';
import AccountCard from './AccountCard';

const AccountList = ({ data }) => {
    return (
        <div className={`accountCardsGroup`}>
            {data.map((account, index) => (
                <AccountCard key={index} account={account} />
            ))}
        </div>
    );
};

export default AccountList;
