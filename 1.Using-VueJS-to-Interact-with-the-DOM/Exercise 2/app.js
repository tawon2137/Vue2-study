new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function (message) {
                alert(message);
            },
            changeInputValue: function (event) {
                this.value = event.target.value;
            }
        }
    });