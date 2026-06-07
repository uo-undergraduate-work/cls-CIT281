// CustomError class that inherits from Error
class CustomError extends Error {
    constructor(message) {
      super(message); // Pass the message to the Error class
      this.name = "CustomError"; // Set the error name
    }
  }
  
  // Function to throw a generic Error
  function throwGenericError() {
    throw new Error("Generic error");
  }
  
  // Function to throw a CustomError
  function throwCustomError() {
    throw new CustomError("Custom error");
  }
  
  // Try..catch..finally block for generic error
  console.log("Force generic error");
  try {    
    console.log("Generic error try block")
    throwGenericError();
  } catch (error) {
    console.log("Generic error catch block")
    console.log(`${error.name}: ${error.message}`); // Handle the error
  } finally {
    console.log("Generic error finally block");
  }
  
  // Try..catch..finally block for generic error
  console.log("Force custom error");
  try {    
    console.log("Custom error try block")
    throwGenericError();
  } catch (error) {
    console.log("Custom error catch block")
    console.log(`${error.name}: ${error.message}`); // Handle the error
  } finally {
    console.log("Custom error finally block");
  }
  