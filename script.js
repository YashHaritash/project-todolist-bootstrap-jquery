let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let inpNewTask = $('#inpNewTask');
let btnCleanUp = $('#btnCleanUp');
let btnSort = $('#btnSort');


btnSort.click(()=>{
  $('#ulTasks .done').appendTo(ulTasks)
   

})
btnAdd.click(()=>{
    if(inpNewTask.val() == 0){
        inpNewTask.val('');
        toggleAddBtn(false);
        toggleClearBtn(false);
        return;
    }
    let listItem = $(`<li class="list-group-item">${inpNewTask.val()}</li>`);
    ulTasks.append(listItem);
    listItem.click(()=>{
        $(listItem).toggleClass('done');
    })
    inpNewTask.val('');
    toggleAddBtn(false);
    toggleClearBtn(false);
    toggleSortBtn();
    toggleCleanUpBtn();
    
})

btnClear.click(()=>{
    // console.log('hi');
    inpNewTask.val('');
    toggleClearBtn(false);
    toggleAddBtn(false);
    

})

btnCleanUp.click(()=>{
    $('#ulTasks .done').remove();
    toggleSortBtn();
    toggleCleanUpBtn();
})
// addEventListener('keypress',(event)=>{
//     if(event.keyCode == 13){
//         btnAdd.click();
//     }
// })

inpNewTask.keypress((e)=>{
    if(e.keyCode == 13){
        btnAdd.click();
    }
})
inpNewTask.on('input',()=>{
    toggleClearBtn(inpNewTask.val() !=  ''); 
    toggleAddBtn(inpNewTask.val() !=  '');
})

function toggleClearBtn(enabled){
    if(enabled) btnClear.prop('disabled',false)
    else btnClear.prop('disabled',true)
}

function toggleAddBtn(enabled){
    if(enabled) btnAdd.prop('disabled',false)
    else btnAdd.prop('disabled',true)
}

function toggleSortBtn(){
    if(ulTasks.children().length == 0){
        btnSort.prop('disabled',true);
    }
    else{
        btnSort.prop('disabled',false);
    }
}

function toggleCleanUpBtn(){
    if(ulTasks.children().length == 0){
        btnCleanUp.prop('disabled',true);
    }
    else{
        btnCleanUp.prop('disabled',false);
    }
}



