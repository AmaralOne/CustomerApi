import { model, Schema, Model, Document } from 'mongoose';
import {Customer} from '../entities/Customer'


const CustomerSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    cpf: { type: String, required: true },
    telefone: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true }
});


const customerModel = model<Customer>('Customer', CustomerSchema);

export default customerModel