import Database from "../Firebase/Firebase"

export const fetchUsers = async (action) => {
   const url = Database.collection('users')
   await url
     url.onSnapshot(snapShot => {
       const fetchedUsers  = []
       snapShot.forEach(doc => {
           const fetchedUser = {
            id: doc.id,
            ...doc.data()  
           } 
           fetchedUsers.push(fetchedUser) 
       })
       action(fetchedUsers)
   }) 
}

export const fetchUserMessages = async(action, id) => {
  const url = Database.collection('messages')
  await url
  url.orderBy('timestamp').onSnapshot(snapShot => {
    const fetchedMessages = []
    snapShot.forEach(doc => {
      const fetchedMessage = {
        id: doc.id,
        ...doc.data()
      }
      fetchedMessages.push(fetchedMessage)
    })
    action(fetchedMessages.filter(message => message.recieverId === id || message.senderId === id))
  })
}