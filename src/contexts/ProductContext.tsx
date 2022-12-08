import { useContext, useState } from "react"
import { createContext } from "react"
import { ProductItem } from "../Models/ProductModel"

interface ProductProviderType {
    children: any

}

export interface ProductContextType{

    product: ProductItem
    all: ProductItem[]
    featured: ProductItem[]
    flashSaleRight: ProductItem[]
    flashSaleLeft:ProductItem[]
    get: (articleNumber?: string) => void
    getAll: () => void
    getFeatured: (take?: number) => void
    getFlashSaleRight: (take?: number) => void
    getFlashSaleLeft: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}


const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl:string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = { tag: '', articleNumber: '', name: '', description: '', category: '', price: 0, imageName: '' }

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [all, setAll] = useState<ProductItem[]>([])
    const [featured, setFeatured] = useState<ProductItem[]>([])
    const [flashSaleRight, setFlashSaleRight] = useState<ProductItem[]>([])
    const [flashSaleLeft, setFlashSaleLeft] = useState<ProductItem[]>([])
    
    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined){
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getAll = async () => {
        
        const res = await fetch(baseUrl)
        setAll(await res.json())
    }

    
    const getFeatured = async (take:number = 0) => {
        let url =  `${baseUrl}/featured`
            
        if (take !== 0)
            url += `/${take}`
        
        const res = await fetch(url)
        setFeatured(await res.json())
    }


    const getFlashSaleRight = async (take:number = 0) => {
        let url =  `${baseUrl}/gridR`
            
        if (take !== 0)
            url += `/${take}`
        
        const res = await fetch(url)

        setFlashSaleRight(await res.json())

    }

    const getFlashSaleLeft = async (take:number = 0) => {
        let url =  `${baseUrl}/gridL`
            
        if (take !== 0)
            url += `/${take}`
        
        const res = await fetch(url)

        setFlashSaleLeft(await res.json())

    }




    return <ProductContext.Provider value={{product, all, featured, flashSaleRight, flashSaleLeft, get, getAll, getFeatured, getFlashSaleRight, getFlashSaleLeft }}>
    {children}
    </ProductContext.Provider>
}

export default ProductProvider