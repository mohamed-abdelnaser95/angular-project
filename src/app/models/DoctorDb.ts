
export class GetDoctor {
    _id: any;
    name: string;
    discription: string;
    phone: number;
    specialization: string;
    rate: number;
    fees: number;
    available: boolean
    constructor(_id: any, name: string, discription: string, phone: number, specialization: string, rate: number, fees: number, available: boolean) {
        this._id = _id;
        this.name = name;
        this.discription = discription;
        this.phone = phone;
        this.specialization = specialization;
        this.rate = rate;
        this.fees = fees;
        this.available = available;
    }
}