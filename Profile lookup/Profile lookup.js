const contacts = [
  {
    firstName: 'John',
    lastName: 'Doe',
    number: '123456789',
    likes: ['JavaScript', 'Football', 'Cooking']
  },

];

function lookupProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || 'No such property';
    }
  }
  return 'No such contact';
}

console.log(lookupProfile('John', 'likes'));
