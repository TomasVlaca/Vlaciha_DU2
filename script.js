const justFood = (people) => {
  const pricePerPerson = 200;
  const totalPrice = people * pricePerPerson;
  return `Catering od Just Food pro ${people} lidí za ${totalPrice} Kč`;
};

const yourMama = (people) => {
  const pricePerPerson = 500;
  const totalPrice = people * pricePerPerson;
  return `Catering od Your Mama pro ${people} lidí za ${totalPrice} Kč`;
};

const flavourHaven = (people) => {
  const pricePerPerson = 3000;
  const totalPrice = people * pricePerPerson;
  return `Catering od Flavour Haven pro ${people} lidí za ${totalPrice} Kč`;
};

const createEvent = (eventName, people, cateringFunction) => {
  const cateringMessage = cateringFunction(people);
  return `Událost ${eventName} s ${cateringMessage}`;
};


console.log(justFood(50));

console.log(createEvent("Inaugurace prezidenta", 100, flavourHaven));

console.log(createEvent("Rodinná oslava", 20, yourMama));
