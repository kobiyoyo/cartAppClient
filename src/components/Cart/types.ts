export type CartProps = {
    id: number,
    quantity: number,
    total: number,
    sub_total: number,
    product: {
      id: number,
      name: string,
      price: number,
      code: string,
    }

}
export type CartListProps = {
    data: CartProps[]
}
