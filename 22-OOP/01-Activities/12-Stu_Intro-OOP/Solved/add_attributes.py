""" Creating a Car class with parameters and instances"""


# Define the Car class with five parameters
class Car:
    """Creating a Car class with five parameters and instances"""
    # Create the __init__ method with five parameters
    def __init__(self, make, model, body, year, color):
        # Initialize the five attributes
        self.make = make
        self.model = model
        self.body = body
        self.year = year
        self.color = color


if __name__ == "__main__":
    # Prompt the user to enter the information for the car for each parameter.
    car_make = input("Enter the make of the car: ")
    car_model = input("Enter the model of the car: ")
    car_body = input("Enter the body type for the car: ")
    car_year = int(input("Enter the year the car was made: "))
    car_color = input("Enter the color of the car: ")

    # Create an instance of the `Car` class
    # and pass in the variables from the user.
    car = Car(car_make, car_model, car_body, car_year, car_color)

    # Print the details of the car
    print('Here is the information you enter for the car.')
    print(f"Make: {car.make}")
    print(f"Model: {car.model}")
    print(f"Body: {car.body}")
    print(f"Year made: {car.year}")
    print(f"Color: {car.color}")
