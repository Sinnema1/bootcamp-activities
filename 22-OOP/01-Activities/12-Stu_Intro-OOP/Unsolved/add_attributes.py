"""Creating a Car class with methods and instances"""

# Define the Car class with five parameters
class Car:
    """Creating a Car class with five parameters and instances"""
    # TODO: Create the __init__ method with five parameters
    # TODO: Initialize the five attributes
    def __init__(self, make=None, model=None, body=None, year=None, color=None):
        self.make = make
        self.model = model
        self.body = body
        self.year = year
        self.color = color


if __name__ == "__main__":
    # TODO: Create prompts for the user to enter the car information.
    car_make = input("What is the make of your car?")
    car_model = input("What is the model of your car?")
    car_body = input("What is the body style of your car?")
    car_year = input("What is the year of your car?")
    car_color = input("What is the color of your car?")

    # TODO: Pass user information to the instance of the Car class.
    car = Car(car_make, car_model, car_body, car_year, car_color)


    print('Here is the information you enter for the car.')
    # TODO: Print the details of the car.
    print("Here is your car information:\n")
    print(f"Your car is a {car.color} {car.year} {car.make} {car.model} {car.body}")
