export interface Room {
    totalRooms: number;
    availableRooms: number;
    bookedRooms: number;
    
}

export interface RoomList {
    roomNumber?: string;
    // roomNumber was originally a number, but when we switched to using the faux API
    // the API had this property as a string
    // roomNumber : number;
    roomType : string;
    amenities : string;
    price : number;
    photos : string;
    checkinTime : Date;
    checkoutTime: Date;
    rating: number;
}