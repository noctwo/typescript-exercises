interface IEmployee {
    name: string;
    age: number;
    position: string;
    startDate: Date | null;

    getYearsOfService():void;
}

export default IEmployee;