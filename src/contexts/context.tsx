import { useContext, createContext, ReactNode } from 'react'




export const ProductsContext = createContext([]);



/*type ProductsContextProviderProps = {
    children:ReactNode
}

export function useProducts(){
return useContext(FeaturedProductsContext)
}

export function ProductsProvider({ children }: 
    ProductsContextProviderProps ){
    return(
        <ProductsContext.Provider value = {{}}>
        {children}
        </ProductsContext.Provider>
    )
    
}*/

/////////////////////////////////////////////////////////////

export const FeaturedProductsContext = createContext([])

/*type FeaturedProductsContextProviderProps = {
    children:ReactNode
}

export function useFeaturedProducts(){
return useContext(FeaturedProductsContext)
}

export function FeaturedProductsProvider({ children }: 
    FeaturedProductsContextProviderProps ){
    return(
        <FeaturedProductsContext.Provider value = {{}}>
        {children}
        </FeaturedProductsContext.Provider>
    )
    
}*/

//////////////////////////////////////////////////////////////////

export const GridProductsContext = createContext([])

/*type GridProductsContextProviderProps = {
    children:ReactNode
}

export function useGridProducts(){
return useContext(GridProductsContext)
}

export function GridProductsProvider({ children }: 
    GridProductsContextProviderProps ){
    return(
        <GridProductsContext.Provider value = {{}}>
        {children}
        </GridProductsContext.Provider>
    )
    
}*/

//ReactNode = type property you give "children" in React