// Constructor Validate is imported.
import Validate from '../validate.js';

describe('Validate', () => {

  describe('Username Length', () => {
    it('should return false for username less than 8 characters', () => {
      // TODO: Write a test that checks if isValidUsername() returns false when the username is less than 8 characters.

      // Arrange 
      const inputVal = "test";
      const v = new Validate();

      // Act
      const result = v.isValidUsername(inputVal);

      // Assert
      expect(result).toEqual(false);

    });
  });

  describe('Username all lower case', () => {
    it('should return false for username not containing all lower case characters', () => {
      // TODO: Write a test that checks if isValidUsername() returns false when the username is not all lowercase characters.
      
      // Arrange 
      const inputVal = "Test";
      const v = new Validate;

      // Act
      const result = v.isValidUsername(inputVal);

      // Assert
      expect(result).toEqual(false);
      
    });
  });

  describe('Username valid', () => {
    it('should return true for all lower case username at least 8 characters long', () => {
      // TODO: Write a test that checks if isValidUsername() returns true when the username is at least 8 characters
      // long and contains all lowercase characters.

      // Arrange 

      // Act

      // Assert

    });
  });

  describe('Password Length', () => {
    it('should return false for password less than 8 characters long', () => {
      // TODO: Write a test that checks if isValidPassword() returns false when the password is less than 8 characters.

      // Arrange 

      // Act

      // Assert
      
    });
  });

  describe('Password Uppercase', () => {
    it('should return false if the password does not contain at least 1 uppercase character', () => {
      // TODO: Write a test that checks if isValidPassword() returns false when the password does not contain at least 1 uppercase character.

      // Arrange 

      // Act

      // Assert
      
    });
  });

  describe('Password Lowercase', () => {
    it('should return false if the password does not contain at least 1 lowercase character', () => {
      // TODO: Write a test that checks if isValidPassword() returns false when the password does not contain at least 1 lowercase character.

      // Arrange 

      // Act

      // Assert
      
    });
  });

  describe('Password Numbers', () => {
    it('should return false if the password does not contain at least 1 number', () => {
      // TODO: Write a test that checks if isValidPassword() returns false when the password does not contain at least 1 number.
      
      // Arrange 

      // Act

      // Assert
      
    });
  });

  describe('Password Valid', () => {
    it('should return true if password is at least 8 characters long and contains at least 1 uppercase character, lowercase character, and number', () => {
      // TODO: Write a test that checks if isValidPassword() returns true when the password is at least 8 characters long and contains
      // an uppercase, lowercase, and number.

      // Arrange 

      // Act

      // Assert
      
    });
  });
});
