export type ProductFormValues = {
    name: string,
    price: number | null,
    code: string,
    discountId: number | null,
};
export type ProductProps = {
    id: number,
    name: string
    price: number
    code: string
}
export type ProductListProps = {
    data: ProductProps[]
    cartIds: number[]
};
