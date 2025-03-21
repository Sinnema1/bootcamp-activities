# TODO: Import the SavingsAccount class from the bank_account file.
from bank_account import SavingsAccount

# TODO: Prompt the user to set the starting balance.
start_bal = int(input("What is your starting balance?"))


# TODO: Create an instance of the `SavingsAccount` class
# TODO: Set he users starting balance.
bank_account = SavingsAccount(start_bal)

# TODO: Prompt the user to deposit their paycheck.
pay = int(input("enter your paycheck amount to deposit: \n"))

# Display the amount the user wants to deposit.
print(f"I will deposit ${pay:,.2f} into your account.")

# TODO: Pass the user's pay to the deposit method
# TODO: using the instance of the SavingsAccount class.
bank_account.deposit(pay)

# TODO: Display the balance of the account to two decimal places and thousands.
print(f"your new bal")

# TODO: Prompt the user to withdraw an amount.
cash = int(input("enter amount: \n"))

# Display the amount the user wants to withdraw.
print(f"I will withdraw ${cash:,.2f} from your account.")

# TODO: Pass the user's amount they want to the withdraw method
# TODO: using the instance of the SavingsAccount class.
bank_account.withdraw(cash)


# TODO: Display the balance of the account to two decimal places and thousands.
print(f"")