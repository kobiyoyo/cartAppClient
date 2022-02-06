export type ProductFormValues = {
    name: string,
    price: number | null,
    code: string,
    discountId: number | null,
};

export type ProductListProps = {
    data: {
        name: string
        price: number
    }[]
};
