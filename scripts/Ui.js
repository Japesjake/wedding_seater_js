export class Ui{
    addInput{
        var newdiv = document.createElement('div')
        newdiv.innterHTML = "<input type='text' name='myInputs[]'> <input type='button' value='-' onClick='removeInput(this);'>";
    }
    removeInput(btn){
        btn.parentNode.remove()
    }
}