console.log('coucou ça marche');
let markAllRead = document.querySelector('#read-all-notifs');
document.addEventListener('click', () => {
    let unreadNotif = document.querySelectorAll('.unread');
    unreadNotif.forEach(notif => {
        notif.classList.remove('unread')
        console.log('remove')
    })
})