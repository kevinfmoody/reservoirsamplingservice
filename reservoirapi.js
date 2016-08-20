const Reservoir = require('./reservoir');
const ReservoirManager = require('./reservoirmanager');
const validators = require('./validators');

const manager = new ReservoirManager();

function createReservoir(req, res) {
  const elements = req.body.elements;

  // Ensure the input is an array of numbers.
  if (!validators.isArrayOfNumbers(elements)) {
    return res.status(400).send('Invalid input format.');
  }

  // Initialize the reservoir.
  const reservoir = new Reservoir(elements);
  const id = manager.addReservoir(reservoir);
  reservoir.setId(id);

  res.json({reservoir});
}

function getReservoir(req, res) {
  const id = Number(req.params.id);

  // Ensure the input is a reservoir ID.
  if (!validators.isNumber(id)) {
    return res.status(400).send('Invalid input format.');
  }

  // Ensure the specified reservoir exists.
  const reservoir = manager.getReservoir(id);
  if (!reservoir) {
    return res.status(404).send('The reservoir does not exist.');
  }

  res.json({reservoir});
}

function updateReservoir(req, res) {
  const id = Number(req.params.id);
  const element = req.body.element;

  // Ensure the input is a reservoir ID and a number to add to the reservoir.
  if (!validators.isNumber(id) || !validators.isNumber(element)) {
    return res.status(400).send('Invalid input format.');
  }

  // Ensure the specified reservoir exists.
  const reservoir = manager.getReservoir(id);
  if (!reservoir) {
    return res.status(404).send('The reservoir does not exist.');
  }

  // Add the element to the reservoir.
  reservoir.addElement(element);
  
  res.json({reservoir});
}

function removeReservoir(req, res) {
  const id = Number(req.params.id);

  // Ensure the input is a reservoir ID and a number to add to the reservoir.
  if (!validators.isNumber(id)) {
    return res.status(400).send('Invalid input format.');
  }

  // Ensure the specified reservoir exists.
  const reservoir = manager.getReservoir(id);
  if (!reservoir) {
    return res.status(404).send('The reservoir does not exist.');
  }

  // Remove the reservoir.
  manager.removeReservoir(id);
  
  res.json({reservoir});
}

module.exports = {
  create: createReservoir,
  get: getReservoir,
  update: updateReservoir,
  remove: removeReservoir
};