
interface Wizard {
  id: number;
  name: string;
  house: string;
}

type NewWizard = Omit<Wizard, "id">;

const wizards: Wizard[] = [];

function addWizard(data: NewWizard): Wizard {
  const id = wizards.length + 1;

  const wizard: Wizard = {
    id: id,
    name: data.name,
    house: data.house
  };

  wizards.push(wizard);

  return wizard;
}

const wizard1 = addWizard({
  name: "Harry Potter",
  house: "Gryffindor"
});

const wizard2 = addWizard({
  name: "Hermione Granger",
  house: "Gryffindor"
});

console.log(wizards);
