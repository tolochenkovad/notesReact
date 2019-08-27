import React, { useState, useEffect } from 'react';
import AddNote from './AddNote/AddNote';
import './NotesContainer.scss';
import NotesList from './NotesList/Noteslist';
import { getNotesStorage, getTagsStorage, 
    setNoteStorage, setTagsStorage,
    getCategoryStorage, setCategoryStorage} from '../utils/localStorage';
import NoteInfo from './NotesList/NoteInfo';
import Info from './Info/Info';
import { buildTree } from '../utils/makeTree';

const NotesContainer = () => {
    const [notes, setNotes] = useState(getNotesStorage() || []);
    const [isNoteInfo, setNoteInfo] = useState(false);
    const [noteValue, setNoteValue] = useState('');
    const [currentIdNote, setCurrentIdNote] = useState(null);
    const [tags, setTags] = useState(getTagsStorage() || [
        {id: 1, tag: 'important'},
        {id: 2, tag: 'home'},
        {id: 3, tag: 'work'}
    ]);
    const [tagValue, setTagValue] = useState('');
    const [currentIdTag, setCurrentIdTag] = useState(null);
    const [tagsArrNote, setTagsArrNote] = useState([]);
    const [activeTag, setActiveTag] = useState('');
    const [currentTag, setCurrentTag] = useState('');
    const colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const [colorValue, setColorValue] = useState('orange');
    const [category, setCategory] = useState(getCategoryStorage() || []);
    const [parentCategory, setParentCategory] = useState('');
    const [tree, setTree] = useState([]);
    const [categoryArrNote, setCategoryArrNote] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [currentIdCategory, setCurrentIdCategory] = useState(null);
    const [searchValue, setSeacrhValue] = useState('');

    useEffect( () => {
        setNoteStorage(notes);
        setTagsStorage(tags);
        setCategoryStorage(category);
        setTree(buildTree(category));
    }, [notes, tags, category])

    const addNoteToStorage = (text, tagsNote, categoriesNote, color) => {
        setNotes(
            notes.concat([
                {
                    id: Date.now(),
                    text,
                    tags: tagsNote,
                    categories: categoriesNote,
                    color   
                }
            ]) 
        );
    };

    const changeCurrentNote = (id, text, tagsNote, categoriesNote, colorNote) => {
        notes.forEach(note => {
            if (note.id === id){
                note.text = text
                note.tags = tagsNote
                note.categories = categoriesNote
                note.color = colorNote
            }
        });
        let newNotes = [...notes];
        setNotes(newNotes);
    };

    const addNote = (id, text, tagsNote, categoriesNote, colorNote) => {
        if ( notes.some(note => note.id === id) ) {
            changeCurrentNote(id, text, tagsNote, categoriesNote, colorNote);
            return;
        }
        addNoteToStorage(text, tagsNote, categoriesNote, colorNote);
    };

    const removeNote = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    };

    const removeTag = (id, currentTagDel) => {
        setTags(tags.filter(tag => tag.id !== id));
        notes.map(note => 
            note.tags = note.tags.filter( t => t.tag !== currentTagDel))
        let newNotes = [...notes];
        setNotes(newNotes);
    };

    const removeCategory = (id, currentCategoryDel) => {
        setCategory(category.filter(item => item.id !== id));
        notes.map(note => 
            note.categories = note.categories.filter( t => t.category !== currentCategoryDel));
        let newNotes = [...notes];
        setNotes(newNotes);
    };

    const editNote = (id, text, tags, categories, color) => {
        setNoteInfo(true);
        setNoteValue(text);
        setCurrentIdNote(id);
        setTagsArrNote(tags);
        setCategoryArrNote(categories);
        setColorValue(color);
    };

    const editTag = (id, text) => {
        setTagValue(text);
        setCurrentIdTag(id);
    };

    const editCategory = (id, text) => {
        setCategoryValue(text);
        setCurrentIdCategory(id);
    };

    
    const cleanValue = () => {
        setNoteValue('');
        setTagValue('');
        setTagsArrNote([]);
        setCategoryArrNote([]);
        setColorValue('orange');
    };

    const cleanId = () => {
        setCurrentIdNote(null);
    };

    const changeNoteInfo = (bool) => {
        setNoteInfo(bool)
    };

    const changeTag = (tag) => {
        setTagValue(tag)
    };

    const addTagsToStorage = (tag) => {
        setTags(
            tags.concat([
                {
                    id: Date.now(),
                    tag
                }
            ]) 
        );
    };

    const changeCurrentTags = (id, tag) => {
        tags.forEach(item => {
            if (item.id === id) item.tag = tag    
        });
        let newTags = [...tags];
        setTags(newTags);
    };

    const changeCurrentCategory = (id, text) => {
        category.forEach(item => {
            if (item.id === id) item.categoryValue = text    
        });
        let newCategory = [...category];
        setCategory(newCategory);
    };

    const addTag = (id, tag) => {
        notes.map(note =>
            note.tags.map( item => 
                item.tag === currentTag
                ? 
                item.tag = tag
                : null 
            ) 
        )
        let newNotes = [...notes];
        setNotes(newNotes);

        if ( tags.some(item => item.id === id) ) {
            changeCurrentTags(id, tag); 
            return;
        }
        addTagsToStorage(tag)
    };

    const addCategory = (id, categoryValue) => {
        notes.map(note =>
            note.categories.map( item => 
                item.category === currentCategory
                ? 
                item.category = categoryValue
                : null 
            ) 
        )
        let newNotes = [...notes];
        debugger;
        setNotes(newNotes);
        if ( category.some(item => item.id === id) ) {
            changeCurrentCategory(id, categoryValue); 
            return;
        }
        addCategoryArrOfNote(categoryValue)
    };

    

    const addTagsArrOfNote = (tag) => {
        if ( tagsArrNote.some(item => item.tag === tag) ) {
            alert('This tags is already added!');
            return;
        }
        setTagsArrNote(
            tagsArrNote.concat([
                {
                    id: Date.now(),
                    tag
                }
            ]) 
        )
    };

    const addCategoryArrOfNote = (category) => {
        if ( categoryArrNote.some(item => item.category === category) ) {
            alert('This category is already added!');
            return;
        }
        categoryArrNote.forEach(item => 
            {
                if (item.category === parentCategory) {
                    item.category = category;
                }
                return;
            }
        );
        if ( categoryArrNote.some(item => item.category === category) ) {
            return;
        }
        setCategoryArrNote(
            categoryArrNote.concat([
                {
                    id: Date.now(),
                    category
                }
            ]) 
        )
    };

    const removeTagNoteInfo = (id) => {
        setTagsArrNote(tagsArrNote.filter(tag => tag.id !== id))
    };

    const removeCategoryNoteInfo = (id) => {
        setCategoryArrNote(categoryArrNote.filter(category => category.id !== id))
    };

    const getActiveTag = (tag) => {
        setActiveTag(tag)
    };

    const getColorValue = (color) => {
        setColorValue(color)
    };

    const getNeighboringCategory = (value) => {
        if ( category.some(item => item.categoryValue === value) ) {
            alert('This category is already added!');
            return;
        }
        setCategory(
            category.concat([
                {
                    id: Date.now(),
                    categoryValue: value,
                    parent: null
                }
            ]) 
        );
    };

    const getChildCategory = (value) => {
        let idParent = null;
        category.forEach(item => {
            if (item.categoryValue === parentCategory){
                idParent = item.id;
                setCategory(
                    category.concat([
                        {
                            id: Date.now(),
                            categoryValue: value,
                            parent: idParent
                        }
                    ])
                );  
            }
        });
        
    };

    const getTagBeforeEdit = currentTag => {
        setCurrentTag(currentTag)
    };

    const getCategoryBeforeEdit = currentCategory => {
        setCurrentCategory(currentCategory)
    }

    const getParentCategory = (value) => {
        setParentCategory(value);
    };

    return (
        <main className="notesContainer">
            <div className="notesContainer__info">
                <Info tags={tags} 
                      tagValue={tagValue}
                      categoryValue={categoryValue}
                      editTag={editTag}
                      editCategory={editCategory}
                      addTag={addTag}
                      addCategory={addCategory}
                      currentIdTag={currentIdTag}
                      currentIdCategory={currentIdCategory}
                      getActiveTag={getActiveTag}
                      category={category}
                      getTagBeforeEdit={getTagBeforeEdit}
                      getCategoryBeforeEdit={getCategoryBeforeEdit}
                      removeCategory={removeCategory}
                      tree={tree}
                      removeTag={removeTag}/>
            </div>
            <div className="notesContainer__notes">
                <AddNote cleanValue={cleanValue} 
                         changeNoteInfo={changeNoteInfo}
                         cleanId={cleanId}/>

                {
                    activeTag  === '' && 
                    <form className="notesContainer__tools-filter" onSubmit={e => e.preventDefault()}>
                        <input  type="text"
                                value={searchValue}
                                onChange={e => setSeacrhValue(e.target.value)} 
                                className="notesContainer__search"
                                placeholder="Search" />  
                    </form>
                }
               

                {
                    activeTag !== '' ?
                    <div className="notesContainer__tools-filter">
                        <span className="notesContainer__tag">
                            {activeTag}
                            <i onClick={() => setActiveTag('')} className="info__icon-del fas fa-times" />
                            
                        </span>  
                    </div>
                    : null
                } 
   
               
                {
                notes.length
                ? <NotesList    notes={notes} 
                                removeNote={removeNote} 
                                getActiveTag={getActiveTag}
                                activeTag={activeTag}
                                searchValue={searchValue}
                                editNote={editNote}
                            />
                : <p>No note!</p>
                }
            </div>  
            
            {
                isNoteInfo 
                ? <NoteInfo addNote={addNote} 
                            addTag={addTag}
                            tags={tags}
                            changeNoteInfo={changeNoteInfo} 
                            currentIdNote={currentIdNote}
                            changeTag={changeTag}
                            tagValue={tagValue}
                            categoryValue={categoryValue}
                            addTagsArrOfNote={addTagsArrOfNote}
                            tagsArrNote={tagsArrNote}
                            removeTagNoteInfo={removeTagNoteInfo}
                            colorArr={colorArr}
                            colorValue={colorValue}
                            getColorValue={getColorValue}
                            getNeighboringCategory={getNeighboringCategory}
                            category={category}
                            getParentCategory={getParentCategory}
                            getChildCategory={getChildCategory}
                            categoryArrNote={categoryArrNote}
                            addCategoryArrOfNote={addCategoryArrOfNote}
                            removeCategoryNoteInfo={removeCategoryNoteInfo}
                            noteValue={noteValue}/>
                : null
            }
        </main>
    )

}


export default NotesContainer;
