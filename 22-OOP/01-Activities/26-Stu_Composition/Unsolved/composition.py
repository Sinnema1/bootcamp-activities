"""This script demonstrates composition in Python."""


class Action:
    """A class representing the actions in driving."""

    def __init__(self, action: str):
        """
        Initialize the action with a string representing the action.

        :param action: The action of driving.
        """
        self.action = action

    def do_action(self):
        """Return the action."""
        return self.action

class Sound:
    
    def __init__(self, sound: str):
        self.sound = sound
        
        def make_sound(self):
            return self.sound

class Car:
    """A class representing a car."""

    def __init__(self):
        """
        Initialize a car with a forward action.
        """
        self.action = Action("Drive forward!")
        self.sound = Sound("Beep")

    def start(self):
        """Return the action and sound."""
        return self.action.do_action()
    
    def honk(self):
        return self.sound.make_sound()


class Truck:
    """A class representing a truck."""

    def __init__(self):
        """
        Initialize a truck action.
        """
        self.action = Action("Turn Left!")
        self.sound = Sound("Beep")

    def turn(self):
        """Return the action and sound."""
        return self.action.do_action()
    
    def honk(self):
        return self.sound.make_sound()


if __name__ == "__main__":
    # Create instances of Dog and Cat
    car = Car()
    truck = Truck()

    # Show the sounds of the animals
    print(car.start())
    print(truck.turn())
