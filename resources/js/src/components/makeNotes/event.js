let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'English For IT',
        start: '2021-12-12T10:30:00',
        end: '2021-12-12T11:45:00'
    },
    {
        id: createEventId(),
        title: 'IT日本語３',
        start: '2021-12-11T08:30:00',
        end: '2021-12-11T11:45:00'
    },
    {
        id: createEventId(),
        title: 'Thực hành lập trình mạng',
        start: todayStr + 'T08:30:00',
        end: todayStr + 'T11:45:00'
    },
]

export function createEventId() {
    return String(eventGuid++)
}

