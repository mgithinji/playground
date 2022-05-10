var app = new function(){
    this.el = document.getElementById('tasks');
    this.tasks = []
    
    // read
    this.FetchAll = function(){
        var data = '';

        if(this.tasks.length > 0){
            for(i=0; i<this.tasks.length; i++){
                data += '<tr>'; // new table row tag
                data += '<td>' + (i+1) + '. ' + this.tasks[i] + '</td>'; // new cell with data
                data += '<td><button onclick="app.Edit('+i+')" class="btn btn-warning">Edit</button></td>'; // new cell to the right with button for edit
                data += '<td><button onclick="app.Delete('+i+')" class="btn btn-danger">Delete</button></td>'; // new cell to the right with button for delete
                data += '</tr>' // row end tag
            }
        }
        this.Count(this.tasks.length);
        return this.el.innerHTML = data // putting data into the HTML element
    };

    // create
    this.Add = function(){
        el = document.getElementById('add-todo');
        var task = el.value;
        if (task){
            this.tasks.push(task.trim());
            el.value = '';
            this.FetchAll();
        }
    };

    // update
    this.Edit = function(item){
        el = document.getElementById('edit-todo');
        el.value = this.tasks[item]
        document.getElementById('edit-box').style.display = 'block';
        self = this;

        document.getElementById('save-edit').onsubmit = function(){
            var task = el.value;
            if(task){
                self.tasks.splice(item, 1, task.trim()); // remove the item (count=1) and replace with new task
                self.FetchAll();
                CloseInput();
            }
        }
    };

    // delete
    // question: why do we use this.FetchAll() here instead of self.FetchAll() as we did in the Edit() function?
    // answer: because in the Edit() function, we set self = this; (line 38). Can remove this and change self to this in lines 43, 44.
    this.Delete = function(item){
        this.tasks.splice(item, 1);
        this.FetchAll();
    };

    this.Count = function(data){
        var el = document.getElementById('counter');
        var name = 'Tasks';
        if (data){
            if(data == 1){
                name = 'Task';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = "No " + name;
        }
    };

}

app.FetchAll();

function CloseInput(){
    document.getElementById('edit-box').style.display = 'none';
}