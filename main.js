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
                    this.onSelectedItems()
                })
            })
        },

        onList() {
            this.list.forEach((item, index) => {
                item.children[1].addEventListener('click', () => {
                    this.selectedListItem = item
                    this.selectedCheckboxItem = this.checkbox[index]
                    if (!this.checkbox[index].children[0].checked) {
                        this.checkbox[index].children[0].checked = true
                    } else {
                        this.checkbox[index].children[0].checked = false
                    }
                    this.onSelectedItems()
                })
            })
        },
        initCheckbox() {
            this.checkbox.forEach((item, index) => {
                if (item.children[0].checked) {
                    this.selectedCheckboxItem = item
                    this.selectedListItem = this.list[index]
                    this.onSelectedItems()
                }
            })

            this.checkbox[0].children[0].checked ? console.log('yes') : console.log('false')
            //console.log(this.checkbox[0].children[0])
        },
        onSelectedItems() {
            this.selectedCheckboxItem.classList.toggle('active')
            this.selectedListItem.classList.toggle('active')
        }
    }

    dropdown.initCheckbox()
    dropdown.onCheckbox()
    dropdown.onList()


})