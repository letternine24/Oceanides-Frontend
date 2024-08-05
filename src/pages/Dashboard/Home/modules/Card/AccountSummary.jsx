import React, { useState, useEffect } from 'react';
import AccountCard from './AccountCard';

const AccountSummary = () => {
    // Set initial state for account balances

    const [accounts, setAccounts] = useState([
        { title: 'E-Wallet', amount: 0.00, icon: 'icon-wallet', action: 'Transfer Ewallet' },
        { title: 'Trading Balance', amount: 0.00, icon: 'icon-trading-balance', action: 'Transfer Trading' },
        { title: 'Cash Equity', amount: 0.00, icon: 'icon-cash-equity', action: '' },
        { title: 'Bonus', amount: 0.00, icon: 'icon-bonus', action: '' },
        { title: 'Total Deposit', amount: 0.00, icon: 'icon-total-deposit', action: '' },
        { title: 'Total Withdrawal', amount: 0.00, icon: 'icon-total-withdrawal', action: '' },
        { title: 'Balance Available Withdrawal', amount: 0.00, icon: 'icon-available-balance', action: '' },
        { title: 'Used Margin', amount: 0.00, icon: 'icon-used-margin', action: '' }
    ]);

    // Simulate fetching data
    useEffect(() => {
        // Simulate an API call
        const fetchData = async () => {
            // Example data fetched from an API
            const dataFromAPI = {
                Ewallet: 0,
                TradingBalance: 0,
                CashEquity: 0,
                Bonus: 0,
                TotalDeposit: 0,
                TotalWithdrawal: 0,
                BalanceAvailableWithdrawal: 0,
                UsedMargin: 0
            };

            const updatedAccounts = accounts.map(account => ({
                ...account,
                amount: dataFromAPI[account.title.replace(/ /g, '')] || account.amount
            }));

            setAccounts(updatedAccounts);
        };

        fetchData();
    }, []);

    return (
        <div className="account-summary">
            <div className="account-cards">
                {accounts.map(account => (
                    <AccountCard
                        key={account.title}
                        title={account.title}
                        amount={account.amount}
                        icon={account.icon}
                        onTransferClick={() => console.log(account.action)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AccountSummary;