document.addEventListener('DOMContentLoaded', () => {

    const dropdown = {
        selectedCheckboxItem: null,
        selectedListItem: null,
        checkbox: document.querySelectorAll('.checkbox-item'),
        list: document.querySelectorAll('.list-item'),
        onCheckbox() {
            this.checkbox.forEach((item, index) => {
                item.addEventListener('change', () => {
                    this.selectedCheckboxItem = item
                    this.selectedListItem = this.list[index]
                    dropdown.onSelectedItems()
                })
            })
        },

        onList() {
            this.list.forEach((item, index) => {
                item.addEventListener('click', () => {
                    this.selectedListItem = item
                    this.selectedCheckboxItem = this.checkbox[index]
                    if(!this.checkbox[index].children[0].checked){
                        this.checkbox[index].children[0].checked = true
                    } else{
                        this.checkbox[index].children[0].checked = false
                    }
                    dropdown.onSelectedItems()
                })
            })
        },
        onSelectedItems() {
            this.selectedCheckboxItem.classList.toggle('active')
            this.selectedListItem.classList.toggle('active')
        }
    }

    dropdown.onCheckbox()
    dropdown.onList()


})