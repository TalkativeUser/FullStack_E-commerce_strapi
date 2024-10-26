import { ThumbnailFormat, ThumbnailAttributes, Thumbnail, CategoryAttributes, Category, ProductAttributes, ProductData, Pagination, Meta, ProductsResponse } from "../interfaces";

// Initial state for ThumbnailFormat
export const ThumbnailFormat_initialState: ThumbnailFormat = {
    name: "",
    hash: "",
    ext: "",
    mime: "",
    path: null,
    width: 0,
    height: 0,
    size: 0,
    sizeInBytes: 0,
    url: ""
};

// Initial state for ThumbnailAttributes
export const ThumbnailAttributes_initialState: ThumbnailAttributes = {
    name: "",
    alternativeText: null,
    caption: null,
    width: 0,
    height: 0,
    formats: {
        thumbnail: ThumbnailFormat_initialState
    },
    hash: "",
    ext: "",
    mime: "",
    size: 0,
    url: "",
    previewUrl: null,
    provider: "",
    provider_metadata: null,
    createdAt: "",
    updatedAt: ""
};

// Initial state for Thumbnail
export const Thumbnail_initialState: Thumbnail = {
    data: {
        id: 0,
        attributes: ThumbnailAttributes_initialState
    }
};

// Initial state for CategoryAttributes
export const CategoryAttributes_initialState: CategoryAttributes = {
    title: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: ""
};

// Initial state for Category
export const Category_initialState: Category = {
    data: {
        id: 0,
        attributes: CategoryAttributes_initialState
    }
};

// Initial state for ProductAttributes
export const ProductAttributes_initialState: ProductAttributes = {
    title: "",
    description: "",
    price: 0,
    stock: 0,
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    thumbnail: Thumbnail_initialState,
    category: Category_initialState
};

// Initial state for ProductData
export const ProductData_initialState: ProductData = {
    id: 0,
    attributes: ProductAttributes_initialState
};

// Initial state for Pagination
export const Pagination_initialState: Pagination = {
    page: 0,
    pageSize: 0,
    pageCount: 0,
    total: 0
};

// Initial state for Meta
export const Meta_initialState: Meta = {
    pagination: Pagination_initialState
};

// Initial state for ProductsResponse
export const ProductsResponse_initialState: ProductsResponse = {
    data: [],
    meta: Meta_initialState
};
