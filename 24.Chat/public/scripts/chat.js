
const room = window.location.pathname.replace(/\//g, '');
const socket = io(`http://localhost:3000/${room}`);

let user = '';

socket.on('update_messages', (messages) => {
  updateMessagesOnScreen(messages);
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#message_form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!user) {
      alert('Defina um usuário');
      return;
    }

    const message = document.forms['message_form_name']['msg'].value;
    document.forms['message_form_name']['msg'].value = '';
    
    socket.emit('new_message', { user: user, msg: message});
  });

  const userForm = document.querySelector('#user_form');
  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    user = document.forms['user_form_name']['user'].value;
    document.forms['user_form_name']['user'].value = '';
    userForm.parentNode.removeChild(userForm);
  });
});

function updateMessagesOnScreen(messages) {
  let ul_messages = '<ul>';

  messages.forEach(data => {
    ul_messages += `<li>${data.user}: ${data.msg}</li>`;
  });

  ul_messages += '</ul>';

  document.querySelector('#messages').innerHTML = ul_messages;
}