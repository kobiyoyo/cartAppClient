export type DiscountProps = {
    id: number
    name: string;
    description: string;
    quantity: number;
}

export type DiscountListProps = {
    data:DiscountProps[]
   }
