
export const subtract = (numOne, numTwo) => {
    const total = numOne - numTwo;
    return total;
  };
  
  export const calculatePercentage = (numOne, numTwo) => {
    const total = (numOne / numTwo) * 100;
    return total;
  };
  
  export const divide = (numOne, numTwo) => {
    const total = numOne / numTwo;
    return total;
  };
  
  // More functionality can be added here if a percentage was not a perfect decimal and needed to be rounded to a certain decimal place, up or down (.floor/.ceil)
  export const formatPercentage = (num) => {
    return num + "%";
  };
  
  const formatDate = (stringDateObject) => {
    if (!(stringDateObject instanceof Date)) {
      // Confirms it is a string date object
      stringDateObject = new Date(stringDateObject);
    }
    return format(stringDateObject, "do MMM yyyy");
  };
  
  export const formatAmount = (num) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };