"""
This program prompts the user to enter their first name,
last name, email, and password. It then validates the email and password
using the validation function from the CSV_module module.
Next, it generates a unique ID for the student using the create_ID function.
The student data, including the ID, first name, last name, email, and password,
is stored in a list. Finally, the add_data function from the CSV_module
module is called to add the student data to a CSV file.
The read_csv function is then called to display the contents of the CSV file.
"""
# Import the Path class from the pathlib module.
from pathlib import Path
# TODO: Import the functions from the csv_handler module.
from csv_handler import create_csv, read_csv
# TODO: Import the functions from the Student_Profile module.
from Student_Profile import create_id, validation


# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
file_out_path = current_directory / "Resources" / "students.csv"

# Create a variable for the header that contains the column names.
column_data = ['ID', 'First Name', 'Last Name', 'Email', 'Password']

# Create user prompts for the student to enter their data.
# TODO: Create a prompt to enter the first name.
first_name = input("first name?")

# TODO: Create a prompt to enter the last name.
last_name = input("last name?")

# TODO: Create a prompt to enter the email address.
email = input("email?")

# TODO: Create a prompt to enter the password with a message that
# TODO: says the password should be at least 8 characters long.
password = input("enter a password at least 8 characters long")


# TODO: Call the validation function and pass the email and password.
validation(email, password)

# TODO: Call the create_id function and pass the first and last name.
# TODO: Set the return value to a variable.
student_id = create_id(first_name, last_name)


# TODO: Add the student data and ID to a list.
student_info = [student_id, first_name, last_name, email, password]

# TODO: Call the create_csv function
# TODO: Pass the file path, column data, and student data.
create_csv(file_out_path, column_data, student_info)

# TODO: Call the read _csv function to print the contents of the CSV file.
print(read_csv(file_out_path))
