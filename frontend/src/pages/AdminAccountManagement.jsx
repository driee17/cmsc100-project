import React, { useState } from 'react';
import { NavHeader, AccountList, Sidebar } from '../components';
import { users } from '../TempData';

function AccountManagement() {

    return (
        <div className="body">
            <header>
                <NavHeader />
            </header>
            <main>
                <h1>Account Management</h1>
                <div className="homeLayout">
                    <AccountList data={users} layout="grid" />
                </div>
            </main>
        </div>
    );
}

export default AccountManagement;
