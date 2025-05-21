import { faker } from '@faker-js/faker';

export const createNamesData = (count: number): string[] => {
    return Array.from({ length: count }, () =>
        `${faker.person.firstName()} ${faker.person.lastName()}`
    );
};

export const filterAndGroupNames = (
    names: string[],
    query: string,
    sortAsc: boolean
) => {
    const filtered = query
        ? names.filter((name) =>
            name.toLowerCase().includes(query.toLowerCase())
        )
        : [...names];

    const sorted = [...filtered].sort((a, b) =>
        sortAsc ? a.localeCompare(b) : b.localeCompare(a)
    );

    const grouped: Record<string, string[]> = {};

    for (const name of sorted) {
        const letter = name[0].toUpperCase();
        if (!grouped[letter]) grouped[letter] = [];
        grouped[letter].push(name);
    }

    const entries = Object.entries(grouped);
    const sortedEntries = sortAsc
        ? entries.sort(([a], [b]) => a.localeCompare(b))
        : entries.sort(([a], [b]) => b.localeCompare(a));

    return sortedEntries.map(([title, data]) => ({ title, data }));
};
