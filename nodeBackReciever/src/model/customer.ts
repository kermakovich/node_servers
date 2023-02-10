import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class customer {   
    
    @PrimaryColumn()
    id: number;
   
    @Column()
    email: string;

    @Column()
    company_name: string;
}