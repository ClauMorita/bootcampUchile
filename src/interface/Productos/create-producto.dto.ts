export interface CreateProductoDto {
  nombreProducto: string;
  idMarca: number;
  descripcion: string;
  sku: string;
  precio: number;
  stock: number;
  peso: string;
  tamanio: string;
  ingredientes: string;
  material: string;
  imagenes: ImagenProducto[];
  idCategoria: number;
}

export interface ImagenProducto {
  idImagen: number;
  pathImagenProducto: string;
}