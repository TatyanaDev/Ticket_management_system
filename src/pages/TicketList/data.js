import style from "../../Components/TicketList/styles.module.css";

export const tickets = [
    {
        ticket_id: 11,
        name: 'Shopify too slow',
        approver: 'Battulga Enkhtur',
        avatar: '../../icons/test_avatar.svg',
        priority: 'Highest',
        complexity: '60',
        created_date: '2020-12-04',
        status: 'In Progress',
        action_required: 'On Hold',
        description: 'Ticket description',
        icon: 'warning',

    },
    {
        ticket_id: 2,
        name: 'Change color of primary button',
        approver: 'Battulga Enkhtur',
        avatar: '../../icons/test_avatar.svg',
        priority: 'Medium',
        complexity: '25',
        created_date: '2020-12-23',
        status: 'Backlog',
        action_required: 'Dev asked a question',
        description: '“What is the desired color for primary button?”',
        icon: 'question',
    },
    {
        ticket_id: 1,
        name: 'Fix sales graphic chart',
        approver: 'Battulga Enkhtur',
        avatar: '../../icons/test_avatar.svg',
        priority: 'Low',
        complexity: '80',
        created_date: '2020-12-15',
        status: 'In Estimation',
        action_required: 'On Hold',
        description: 'Dev asked a question',
        icon: 'warning',
    },
    {
        ticket_id: 205,
        name: 'Change color of primary button',
        approver: 'Battulga Enkhtur',
        avatar: '../../icons/test_avatar.svg',
        priority: 'Medium',
        complexity: '25',
        created_date: '2020-12-23',
        status: 'Backlog',
        action_required: 'Dev asked a question',
        description: '“What is the desired color for primary button?”',
        icon: 'question',
    },
    {
        ticket_id: 277,
        name: 'Change color of primary button',
        approver: 'Battulga Enkhtur',
        avatar: '../../icons/test_avatar.svg',
        priority: 'Medium',
        complexity: '25',
        created_date: '2020-12-23',
        status: 'Backlog',
        action_required: 'Dev asked a question',
        description: '“What is the desired color for primary button?”',
        icon: 'question',
    },
    {
        ticket_id: 267,
        name: 'Fix sales graphic chart',
        approver: 'Battulga Enkhtur',
        avatar: '../../icons/test_avatar.svg',
        priority: 'Low',
        complexity: '80',
        created_date: '2020-12-15',
        status: 'In Estimation',
        action_required: 'On Hold',
        description: 'Dev asked a question',
        icon: 'warning',
    },
    {
        ticket_id: 245,
        name: 'Change color of primary button',
        approver: 'Battulga Enkhtur',
        avatar: '../../icons/test_avatar.svg',
        priority: 'Medium',
        complexity: '25',
        created_date: '2020-12-23',
        status: 'Backlog',
        action_required: 'Dev asked a question',
        description: '“What is the desired color for primary button?”',
        icon: 'question',
    },
]

export const styleSelection = (value) => {
    if (['Highest', 'High', 'Action Required'].includes(value)) {
        return style.highest
    } else if (['Medium', 'In Progress'].includes(value)) {
        return style.medium
    } else if (['Low', 'Lowest', 'To Be Released'].includes(value)) {
        return style.low
    } else if (value === 'Backlog') {
        return style.backlog
    } else {
        return style.success
    }
}
