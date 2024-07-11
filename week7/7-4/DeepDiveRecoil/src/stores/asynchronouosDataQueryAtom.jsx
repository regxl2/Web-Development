import {atom, selector} from "recoil";

//Selectors can be used as one way to incorporate asynchronous data into the Recoil data-flow graph.
export const notificationsContext = atom({
    key: 'notifications',
    default: selector({
        key: 'notificationsSelector',
        get: async()=>{
            // this 5second waiting to show that there will be a white screen until the data is not loaded.
            await new Promise((resolve) => setTimeout(()=>{resolve()}, 5000));
            const jsonPromise = await fetch("https://sum-server.100xdevs.com/notifications")
            return await jsonPromise.json()
        }
    })
})

export const totalNotificationsSelector = selector({
    key: 'totalNotifications',
    get: ({get})=>{
        const notifications = get(notificationsContext)
        return notifications.notifications + notifications.jobs + notifications.network + notifications.messaging
    }
})