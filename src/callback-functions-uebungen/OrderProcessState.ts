enum OrderProcessState {
    Unknown,
    Processing,
    ReadyForShipping, 
    Shipped, 
    Delivered,
    Cancelled
}

export {OrderProcessState};