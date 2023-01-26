export type ProductPorpsTypes = {
    id: string,
    name: string,
    description?: string,
    category: string,
    image: string,
    rate?: number,
    price: number;
    Qty?: number,
    Brand?: string,
    BtnAction: () => void
}