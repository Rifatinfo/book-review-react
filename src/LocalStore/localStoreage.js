const getStoredSubject = () =>{
    const storedSubjectString = localStorage.getItem('subject');
    if(storedSubjectString){
       return JSON.parse(storedSubjectString);
    }
    return [];
}

const saveSubjectToLocalStorage = subject =>{
    const subjectStringified = JSON.stringify(subject);
    localStorage.setItem('subject', subjectStringified);
}

const addToLocalStorage = id =>{
    const subject = getStoredSubject();
    subject.push(id);

    // save to local storage 
    saveSubjectToLocalStorage(subject);
}

export {addToLocalStorage,getStoredSubject};