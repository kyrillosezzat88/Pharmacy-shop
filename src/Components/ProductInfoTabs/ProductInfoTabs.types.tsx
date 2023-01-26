import { ReactNode } from "react"

export type ProductInfoTabsProps = {
    tabs: {
        title: string,
        description: ReactNode
    }[],
}