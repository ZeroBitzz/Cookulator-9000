export function addAndUpdateHistory(newRecipeObj){
    const testObj = {
        mealName: 'eggs and bacon',
    }
    let history1 = Number(localStorage.getItem('time1'))
    let history2 = Number(localStorage.getItem('time2'))
    let history3 = Number(localStorage.getItem('time3'))
    let history4 = Number(localStorage.getItem('time4'))
    let history5 = Number(localStorage.getItem('time5'))
    
    //SETS VALUES FOR HISTORY1 
    localStorage.getItem('score1') === null ? localStorage.setItem('score1', 0) : null
    localStorage.getItem('time1') === null || localStorage.getItem('time1') < 0 ? localStorage.setItem('time1', 0) : null
    localStorage.getItem('initials1') === null ? localStorage.setItem('initials1', 0) : null
    
    //SETS VALUES FOR HISTORY2
    localStorage.getItem('score2') === null ? localStorage.setItem('score2', 0) : null
    localStorage.getItem('time2') === null || localStorage.getItem('time2') < 0 ? localStorage.setItem('time2', 0) : null
    localStorage.getItem('initials2') === null ? localStorage.setItem('initials2', 0) : null
    
    //SETS VALUES FOR HISTORY3
    localStorage.getItem('score3') === null ? localStorage.setItem('score3', 0) : null
    localStorage.getItem('time3') === null || localStorage.getItem('time3') < 0 ? localStorage.setItem('time3', 0) : null
    localStorage.getItem('initials3') === null ? localStorage.setItem('initials3', 0) : null
    
    //SETS VALUES FOR HISTORY4 
    localStorage.getItem('score4') === null ? localStorage.setItem('score4', 0) : null
    localStorage.getItem('time4') === null || localStorage.getItem('time4') < 0 ? localStorage.setItem('time4', 0) : null
    localStorage.getItem('initials4') === null ? localStorage.setItem('initials4', 0) : null
    
    //SETS VALUES FOR HISTORY5 
    localStorage.getItem('score5') === null ? localStorage.setItem('score5', 0) : null
    localStorage.getItem('time5') === null || localStorage.getItem('time5') < 0 ? localStorage.setItem('time5', 0) : null
    localStorage.getItem('initials5') === null ? localStorage.setItem('initials5', 0) : null

}