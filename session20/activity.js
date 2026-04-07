let friends = [];

function addFriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());
    if (!checkFriend) {
        friends.push(name.toUpperCase());
        console.log(`${name.toUpperCase()} has been added to your friends list.`);
    } else {
        console.log(`${name.toUpperCase()} is already in your friends list.`);
    }
}   

function removeFriend(name) {
    let checkFriend = friends.includes(name.toUpperCase());
    if (checkFriend == true) {
        let index = friends.indexOf(name.toUpperCase());
        friends.splice(index, 1);
        console.log(`${name.toUpperCase()} has been removed from your friends list.`);
    } else {
        console.log(`${name.toUpperCase()} is not in your friends list.`);
    }   
}

function showFriends() {
    if (friends.length > 0) {
        console.log("Your friends list:");
        for (let i = 0; i < friends.length; i++) {
            console.log(`${i + 1}. ${friends[i]}`);
        }
    } else {
        console.log("Your friends list is empty.");
    }
}

addFriend("Alice");
addFriend("Bob");
addFriend("Charlie");
addFriend("Alice");