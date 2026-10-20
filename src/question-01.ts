const describeValue = (value: any): string => {

  if (!value) {
    return `${typeof value} | falsy`;
  }

  return `${typeof value} | truthy`;

};

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));	
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));	
console.log(describeValue(undefined));
console.log(describeValue("0"));
console.log(describeValue(NaN));