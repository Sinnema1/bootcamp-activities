"""This script demonstrates the use of list methods and functions"""

# Define the hobbies and feb_temperatures lists
hobbies = ["windsurfing", "bowling", "mini golf", "stand-up comedy",
           "knitting", "acrobatics", "cross-stitch"]

feb_temperatures = [28, 32, 27, 34, 35, 33, 28, 28, 27, 25, 29, 30, 30, 27, 27,
                    30, 27, 26, 27, 30, 26, 25, 22, 26, 28, 24, 25, 22]

# List methods

# Append the string "bowling" to the end of the hobbies list
hobbies.append("bowling")

# Print the contents of the hobbies list to the console
print(hobbies)
# Output: ['windsurfing', 'bowling', 'mini golf', 'stand-up comedy', 'knitting', 'acrobatics', 'cross-stitch', 'bowling']

# Remove the first occurrence of the string "bowling" from the hobbies list
hobbies.remove("bowling")
print(hobbies)
# Output: ['windsurfing', 'mini golf', 'stand-up comedy', 'knitting', 'acrobatics', 'cross-stitch', 'bowling']

# Remove and return the item at index 6 from the hobbies list
popped_element = hobbies.pop(6)
print(hobbies)
# Output: ['windsurfing', 'mini golf', 'stand-up comedy', 'knitting', 'acrobatics', 'cross-stitch']
print(f"{popped_element} was removed from the hobbies list")
# Output: cross-stitch was removed from the hobbies list

# Built-in functions

# Print the number of elements in the feb_temperatures list
print(len(feb_temperatures))
# Output: 28

# Print the highest value in the feb_temperatures list
print(max(feb_temperatures))
# Output: 35

# Print the lexicographically largest string in the hobbies list
print(max(hobbies))
# Output: windsurfing

# Print the lowest value in the feb_temperatures list
print(min(feb_temperatures))
# Output: 22

# Print the lexicographically smallest string in the hobbies list
print(min(hobbies))
# Output: acrobatics

# Print the sum of all values in the feb_temperatures list
print(sum(feb_temperatures))
# Output: 764

# Print the average of the values in the feb_temperatures list
print(sum(feb_temperatures) / len(feb_temperatures))
# Output: 27.285714285714285

# Print the rounded average of the values in the feb_temperatures list to three decimal places
print(round(sum(feb_temperatures) / len(feb_temperatures), 3))
# Output: 27.286

# Delete the elements at indices 1 and 2 from the hobbies list
del hobbies[1:3]
print(hobbies)
# Output: ['windsurfing', 'knitting', 'acrobatics']