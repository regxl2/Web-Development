import {atom, selector} from 'recoil'
export const jobContext = atom({
    key: 'jobContext',
    default: 0
})

export const messagingContext = atom({
    key: 'messagingContext',
    default: 99
})

export const networkContext = atom({
    key: "networkContext",
    default: 99
})

export const notificationContext = atom({
    key: 'notification',
    default: 12
})

export const totalContext = selector({
    key: 'totalContext',
    get: ({get})=>{
        return get(jobContext) + get(messagingContext) + get(notificationContext) + get(networkContext)
    }
})