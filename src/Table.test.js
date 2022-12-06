import { intros } from 'svelte/internal'
import Table from './Table'
import Person from './Person'

describe('Table', () => {
    it('should return true if table is full', () => {
        const table = new Table(
            [new Person('John', 'Doe')], 1
        )
        expect(table.size <= table.people.length).toBe(true)
    })
})