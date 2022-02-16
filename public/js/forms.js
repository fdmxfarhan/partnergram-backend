$(document).ready(function(){
    $('#add-role').click(() => {
        $('#select-role').fadeIn(500);
        $('.black-modal').fadeIn(500);
    });
    $('.black-modal').click(() => {
        $('#select-role').fadeOut(500);
        $('.black-modal').fadeOut(500);
    });
    var rolesLength = parseInt(document.getElementById('roles-length').textContent);
    var roles = [];
    for(var i=0; i<rolesLength; i++){
        roles.push({
            id: i,
            item: $(`#role-select-${i}`),
            name: $(`#role-name-${i}`).text(),
        });
    }
    roles.forEach(role => {
        role.item.click(() => {
            var newRole = document.createElement('div');
            newRole.classList.add('role');
            newRole.appendChild(document.createTextNode(role.name));
            document.getElementById('roles-view').appendChild(newRole);
            var input = document.createElement('input');
            input.classList.add('hidden');
            input.setAttribute('name', 'roles');
            input.setAttribute('value', role.name);
            document.getElementById('roles-view').appendChild(input);
            
            $('#select-role').fadeOut(500);
            $('.black-modal').fadeOut(500);
        });
    });
});