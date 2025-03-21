"""This program calculates the monthly payment for a car loan."""

# TODO: Import the calculate_monthly_payment function from the car_loan file.
from car_loan import calculate_monthly_payment

# TODO: Prompt the user to enter the price of the car.
# TODO: Convert the price to a floating point number.
price = float(input("Enter the price of the car\n"))

# TODO: Prompt the user to enter the annual interest rate.
# TODO: Convert the interest rate to a floating point number.
int_rate = float(input("Enter the annual interest rate\n"))

# TODO: Prompt the user to enter the number of months to pay off the loan.
# TODO: Convert the number of months to an integer.
loan_duration = int(input("how many months is your loan?\n"))

# TODO: Call the function and pass the user's input as arguments.
# TODO: Assign the result to a variable.
payment = calculate_monthly_payment(price, int_rate, loan_duration)

# TODO: Print the monthly payment to two decimal places.
print(f"your monthly payment is ${payment:,.2f}")