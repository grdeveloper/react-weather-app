export const dateNumberLimit = 10;

export const formatDate = (dateISO) => {
    const date = new Date(
        dateISO
            .slice(0, dateNumberLimit)
            .split('-')
            .join(',')
    );

    return new Intl.DateTimeFormat('de-DE', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(date);
};
