Wizard Academy — TypeScript Project

Wizard Academy is a TypeScript project developed to practice and demonstrate advanced TypeScript concepts through a simple wizard and spell management system.

The project focuses on writing clean, reusable, and type-safe code using generics, utility types, decorators, type guards, and object-oriented programming.

Features

- **Wizard Management:** Add, search, update, and delete wizards.
- **Spell Management:** Register and manage spells by category.
- **Generic Repository:** Reusable CRUD operations using `Repository<T>`.
- **Generic Filtering:** Filter objects dynamically using generics and `keyof`.
- **Academy Service:** Manage wizards, spells, and spell-casting operations.
- **Event Management:** Track spell casting, failed spells, house registration, and level updates.
- **Type Guards:** Validate houses and wizard objects.
- **Decorators:** Validate spell power, cache results, log method calls, and measure execution time.

Technologies

- TypeScript
- JavaScript
- Node.js
- Git & GitHub

TypeScript Concepts

This project demonstrates:

| Concept | Implementation |
|---|---|
| Generics | `Repository<T>`, `filterBy<T, K>()` |
| Utility Types | `Omit`, `Pick`, `Partial`, `Record`, `Exclude`, `Extract` |
| Advanced Types | `Parameters`, `ReturnType`, `infer`, conditional types |
| Type Guards | `isHouse()`, `isWizard()` |
| Decorators | `@ValidatePower`, `@Cache`, `@Log`, `@MeasureTime` |
| Object-Oriented Programming | Classes, inheritance, encapsulation |
| Discriminated Unions | `AcademyEvent`, `SpellEvent` |
| Index Signatures | `AcademyStatistics` |

Project Structure

```text
wizard-academy/
├── src/
│   ├── types.ts          # Interfaces and TypeScript types
│   ├── repository.ts     # Generic repositories and type guards
│   ├── decorators.ts     # Method decorators
│   ├── services.ts       # Academy business logic
│   └── main.ts           # Examples and demonstrations
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

Installation and Usage

**1. Clone the repository**

```bash
git clone https://github.com/Oumayma-da/wizard_academy.git
cd wizard_academy
```

**2. Install dependencies**

```bash
npm install
```

**3. Compile TypeScript**

```bash
npx tsc
```

**4. Run the project**

```bash
node dist/main.js
```

Example

Create a wizard using the generic repository:

```typescript
const repository = new WizardRepository();

const wizard = repository.add({
  name: "Harry Potter",
  house: "Gryffindor",
  level: 5,
  active: true
});

console.log(repository.findById(wizard.id));

repository.update(wizard.id, { level: 10 });
```

The project also demonstrates successful and failed spell casting using `AcademyService`.

Learning Objectives

- Understand and apply advanced TypeScript concepts.
- Build reusable and type-safe components.
- Practice object-oriented programming.
- Organize code into modules.
- Implement generic repositories and business services.
- Improve code readability and maintainability.

Project Note

This is an educational project. Data is stored in memory and is not persisted in a database.