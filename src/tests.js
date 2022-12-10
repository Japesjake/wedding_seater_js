import Person from "./Person";
import Table from "./Table";

export const tests = [
    {people:
        [
            new Person('John', 'Doe'),
            new Person('Jane', 'Doe'),
            new Person('Olivia', 'Jones'),
            new Person('Brandon', 'Black')
        ], tables: [
            new Table(2),
            new Table(2)
        ]
    },{people:
        [
            new Person('James', 'Doe'),
            new Person('Jane', 'Doe'),
            new Person('Olivia', 'Jones'),
            new Person('Brandon', 'Black')
        ], tables: [
            new Table(1),
            new Table(1)
        ]
    }
]