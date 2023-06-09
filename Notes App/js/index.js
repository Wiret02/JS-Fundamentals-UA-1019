const appEl = document.querySelector('#app');
const btnEl = document.querySelector('#btn');
const btnRemoveAll = document.querySelector('#btn-remove');

getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);
});

function createNoteEl(id, content) {
    const element = document.createElement('textarea');
    element.classList.add('note');
    element.placeholder = 'An empty note';
    element.value = content;

    element.addEventListener('dblclick', () => {
        const warning = confirm('Do you want to delete this note?')

        if (warning === true) {
            deleteNote(id, element)
        }
    })

    element.addEventListener('input', () => {
        updateNote(id, element.value)
    })

    return element;
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);
    saveNote(notes);
    appEl.removeChild(element);
}

function deleteAllNotes() {
    let notes = getNotes();
    let elements = document.querySelectorAll('.note');
    notes = [];
    saveNote(notes);
    elements.forEach(element => appEl.removeChild(element));
}

function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);

}

function addNote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    }
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);

    saveNote(notes);
}

function saveNote(notes) {
    localStorage.setItem('note-app', JSON.stringify(notes));
}

function getNotes() {
    return JSON.parse(localStorage.getItem('note-app') || '[]');
}

btnEl.addEventListener('click', addNote);

btnRemoveAll.addEventListener('click', () => {
    const warning = confirm('Do you want to delete all notes?')

    if (warning === true) {
        deleteAllNotes();
    }
})