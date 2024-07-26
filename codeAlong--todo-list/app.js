
const todos = []

while(true) {
    let action = prompt('Select an action: `add`, `delete`, `list` or `quit`')

    if (action == 'quit') {
        break;
    }

    if (action == 'add') {
        let newItem = prompt('What would you like to add?').toLowerCase()

        if(todos.includes(newItem)){
            console.log('Already on the list!')
        } else {
            console.log(`'${newItem}' added to the list`)
            todos.push(newItem)
        }

    } else if (action == 'list') {
        console.log(`#############`)
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`)
        }
        console.log(`#############`)

    } else if (action == 'delete') {
        let deleteItem = parseInt(prompt('What index would you like to delete?').toLowerCase())
        
        if(deleteItem < 0 || deleteItem >= todos.length) {
            console.log('invalid index!')
        } else {
            console.log(`'${deleteItem}' removed from the list`)
            todos.splice(deleteItem, 1)
        }
    }
}