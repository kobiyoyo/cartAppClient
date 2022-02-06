export type CartListProps = {
    data: {
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
}[]
}
