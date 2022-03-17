const [num] = [1, 2, 3];

const user = {
  address: {
    street: "1234",
  },
};

const street = user?.address?.street;

export { num, user, street };
