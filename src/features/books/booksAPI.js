import dataset from '../../data/books.json'

export function fetchLibrary(authorName) {
    return new Promise((resolve) => {
            setTimeout(() => resolve({
                data: authorName
                    ? dataset.filter(item => item.author === authorName)
                    : dataset
            }), 1000)
        }
    );
}

export function fetchDetails(bookTitle) {
    return new Promise((resolve) => {
            setTimeout(() => resolve({ data: dataset.find(
                    book => book.title === bookTitle
                ) }), 1000)
        }
    );
}
