
//  These all interfaces for products only

export interface ThumbnailFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}


// Done ✅
 export interface ThumbnailAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        thumbnail: ThumbnailFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
}


// Done ✅
 export interface Thumbnail {
    data: {
        id: number;
        attributes: ThumbnailAttributes;
    };
}

// Done ✅
 export interface CategoryAttributes {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

// Done ✅
 export interface Category {
    data: {
        id: number;
        attributes: CategoryAttributes;
    };
}
// Done ✅
 export interface ProductAttributes {
    title: string;
    description: string;
    price: number;
    stock: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail: Thumbnail;
    category: Category;
}

// Done ✅
 export interface ProductData {
    id: number;
    attributes: ProductAttributes;
}

// Done ✅
 export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

// Done ✅
 export interface Meta {
    pagination: Pagination;
}


// Done ✅
 export interface ProductsResponse {
    data: ProductData[];
    meta: Meta;
}

// this interface for the data returned from login request 

export interface loginInterface {

    jwt:string,
    user:{
        id:number,
        username:string,
        email:string,

    }
}