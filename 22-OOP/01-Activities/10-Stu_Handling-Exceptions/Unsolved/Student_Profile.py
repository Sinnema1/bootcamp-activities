"""
This program validates the email address and password.
And, creates a student ID from the first and last name.
"""
# TODO: Import the sys module.
import sys
print(sys.version)


# TODO: Define the validation() function with email and password.
def validation(email, password):
    """
    Validates the email address and password.

    Parameters:
    - email (str): The email address to validate.
    - password (str): The password to validate.

    Returns:
    - Tuple[str, str]: A tuple containing validated
      email and password if both are valid.

    Raises:
    - ValueError: If the email address is invalid or the password is too short.

    Exits the program with an error message if validation fails.
    """
    # Use a try-except block to catch invalid input for
    # the email and password.
    try:
        # Check if the email address is valid.
        if "@" not in email or "." not in email.split("@")[-1]:
            # Raise a ValueError if the email address is invalid and
            # add a "Invalid email." message.
            raise ValueError("Invalid email.")

        # Check if the password is at least 8 characters long
        if len(password) < 8:
            # Raise a ValueError if the password is invalid.
            # add a "Invalid password." message.
            raise ValueError("Invalid password. Password must be at least 8 characters long.")

        # Return the email and password if they are valid.
        return email, password

    # Catch any ValueError exceptions and print an error message.
    except ValueError as e:
        # Print an error message.
        print(f"\nError: {e}")
        # TODO: Use the sys.exit() function to exit the program
        # and print the reason why.
xw

# TODO: Define the create_ID() function with first and last name.
def create_id():
    """
    This function creates a student ID from the first and last name.
    Parameters:
    - first_name (str): The first name of the student.
    - last_name (str): The last name of the student.

    Returns:
    - str: The student ID.
    """
    # TODO: Create a a base ID by joining the lowercase
    # TODO: first initial in the first name with the lowercase last name,
    # TODO: Create the student ID by adding the base ID to the
    # TODO: length of the first name plus the length last name to the base ID.
    # TODO: Return the student ID to the function call.
