import Person from "./Person";
import Table from "./Table";

export const tests = [
    [
        [
            new Person('John', 'Doe'),
            new Person('Jane', 'Doe'),
            new Person('Olivia', 'Jones'),
            new Person('Brandon', 'Black')
        ],[
            new Table(2),
            new Table(2)
        ],[
            1
        ]
    ],[
        [
            new Person('John', 'Doe'),
            new Person('Jane', 'Doe'),
            new Person('Olivia', 'Jones'),
            new Person('Brandon', 'Black')
        ],[
            new Table(1),
            new Table(1)
        ],[
            2
        ]
    ]
]