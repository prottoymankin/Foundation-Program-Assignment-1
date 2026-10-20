const describeValue = (value: any): string => {

  if (!value) {
    return `${typeof value} | falsy`;
  }

  return `${typeof value} | truthy`;

};